---
device: true
---

# Row

### Row

```javascript
import { Row } from 'didor';

Vue.use(Row);
```

---

### Uso

#### Alineación Horizontal

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

```pug
az-row(valign="stretch")
  .block line 1
  .block line 1 <br> line 2 <br> line 3
  .block line 1 <br> line 2

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
```

#### Dirección

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

```pug
az-row(wrap="wrap" vwrap="stretch")
  .block 1
  .block 2
  .block 3
  .block 4
  .block 5
  .block 6

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
```

#### Separación Horizontal

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
| inline      | Determina si se comporta como un elemento en línea o en bloque | `Boolean`  | `false` |
| grid        | Determina si los componentes hijos se tratan como un grid      | `Boolean`  | `false` |
| align       | Determina como se alinearán los elementos hijos horizontalmente. Acepta:<br> `left` `center` `right` `between` `around` `evenly`           | `String` | --   |
| valign      | Determina como se alinearán los elementos hijos verticalmente. Acepta:<br>`stretch` `top` `middle` `bottom` `baseline`             | `String` | --    |
| direction   | Determina la dirección de la secuencia de los elementos hijos. Acepta:<br>`row` `row-reverse` `column` `column-resverse`             | `String` | --    |
| wrap        | Determina como se justificarán los elementos hijos horizontalmente. Acepta:<br>`nowrap` `wrap` `wrap-reverse`             | `String` | --    |
| vwrap       | Determina como se justificarán los elementos hijos verticalmente. Acepta:<br>`stretch` `top` `middle` `bottom` `between` `around`           | `String` | --    |
| hgutter      | Determina la separación horizontal entre los elementos hijos. Acepta:<br>`stretch` `none` `small` `default` `large`         | `String` | --    |
| vgutter      | Determina la separación vertical entre los elementos hijos. Acepta:<br>`stretch` `none` `small` `default` `large`         | `String` | --    |
