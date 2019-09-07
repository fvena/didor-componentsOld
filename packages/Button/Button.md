---
device: true
---

# Button

### Instalación

```javascript
import { Button } from 'didor';

Vue.use(Button);
```

---

### Uso

#### Tipo

```pug
az-button Default
az-button(type="brand") Brand
az-button(type="success") Success
az-button(type="warning") Warning
az-button(type="danger") Danger
```

#### Plain

```pug
az-button(plain) Default
az-button(type="brand" plain) Brand
az-button(type="success" plain) Success
az-button(type="warning" plain) Warning
az-button(type="danger" plain) Danger
```

#### Ghost

```pug
az-button(ghost) Default
az-button(type="brand" ghost) Brand
az-button(type="success" ghost) Success
az-button(type="warning" ghost) Warning
az-button(type="danger" ghost) Danger
```

#### Forma

```pug
az-button(type="brand") Default
az-button(type="brand" circle) Circle
az-button(type="brand" square) Square
```

#### Disabled

```pug
az-button(type="brand" disabled) Disabled
az-button(type="danger" disabled) Disabled
```

#### Block

```pug
az-button(type="brand" block) Block Brand
az-button(type="danger" block) Block Danger
```

#### Tamaño

```pug
az-button(type="brand" size="large") Large
az-button(type="brand") Default
az-button(type="brand" size="small") Small
```

#### Icono

```pug
az-button(type="brand" iconName="palm") Icon 1
az-button(type="brand" iconName="lap") Icon 2
az-button(type="brand" iconName="desktop") Icon 3

az-button(type="brand" iconName="palm")
az-button(type="brand" iconName="lap")
az-button(type="brand" iconName="desktop")

az-button(type="brand" iconName="palm") Default
az-button(type="brand" iconName="palm" iconPosition="top") Right
az-button(type="brand" iconName="palm" iconPosition="right") Top
az-button(type="brand" iconName="palm" iconPosition="bottom") Bottom
```

#### Loading

```pug
az-button(loading) Guardar
az-button(loading loadingType="square") Guardar
az-button(loading loadingType="bars") Guardar
az-button(loading loadingType="circle") Guardar

az-button(loading loadingText="Buscando") Buscar
az-button(loading loadingText="Configurando") Guardar

az-button(loading loadingIconOnly) Guardar
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| type        | Tipo de botón, opciones:<br>`default` `brand` `success` `warning` `danger` | `String`  | `default` |
| plain       | Determinar si es o no un botón plano       | `Boolean` | `false`   |
| ghost       | Determinar si es o no un botón ghost       | `Boolean` | `false`   |
| circle      | Determina si los lateras son circulares    | `Boolean` | `false`   |
| square      | Determina si las esquinas son cuadradas    | `Boolean` | `false`   |
| block       | Determina si es o no un elemento de bloque | `Boolean` | `false`   |
| disabled    | Deshabilita el botón                       | `Boolean` | `false`   |
| size        | Tamaño del botón, opciones:<br>`large` `normal` `small`       | `String`  | `normal`  |
| iconName    | Indica el nombre de un icono               | `String`  | --        |
| iconPosition | Indica la posición del icono respecto del texto, opciones:<br>`top` `right` `bottom` `left`           | `String`  | `left`        |
| loading     | Determina si su estado es loading o no     | `Boolean` | `false`   |
| loadingType | Determina el tipo de icono de loading, opciones:<br>`star` `circle` `success` `bars` `blobs` `square`      | `String`  | `star`   |
| loadingText | Determina el texto que se mostrará en el estado loading     | `String` | `loading`   |
| loadingIconOnly | Determina si solo se mostrará el icono de loading, sin texto. | `Boolean` | `false`   |
| autofocus   | Misma función que el atributo nativo **autofocus** | `Boolean` | `false`   |
| native-type | Misma función que el atributo nativo **type**, opciones:<br> `button` `submit` `reset`                      | `String`  | `button`      |

### Event

| Event | Description                                             | Arguments |
| ----- | ------------------------------------------------------- | --------- |
| click | Triggered when click button and not disabled or loading | -         |
