---
device: true
---

# Celda

### Instalación

```javascript
import { Cell } from 'didor';

Vue.use(Cell);
```

---

### Uso

#### Uso básico

``` html
<az-cell-group>
  <az-cell title="Cell title" value="Content"/>
  <az-cell title="Cell title" value="Content" label="Description"/>
</az-cell-group>
```

#### Iconos

``` html
<az-cell-group>
  <az-cell title="Cell title" value="Content" left-icon="contact"/>
  <az-cell title="Cell title" value="Content" right-icon="contact"/>
</az-cell-group>
```

#### Solo contenido

``` html
<az-cell-group>
  <az-cell value="Content"/>
</az-cell-group>
```

#### Link

``` html
<az-cell-group>
  <az-cell title="Cell title" is-link/>
  <az-cell title="Cell title" value="Content" is-link/>
  <az-cell title="Cell title" value="Content" arrow-direction="down" is-link/>
</az-cell-group>
```

#### Router

``` html
<az-cell-group>
  <az-cell title="Cell title" url="https://vuejs.org/" is-link/>
  <az-cell title="Cell title" to="index" is-link/>
</az-cell-group>
```

#### Uso de slots

``` html
<az-cell-group>
  <az-cell value="Content" is-link>
    <template v-slot:title>
      <h4>Title slot</h4>
    </template>
  </az-cell>
</az-cell-group>
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| title | Título del campo | `String` `Number` | -- |
| value | Contenido del campo | `String` `Number` | -- |
| label | Descripción debajo del título | `String` | -- |
| title-width | Anchura de la etiqueta | `String` | `90px` |
| title-align | Alineación del texto de la etiqueta<br>`left` `center` `right` | `String` | `left` |
| value-align | Alineación del texto del input<br>`left` `center` `right` | `String` | `left` |
| left-icon | Icono del lado izquierdo | `String` | -- |
| right-icon | Icono del lado derecho | `String` | -- |
| url | Link url | `String` | -- |
| to | Target route, utiliza vue-roueter | `String` `Object` | -- |
| isLink | Muestra una flecha | `Boolean` | `false` |
| arrowDirection | Indica la dirección de la flecha<br>`left` `up` `right` `down` | `String` | `right` |

### Eventos

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| click | Se lanza cuando se hace click sobre la celda | `Event`         |

### Slots

| Nombre | Descripción                                             |
| ------ | ------------------------------------------------------- |
| title | Título del campo |
| label | Descripción del campo |
| default | Contenido del campo |
| leftIcon | Botón izquierdo |
| rightIcon | Botón derecho |
