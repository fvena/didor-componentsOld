---
device: true
---

# Icon

### Instalación

Instalamos la librería [vue-svgicon](https://github.com/MMF-FE/vue-svgicon)

```bash
npm install vue-svgicon --save-dev
```

Añadimos un script para generar los iconos

```json[./package.json]
"scripts": {
  "svg": "vsvg -s ./src/assets/icons/svg -t ./src/assets/icons/sprite",
}
```

Añadimos la librería y la configuramos en nuestra aplicaicón

```javascript[./src/main.js]
import SvgIcon from 'vue-svgicon';
import './assets/icons/sprite';

Vue.use(SvgIcon, {
  tagName: 'az-icon',
  classPrefix: 'az-',
});
```

### Generar iconos

```bash
npm run svg
```

---

### Uso

#### Name

```pug
az-icon(name="palm")
az-icon(name="lap")
az-icon(name="small")
az-icon(name="desktop")
az-icon(name="large")
az-icon(name="clipboard")
```

#### Scale

```pug
az-icon(name="palm" scale="1")
az-icon(name="palm" scale="1.2")
az-icon(name="palm" scale="1.4")
az-icon(name="palm" scale="1.6")
```

#### Direction

```pug
az-icon(name="palm" dir="up")
az-icon(name="palm" dir="right")
az-icon(name="palm" dir="down")
az-icon(name="palm" dir="left")
```

#### Color

Por defecto el icono toma el color del texto, pero también podemos definirlo mediante la propiedad color (**admite variables css**) o mediante css.

```pug
az-icon.icon-brand(name="palm" scale="1.3")
az-icon(name="palm" scale="1.3" color="var(--color-success)")
az-icon(name="palm" scale="1.3" color="var(--color-warning)")
az-icon(name="palm" scale="1.3" color="#c13127")
```

```scss
.icon-brand {
  fill: color(brand);
}
```

#### Multiples Colores

También si el icono está formado por varios elementos, podemos colorear cada uno por separado, indicando un color por cada grupo

```pug
az-icon(name="coffe" scale="1.6" color="#c13127 #ef5b49 #cacaea #cacaea #cacaea")
az-icon.coffe-brand(name="coffe" scale="1.6")
```

```scss
.coffe-brand {
  path[pid='0'] {
    fill: color(brand-dark);
  }

  rect[pid='1'] {
    fill: color(brand);
  }

  path[pid='2'] {
    fill: color(gray5);
  }
}
```

#### Degradados

Si definimos un degrado mediante svg, también podemos aplicarle un degradado:

```pug
svg(style="position: absolute; height: 0; width: 0;")
  defs
    linearGradient#gradient-1(x1="0" y1="0" x2="0" y2="1")
      stop(offset="5%"  stop-color="var(--color-brand-light)")
      stop(offset="95%" stop-color="var(--color-brand-dark)")

    linearGradient#gradient-2(x1="0" y1="0" x2="0" y2="1")
        stop(offset="5%"  stop-color="var(--color-gray7")
        stop(offset="95%" stop-color="var(--color-gray5")

az-icon(name="palm" scale="1.3" color="url(#gradient-1)")
az-icon(name="coffe" scale="1.6" color="url(#gradient-1) url(#gradient-1) url(#gradient-2)")
```

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| name        | Nombre del icono                           | `String`  | --        |
| size        | Determinar el tamaño del spinner. Acepta valores en:<br>`px` `rem` `em`             | `String` | `1rem`    |
| dir         | Determinar la dirección del icono, Acepta:<br>`top` `right` `bottom` `left`       | `String` | `top`   |
| color       | Determina el color del icono, permite indicar diferentes colores para cada elemento del icono o utilizar degradados  | `String` | `currentColor`   |
