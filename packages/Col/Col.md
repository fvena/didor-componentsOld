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

```html
<az-row grid>
  <az-col cols="3">
    <div>3</div>
  </az-col>
  <az-col cols="6">
    <div>6</div>
  </az-col>
  <az-col cols="3">
    <div>3</div>
  </az-col>
</az-row>

<az-row grid>
  <az-col cols="4">
    <div>4</div>
  </az-col>
  <az-col cols="8">
    <div>8</div>
  </az-col>
</az-row>
```

#### Offset

```html
<az-row grid>
  <az-col cols="4">
    <div>4</div>
  </az-col>
  <az-col cols="3" offset="5">
    <div>3</div>
  </az-col>
</az-row>

<az-row grid>
  <az-col cols="3">
    <div>3</div>
  </az-col>
  <az-col cols="4" offset="1">
    <div>4</div>
  </az-col>
  <az-col cols="3" offset="1">
    <div>3</div>
  </az-col>
</az-row>
```


#### Nested

```html
<az-row grid>
  <az-col cols="6">
    <div>
      <az-row grid>
        <az-col cols="12">
          .block 12
        </az-col>
        <az-col cols="6">
          .block 6
        </az-col>
        <az-col cols="6">
          .block 6
        </az-col>
      </az-row>
    </div>
  </az-col>
  <az-col cols="6">
    <div>4</div>
  </az-col>
</az-row>
```

#### Auto / Expand

```html
<az-row grid>
  <az-col auto style="width: 100px">
    <div>Auto</div>
  </az-col>
  <az-col expand>
    <div>Expand</div>
  </az-col>
</az-row>
```

#### Responsive

```html
<az-row grid>
  <az-col cols="4" :palm="{cols:12}">
    <div>4</div>
  </az-col>
  <az-col cols="4" :palm="{cols:6}">
    <div>4</div>
  </az-col>
  <az-col cols="4" :palm="{cols:6}">
    <div>4</div>
  </az-col>
</az-row>

<az-row grid>
  <az-col cols="4" :palm="{cols:12}">
    <div>4</div>
  </az-col>
  <az-col cols="4" :palm="{cols:5}">
    <div>4</div>
  </az-col>
  <az-col cols="4" :palm="{cols:5, offset:2}">
    <div>4</div>
  </az-col>
</az-row>
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| cols        | Determina el número de columnas que ocupará un elemento | `Number`  | `12` |
| offset      | Determina el número de columnas de espacio que un elemento dejará a su izquierda | `Number`  | -- |
| auto        | Hace que un elemento ocupe su anchura por defecto | `Boolean` | `false`   |
| expand      | Hace que un elemento ocupe todo el espacio que queda libre en una fila | `Boolean` | `false`   |
| palm<br>lap<br>small<br>desk<br>large  | Permiten modificar algunas propiedades en función del tamaño de la pantalla, las propiedades responsive son:<br>`cols` `offset`             | `Object` | --    |
