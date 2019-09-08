---
device: true
---

# TabBar

### Instalación

```javascript
import { TabBar } from 'didor';

Vue.use(TabBar);
```

---

### Uso

#### Uso básico

``` html
<az-tabBar v-model="active">
  <az-tabBar-item icon="palm">Tab</az-tabBar-item>
  <az-tabBar-item icon="lap">Tab</az-tabBar-item>
  <az-tabBar-item icon="desktop">Tab</az-tabBar-item>
  <az-tabBar-item icon="large">Tab</az-tabBar-item>
</az-tabBar>
```

``` js
export default {
  data() {
    return {
      active: 0
    }
  }
}
```

#### Seleccionar por nombre

``` html
<az-tabBar v-model="active">
  <az-tabBar-item icon="palm" name="palm"/>
  <az-tabBar-item icon="lap" name="lap"/>
  <az-tabBar-item icon="desktop" name="desktop"/>
  <az-tabBar-item icon="large" name="large"/>
</az-tabBar>
```

``` js
export default {
  data() {
    return {
      active: 0
    }
  }
}
```

#### Barra de navegación

Cuando funciona como barra de navegación, no es necesario indicar el item activo, lo toma directamente de la ruta de navegación.

Debemos pasar el nombre de la ruta o un objeto si queremos pasar parámetros:

``` html
<az-tabBar>
  <az-tabBar-item icon="palm" to="home">home</az-tabBar-item>
  <az-tabBar-item icon="lap" :to="{name: 'shop', params: {category: 'phones'}}">Shop</az-tabBar-item>
  <az-tabBar-item icon="desktop" to="faqs">Faqs</az-tabBar-item>
  <az-tabBar-item icon="large" to="contact">Contact</az-tabBar-item>
</az-tabBar>
```

#### Mostrar etiqueta

``` html
<az-tabBar v-model="active">
  <az-tabBar-item icon="palm">Tab</az-tabBar-item>
  <az-tabBar-item icon="lap" dot>Tab</az-tabBar-item>
  <az-tabBar-item icon="desktop" info="5">Tab</az-tabBar-item>
  <az-tabBar-item icon="large" info="10">Tab</az-tabBar-item>
</az-tabBar>
```

#### Colores personalizados

``` html
<az-tabBar v-model="active" active-color="var(--color-brand)" inactive-color="var(--color-gray1)">
  <az-tabBar-item icon="palm"/>
>Tab</az-tabBar-item>
  <az-tabBar-item icon="lap" dot>Tab</az-tabBar-item>
  <az-tabBar-item icon="desktop" info="5">Tab</az-tabBar-item>
  <az-tabBar-item icon="large" info="10">Tab</az-tabBar-item>
</az-tabBar>
```

---

### API TabBar

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| v-model | Identifica la pestaña activa | `String` `Number` | `0` |
| fixed | Mantiene la barra fija en la parte de abajo de la pantalla | `Boolean` | `true` |
| safeArea | Habilita un espacio extra en la parte inferior de la barra para dispositivos con un botón en la parte inferior de la pantalla | `Boolean` | `true` |
| z-index | Permite especificar el valor del z-index de la barra | `Number` | `1` |
| active-Color | Color de un item activo | `String` | -- |
| inactive-Color | Color de un item inactivo | `String` | -- |

### Eventos TabBar

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| change | Se lanza cuando cambia el valor del TabBar | **active**: Index de la pestaña activa         |


### API TabBarItem

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| icon | Nombre del icono | `String` | -- |
| name | Identificador de la pestaña | `String` `Number` | -- |
| dot | Muestra un punto rojo sobre el icono | `Boolean` | `false` |
| info | Muestra un mensaje en rojo sobre el icono | `String` | -- |
| to | Nombre de la ruta utilizando vue-router | `String` `Object` | -- |

### Eventos TabBarItem

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| click | Se lanza cuando hacemos click en un item del TabBar | -         |
