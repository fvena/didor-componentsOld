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

```pug
az-row(align="left")
  .block
  .block
  .block

az-row(align="center")
  .block
  .block
  .block

az-row(align="right")
  .block
  .block
  .block

az-row(align="between")
  .block
  .block
  .block

az-row(align="around")
  .block
  .block
  .block

az-row(align="evenly")
  .block
  .block
  .block
```

#### Alineación Vertical

Permite definir como se van a alinear verticalmente los elementos.

```pug
az-row(valign="top")
  .block line 1
  .block line 1 <br> line 2 <br> line 3
  .block line 1 <br> line 2

az-row(valign="middle")
  .block line 1
  .block line 1 <br> line 2 <br> line 3
  .block line 1 <br> line 2

az-row(valign="bottom")
  .block line 1
  .block line 1 <br> line 2 <br> line 3
  .block line 1 <br> line 2

az-row(valign="baseline")
  .block(style="padding-top: 10px") base
  .block(style="padding-top: 20px") base
  .block(style="padding-bottom: 20px") base

az-row(valign="stretch")
  .block line 1
  .block line 1 <br> line 2 <br> line 3
  .block line 1 <br> line 2
```

#### Dirección

Permite definir la dirección en la que se colocarán los elementos dentro del contenedor, vertical u horizontal. También permite invertir el orden en el que se alinearán los elementos.

```pug
az-row(direction="row")
  .block 1
  .block 2
  .block 3

az-row(direction="row-reverse")
  .block 1
  .block 2
  .block 3

az-row(direction="column")
  .block 1
  .block 2
  .block 3

az-row(direction="column-resverse")
  .block 1
  .block 2
  .block 3
```

#### Justificación Horizontal

Por defecto, todos los elementos intentarán encajar en una línea modificando su tamaño. Puede cambiar el comportamiento con esta propiedad.

```pug
az-row(wrap="nowrap")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6

az-row(wrap="wrap")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6

az-row(wrap="wrap-reverse")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6
```

#### Justificación Vertical

Permite indicar como se van a distribuir a lo largo del eje verticallos elementos cuando la altura del contenedor es mayor que el espacio que ocupan. **Nota:** esta propiedad solo tiene efecto cuando hay más de una línea de elementos.

```pug
az-row(wrap="wrap" vwrap="top")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6

az-row(wrap="wrap" vwrap="middle")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6
az-row(wrap="wrap" vwrap="bottom")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6

az-row(wrap="wrap" vwrap="between")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6

az-row(wrap="wrap" vwrap="around")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6

az-row(wrap="wrap" vwrap="stretch")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6
```

#### Separación Horizontal

Permite indicar el espacio horizontal que separa a dos elementos.

```pug
az-row(hgutter="none")
  .block
  .block
  .block

az-row(hgutter="small")
  .block
  .block
  .block

az-row
  .block
  .block
  .block

az-row(hgutter="large")
  .block
  .block
  .block
```

#### Separación Vertical

Permite indicar el espacio vertical que separa a dos elementos cuando hay varias líneas.

```pug
az-row(vgutter="none")
  .block
  .block
  .block

az-row(vgutter="small")
  .block
  .block
  .block

az-row
  .block
  .block
  .block

az-row(vgutter="large")
  .block
  .block
  .block
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| inline      | Determina el comportamiento del elemento: en línea o en bloque | `Boolean`  | `false` |
| grid        | Determina si los componentes hijos se tratarán como un grid      | `Boolean`  | `false` |
| align       | Determina como se alinearán los elementos hijos horizontalmente. Acepta:<br> `left` `center` `right` `between` `around` `evenly`           | `String` | --   |
| valign      | Determina como se alinearán los elementos hijos verticalmente. Acepta:<br>`stretch` `top` `middle` `bottom` `baseline`             | `String` | --    |
| direction   | Determina la dirección de la secuencia de los elementos hijos. Acepta:<br>`row` `row-reverse` `column` `column-resverse`             | `String` | --    |
| wrap        | Determina como se justificarán los elementos hijos horizontalmente. Acepta:<br>`nowrap` `wrap` `wrap-reverse`             | `String` | --    |
| vwrap       | Determina como se justificarán los elementos hijos verticalmente. Acepta:<br>`stretch` `top` `middle` `bottom` `between` `around`           | `String` | --    |
| hgutter      | Determina la separación horizontal entre los elementos hijos. Acepta:<br>`stretch` `none` `small` `default` `large`         | `String` | --    |
| vgutter      | Determina la separación vertical entre los elementos hijos. Acepta:<br>`stretch` `none` `small` `default` `large`         | `String` | --    |
