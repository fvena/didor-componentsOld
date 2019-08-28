---
device: true
---

# Row

Utiliza todo el poder de flex-box para realizar una amplia gama de diseños de forma simple, sencilla y adaptable al tamaño de pantalla.

Este componente no aporta ninguna funcionalidad, solo simplifica el manejo del framework evitando tener que utilizar varias clases. Gracias a las propiedades, podemos adaptar el diseño de forma dinámica si fuese necesario.

**Por defecto el framework base incorpora todas las clases que utiliza este componente.**

### Instalación

```javascript
import { Row } from 'didor';

Vue.use(Row);
```

---

### Uso

#### Alineación Horizontal

Permite definir la alineación de los elementos a lo largo del eje horizontal. Ayuda a distribuir el espacio que queda libre en una línea cuando sus elementos tienen un tamaño fijo o han alcanzado su tamaño máximo.

```html
<az-row align="left">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row align="center">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row align="right">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row align="between">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row align="around">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row align="evenly">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>
```

#### Alineación Vertical

Permite definir como se van a alinear verticalmente los elementos.

```html
<az-row valign="top">
  <div>line 1</div>
  <div>line 1 <br> line 2 <br> line 3</div>
  <div>line 1 <br> line 2</div>
</az-row>

<az-row valign="middle">
  <div>line 1</div>
  <div>line 1 <br> line 2 <br> line 3</div>
  <div>line 1 <br> line 2</div>
</az-row>

<az-row valign="bottom">
  <div>line 1</div>
  <div>line 1 <br> line 2 <br> line 3</div>
  <div>line 1 <br> line 2</div>
</az-row>

<az-row valign="baseline">
  <div style="padding-top: 10px">base</div>
  <div style="padding-top: 20px">base</div>
  <div style="padding-bottom: 20px">base</div>
</az-row>

<az-row valign="stretch">
  <div>line 1</div>
  <div>line 1 <br> line 2 <br> line 3</div>
  <div>line 1 <br> line 2</div>
</az-row>
```

#### Dirección

Permite definir la dirección en la que se colocarán los elementos dentro del contenedor, vertical u horizontal. También permite invertir el orden en el que se alinearán los elementos.

```html
<az-row dir="row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</az-row>

<az-row dir="row-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</az-row>

<az-row dir="column">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</az-row>

<az-row dir="column-resverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</az-row>
```

#### Justificación Horizontal

Por defecto, todos los elementos intentarán encajar en una línea modificando su tamaño. Puede cambiar el comportamiento con esta propiedad.

```html
<az-row hwrap="nowrap">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>

<az-row hwrap="wrap">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>

<az-row hwrap="wrap-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>
```

#### Justificación Vertical

Permite indicar como se van a distribuir a lo largo del eje verticallos elementos cuando la altura del contenedor es mayor que el espacio que ocupan. **Nota:** esta propiedad solo tiene efecto cuando hay más de una línea de elementos.

```html
<az-row hwrap="wrap" vwrap="top">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>

<az-row hwrap="wrap" vwrap="middle">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>

<az-row hwrap="wrap" vwrap="bottom">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>

<az-row hwrap="wrap" vwrap="between">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>

<az-row hwrap="wrap" vwrap="around">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>

<az-row hwrap="wrap" vwrap="stretch">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</az-row>
```

#### Separación Horizontal

Permite indicar el espacio horizontal que separa a dos elementos.

```html
<az-row hgutter="none">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row hgutter="small">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row hgutter="large">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>
```

#### Separación Vertical

Permite indicar el espacio vertical que separa a dos elementos cuando hay varias líneas.

```pug
<az-row vgutter="none">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row vgutter="small">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>

<az-row vgutter="large">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>
```

#### Responsive

Permite modificar algunos valores en base al tamaño de pantalla. Existe una propiedad por cada tamaño `palm`, `lap`, `small`, `desk`, `large`, donde le podemos pasar un objeto con las propiedades que son responsive:

- `dir`
- `hgutter`
- `vgutter`


```html
<az-row
  dir="column"
  :palm="{dir: 'row', hgutter: 'small'}"
  :desk="{hgutter: 'large'}"
>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</az-row>
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| inline      | Determina el comportamiento del elemento: en línea o en bloque | `Boolean`  | `false` |
| grid        | Determina si los componentes hijos se tratarán como un grid      | `Boolean`  | `false` |
| align       | Determina como se alinearán los elementos hijos horizontalmente. Acepta:<br> `left` `center` `right` `between` `around` `evenly`           | `String` | --   |
| valign      | Determina como se alinearán los elementos hijos verticalmente. Acepta:<br>`stretch` `top` `middle` `bottom` `baseline`             | `String` | --    |
| dir         | Determina la dirección de la secuencia de los elementos hijos. Acepta:<br>`row` `row-reverse` `column` `column-resverse`             | `String` | --    |
| hwrap       | Determina como se justificarán los elementos hijos horizontalmente. Acepta:<br>`nowrap` `wrap` `wrap-reverse`             | `String` | --    |
| vwrap       | Determina como se justificarán los elementos hijos verticalmente. Acepta:<br>`stretch` `top` `middle` `bottom` `between` `around`           | `String` | --    |
| hgutter      | Determina la separación horizontal entre los elementos hijos. Acepta:<br>`stretch` `none` `small` `default` `large`         | `String` | --    |
| vgutter      | Determina la separación vertical entre los elementos hijos. Acepta:<br>`stretch` `none` `small` `default` `large`         | `String` | --    |
| palm<br>lap<br>small<br>desk<br>large  | Permiten modificar algunas propiedades en función del tamaño de la pantalla, las propiedades responsive son:<br>`dir` `hgutter` `vgutter`             | `Object` | --    |
