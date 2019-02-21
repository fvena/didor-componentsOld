---
device: true
---

# Icon

### Instalación

```javascript
import { Icon } from 'didor';

Vue.use(Icon);
```

### Generar iconos

```bash
npm run svg
```

::: tip

He utilizado la librería [svg-sprite](https://github.com/jkphl/svg-sprite)
:::

---

### Uso

#### Name

```pug
az-icon(name="build1")
az-icon(name="build2")
az-icon(name="build4")
az-icon(name="build5")
```

#### Size

```pug
az-icon(name="build2" size="1rem")
az-icon(name="build2" size="2rem")
az-icon(name="build2" size="3rem")
az-icon(name="build2" size="4rem")
```

#### Direction

```pug
az-icon(name="build2" dir="up")
az-icon(name="build2" dir="right")
az-icon(name="build2" dir="down")
az-icon(name="build2" dir="left")
```

#### Color

Toma el color del texto

```pug
div(style="color: blue")
  az-icon(name="build2")
```

#### Stroke

```pug
az-icon(name="build2" stroke)
```

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| name        | Nombre del icono                           | `String`  | --        |
| size        | Determinar el tamaño del spinner. Acepta valores en:<br>`px` `rem` `em`             | `String` | `1rem`    |
| dir         | Determinar la dirección del icono, Acepta:<br>`top` `right` `bottom` `left`       | `String` | `top`   |
| stroke      | Colorea el borde cuando el icono está formado por trazos  | `Boolean` | `false`   |
