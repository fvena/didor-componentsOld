# Contenedor

Un contenedor envuelve nuestro diseño y nos permite definir si queremos que ocupe todo el ancho disponible o que se ajuste a un máximo.

Este componente no aporta ninguna funcionalidad, solo simplifica el manejo del framework evitando tener que utilizar varias clases. Gracias a las propiedades, podemos adaptar el diseño de forma dinámica si fuese necesario.

**Por defecto el framework base incorpora todas las clases que utiliza este componente.**

### Instalación

```javascript
import { Container } from 'didor';

Vue.use(Container);
```

---

### Uso

#### Predefinido

Por defecto el componente `container` limita el ancho máximo de su contenido, según los valores configurados para cada tamaño de pantalla.

::: demo
<az-container>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim. Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id. Curabitur tincidunt varius purus, a scelerisque nibh accumsan in. Ut iaculis ligula mi, sed hendrerit ante vestibulum in. Mauris id pharetra sapien, vel semper tellus. Mauris gravida porttitor purus at viverra. Praesent at elementum elit. Integer in convallis tortor. Phasellus vel auctor enim, sit amet mollis odio. Nulla at fringilla magna, in mattis neque. Phasellus vitae leo at nibh fermentum luctus. Aliquam erat volutpat.
  </p>
</az-container>
:::

```html
<az-container>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
</az-container>
```

#### Fluido

Si queremos que nuestro diseño se adapte al 100% del ancho disponible, solo tenemos que pasarle el atributo `fluid`.

::: demo
<az-container fluid>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim. Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id. Curabitur tincidunt varius purus, a scelerisque nibh accumsan in. Ut iaculis ligula mi, sed hendrerit ante vestibulum in. Mauris id pharetra sapien, vel semper tellus. Mauris gravida porttitor purus at viverra. Praesent at elementum elit. Integer in convallis tortor. Phasellus vel auctor enim, sit amet mollis odio. Nulla at fringilla magna, in mattis neque. Phasellus vitae leo at nibh fermentum luctus. Aliquam erat volutpat.
  </p>
</az-container>
:::

``` html
<az-container fluid>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
</az-container>
```

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| fluid        | Determina como debe de adaptarse su contenido | `Boolean`  | `false` |
