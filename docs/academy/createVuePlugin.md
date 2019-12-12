---
device: false
---

# Como crear un plugin de Vue

Los plugins nos permiten añadir funcionalidad de forma global a nuestro aplicación.

@[toc]

## Paso 1: Preparamos el código base

Comenzaremos instalando Vue CLI y creando un proyecto:

```bash
vue create my-plugin

Vue CLI v4.1.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, CSS Pre-processors, Linter,
 Unit
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Airbnb
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) N
```

Comprobamos que todo funciona correctamente:

```bash
cd my-plugin
yarn serve
```


## Paso 2: Limpiamos el proyecto

## Paso 3: Añadimos la configuración mínima

Basicamente, un plugin de Vue es un objeto con una función `install` que será ejecutado cuando lo incluyamos en nuestra aplicación mediante `Vue.use()`.

La función `install` recibe dos objectos, el objeto global `Vue` y un objeto con las opciones:

```js[index.js]
export default {
  install(vue, opts){
    console.log('¡Instalando el plugin MyPlugin!')
    // Lo divertido comienza aquí
  }
}
```

## Paso 4: Añadimos soporte para tener opciones

Queremos que nuestro plugin sea configurable para que cualquier usuario pueda integrarlo en su aplicación. También hará nuestro plugin más versatil.

Comenzaremos creando las opciones por defecto que definiran el comportamiento base de nuestro plugin, en el caso de que no se espicifique ninguna opción.

Añadiremos el siguiente código fuera del `export default` al principio del archivo:

```js[index.js]
const optionsDefaults = {
  // Recupera el usuario conectado actualmente
  commenterSelector() {
    return {
      id: null,
      fullName: 'Anonymous',
      initials: '--',
      email: null,
    };
  },
  data: {
    // Objecto Hash con todos los elementos que pueden comentarse
    targets: {},
    onCreate(created) {
      this.targets[created.targetId].comments.push(created);
    },
    onEdit(editted) {
      // Obviamente no es necesario
      // Es un ejemplo de que podría hacerse en el callback de una llamada remota
      const { comments } = this.targets[editted.targetId];
      comments.splice(comments.indexOf(editted), 1, editted);
    },
    onRemove(removed) {
      const { comments } = this.targets[removed.targetId];
      comments.splice(comments.indexOf(removed), 1);
    },
  },
};
```

Después mezclamos las opciones por defecto con las que pasa el usuario.

```js[index.js]
export default {
  install(vue, opts){
    // Mezclamos las opciones pasadas por el usuario con las de defecto
    const options = { ...optionsDefaults, ...opts }
    // ...
  }
}
```

## Paso 5: Creamos una instancia para la capa de los comentarios

Algo que debemos evitar con este plugin, es que su DOM y sus estilos, interfieran con la aplicación donde se utilice. Una forma de minimizar el riesgo de que esto suceda, es hacer que el plugin se encuentre en otra instancia de Vue, fuera del árbol de componentes de la aplicación principal.

Añada el siguiente código dentro de la función install:

```js[index.js]
export default {
  install(vue, opts){
    ...

    // Create plugin's root Vue instance
    const root = new Vue({
      data: { targets: options.data.targets },
      render: createElement => createElement(CommentsRootContainer),
    });

    // Mount root Vue instance on new div element added to body
    root.$mount(document.body.appendChild(document.createElement('div')));

    // Register data mutation handlers on root instance
    root.$on('create', options.data.onCreate);
    root.$on('edit', options.data.onEdit);
    root.$on('remove', options.data.onRemove);

    // Make the root instance available in all components
    vue.prototype.$commentsOverlay = root;
    ...
  }
}
```

Basicamente este código realiza lo siguiente:

1. Crea una nueva instancia de Vue y la monta en un `div` al final del `body`.
1. Los eventos definidos en las opciones por defecto son enlazados con los eventos hook de la nueva instancia.
1. Añadimos la propiedad `$commentsOverlay` al prototipo de Vue para exponer la instancia `root` en todos los componentes Vue de la aplicación.

## Paso 6: Hacemos una directiva personalizada

Finalmente, necesitamos definir una forma de indicar que elementos podrán ser comentados en nuestra aplicación. Podemos definir nuevas variables globales desde que los plugins tienen acceso al objecto global Vue.

Añadimos nuestra directiva al final de la función `install`:

```js[index.js]
export default {
  install(vue, opts){

    ...

    // Register custom directive tha enables commenting on any element
    vue.directive('comments-enabled', {
      bind(el, binding) {
        // Add this target entry in root instance's data
        root.$set(root.targets, binding.value, {
          id: binding.value,
          comments: [],
          getRect: () => el.getBoundingClientRect(),
        });

        el.addEventListener('click', (evt) => {
          root.$emit(`commentTargetClicked__${binding.value}`, {
            id: uuid(),
            commenter: options.commenterSelector(),
            clientX: evt.clientX,
            clientY: evt.clientY,
          });
        });
      },
    });
  }
}
```

Esta directiva hace dos cosas:

1. Añade un elemento a la propiedad `target` al `data` de nuestra instancia principal mediante `binding.value`. Esto permite al usuario especificar su propio ID del elemento seleccionado:

  ```html
    <img v-comments-enabled="imgFromDb.id" src="imgFromDb.src" />
  ```

1. Registra el evento `click` en el elemento seleccionado, que devuelve un evento en la instancia raíz. Cazaremos este evento más adelante.

Con esto hemos terminado nuestra función `install`. Ahora desarrollaremos nuestro componente para comentar.

## Paso 7: Definimos el componente "Comments Root Container"

Crearemos el componente `CommentsRootContainer` y lo utilizaremos como el componente raíz de nuestro plugin.

```js[CommentsRootContainer.vue]
<template>
  <div>
    <comments-overlay
        v-for="target in targets"
        :target="target"
        :key="target.id">
    </comments-overlay>
  </div>
</template>

<script>
import CommentsOverlay from "./CommentsOverlay";

export default {
  components: { CommentsOverlay },
  computed: {
    targets() {
      return this.$root.targets;
    }
  }
};
</script>
```

Basicamente hemos creado un contenedor que contendrá todos los comentarios. Los comentarios se muestran mediante el componente `CommentsOverlay` y necesitarán un `target` y un `target.id`.

## Paso 8: Creamos el componente "Comments Overlay"
