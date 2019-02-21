---
device: true
---

# Col

### Col

```javascript
import { Col } from 'didor';

Vue.use(Col);
```

---

### Uso

:::note
Para que el componente funcione correctamente, es necesario definir la propiedad `grid` en el componente `az-row`.
:::

#### Columnas

```pug
az-row(grid)
  az-col(cols="3")
    .block 3
  az-col(cols="6")
    .block 6
  az-col(cols="3")
    .block 3

az-row(grid)
  az-col(cols="4")
    .block 4
  az-col(cols="8")
    .block 8
```

#### Offset

```pug
az-row(grid)
  az-col(cols="4")
    .block 4
  az-col(cols="3" offset="5")
    .block 3

az-row(grid)
  az-col(cols="3")
    .block 3
  az-col(cols="4" offset="1")
    .block 4
  az-col(cols="3" offset="1")
    .block 3
```

#### Responsive

```pug
az-row(grid)
  az-col(cols="4" palm="12" lap="12")
    .block 4
  az-col(cols="4" palm="12" lap="6")
    .block 4
  az-col(cols="4" palm="12" lap="6")
    .block 4

az-row(grid)
  az-col(cols="4" palm="12")
    .block 4
  az-col(cols="4" palm="5")
    .block 4
  az-col(cols="4" palm="5" offset-palm="2")
    .block 4
```

#### Nested

```pug
az-row(grid)
  az-col(cols="6")
    .block
      az-row(grid)
        az-col(cols="12")
          .block 12
        az-col(cols="6")
          .block 6
        az-col(cols="6")
          .block 6
  az-col(cols="6")
    .block 4
```

#### Auto / Expand

```pug
az-row(grid)
  az-col(auto style="width: 100px")
    .block Auto
  az-col(expand)
    .block Expand
```


---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| cols        | Determina el número de columnas que ocupará un elemento | `Number`  | `12` |
| palm        | Determina el número de columnas que ocupará un elemento en tamaño palm | `Number` | --   |
| lap         | Determina el número de columnas que ocupará un elemento en tamaño lap | `Number` | --   |
| small       | Determina el número de columnas que ocupará un elemento en tamaño small | `Number` | --   |
| desk        | Determina el número de columnas que ocupará un elemento en tamaño desk | `Number` | --   |
| offset      | Determina el número de columnas de espacio que un elemento dejará a su izquierda | `Number`  | -- |
| offset-palm | Determina el número de columnas de espacio que un elemento dejará a su izquierda en tamaño palm | `Number` | --   |
| offset-lap  | Determina el número de columnas de espacio que un elemento dejará a su izquierda en tamaño lap | `Number` | --   |
| offset-small | Determina el número de columnas de espacio que un elemento dejará a su izquierda en tamaño small | `Number` | --   |
| offset-desk | Determina el número de columnas de espacio que un elemento dejará a su izquierda en tamaño desk | `Number` | --   |
| auto        | Hace que un elemento ocupe su anchura por defecto | `Boolean` | `false`   |
| expand      | Hace que un elemento ocupe todo el espacio que queda libre en una fila | `Boolean` | `false`   |
