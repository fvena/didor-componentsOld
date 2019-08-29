# Tipografía

La tipografía es uno de los elementos más importantes en el diseño, Didor cuenta con muchas clases para tener un mayor control.

## Configuración

Cuando definas las variables Sass, cambia las siguientes variables con tus valores personalizados:

``` scss
$font-family-base: 'Source Sans Pro';    //Familia tipográfica base para los contenidos.
$font-family-heading: 'Source Sans Pro'; //Familia tipográfica para las cabeceras.
$font-family-monospace: 'Fira Code';     //Familia tipográfica para los textos monoespaciados
$line-height: 1.6;   //Altura de línea
$modular-scale: 1.2; //Escala modular
$letter-spacing: 0;  //Tracking, espacio entre caracteres
```

También puedes definir los tamaños base de la fuente para cada tamaño de pantalla:

``` scss
$root-font-size-palm: 15px;  // Tamaño base para dispositivos móviles
$root-font-size-lap: 16px;   // Tamaño base para tabletas en vertical
$root-font-size-small: 16px; // Tamaño base para tabletas en horizontal
$root-font-size-desk: 17px;  // Tamaño base para monitores
$root-font-size-large: 17px; // Tamaño base para monitores grandes
```

Así como los pesos tipográficos

``` scss
$font-weight-extralight: 200; // Muy fina
$font-weight-ligh: 300;       // Fina
$font-weight-normal: normal;  // Normal
$font-weight-semibold: 600;   // Semi negrita
$font-weight-bold: bold;      // Negrita
$font-weight-black: 900;      // Gruesa

$font-weight-heading: $font-weight-bold; // Peso tipográfico para las cabeceras
```

## Tamaños de Fuente

Didor utiliza una escala tipográfica para configurar los diferentes tamaños de fuente, de esta forma se simplifica la elección de tamaños, y estos mantienen una proporcionalidad. También permite elegir el tamaño de fuente según el tamaño de pantalla.

Para definir los diferentes tamaños se ha establecido la siguiente escala:

* `alpha` - nivel 6
* `beta` - nivel 5
* `gamma` - nivel 4
* `delta` - nivel 3
* `epsilon` - nivel 2
* `zeta` - nivel base
* `eta` - nivel -2
* `theta` - nivel -3
* `iota` - nivel -4

Notación: `.font-size-{breakpoint}-{size-name}`

::: demo
<div class="font-size-alpha line-height-alpha">Tamaño alpha (nivel 6)</div>
<div class="font-size-beta line-height-beta">Tamaño beta (nivel 5)</div>
<div class="font-size-gamma line-height-gamma">Tamaño gamma (nivel 4)</div>
<div class="font-size-delta line-height-delta">Tamaño delta (nivel 3)</div>
<div class="font-size-epsilon line-height-epsilon">Tamaño epsilon (nivel 2)</div>
<div class="font-size-zeta line-height-zeta">Tamaño zeta (nivel base)</div>
<div class="font-size-eta line-height-eta">Tamaño eta (nivel -2)</div>
<div class="font-size-theta line-height-theta">Tamaño theta (nivel -3)</div>
<div class="font-size-iota line-height-iota">Tamaño iota (nivel -4)</div>
:::

``` html
<div class="font-size-alpha">Tamaño alpha (nivel 6)</div>
<div class="font-size-beta">Tamaño beta (nivel 5)</div>
<div class="font-size-gamma">Tamaño gamma (nivel 4)</div>
<div class="font-size-delta">Tamaño delta (nivel 3)</div>
<div class="font-size-epsilon">Tamaño epsilon (nivel 2)</div>
<div class="font-size-zeta">Tamaño zeta (nivel base)</div>
<div class="font-size-eta">Tamaño eta (nivel -2)</div>
<div class="font-size-theta">Tamaño theta (nivel -3)</div>
<div class="font-size-iota">Tamaño iota (nivel -4)</div>

<div class="font-size-palm-beta">Tamañao nivel 5 solo en dispostivos móviles</div>
```

## Apariencia

::: demo
<div class="font-weight-extralight">Texto extralight</div>
<div class="font-weight-light">Texto light</div>
<div class="font-weight-normal">Texto normal</div>
<div class="font-weight-semibold">Texto semibold</div>
<div class="font-weight-bold">Texto bold</div>
<div class="font-weight-black">Texto black</div>
<br>
<div class="font-italic">Texto en itálica</div>
<div class="text-muted">Texto desactivado</div>
<div class="text-hide">Texto oculto</div>
<div class="text-underline">Texto subrayado</div>
<div class="text-decoration-none">Texto sin subrayado</div>
<br>
<div class="link">Texto como un link</div>
<br>
Texto abreviado <abbr title="HyperText Markup Language">HTML</abbr>

:::

``` html
<div class="font-weight-extralight">Texto extralight</div>
<div class="font-weight-light">Texto light</div>
<div class="font-weight-normal">Texto normal</div>
<div class="font-weight-semibold">Texto semibold</div>
<div class="font-weight-bold">Texto bold</div>
<div class="font-weight-black">Texto black</div>

<div class="font-italic">Texto en itálica</div>
<div class="text-muted">Texto desactivado</div>
<div class="text-hide">Texto oculto</div>
<div class="text-underline">Texto subrayado</div>
<div class="text-decoration-none">Texto sin subrayado</div>

<div class="link">Texto como un link</div>

<abbr title="HyperText Markup Language">HTML</abbr>
```

## Alineación

Didor también permite alinear los elementos según el tamaño de pantalla:

Notación: `.text-{breakpoint}-{position}`

::: demo
<div class="text-left">Texto alineado a la izquierda</div>
<div class="text-right">Texto alineado a la derecha</div>
<div class="text-center">Texto centrado</div>
<br>
<div class="text-justify"><strong>Texto justificado</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</div>
<br>
<div class="text-palm-right">Texto alineado a la izquierda solo en móviles</div>
<div class="text-desk-center">Texto centrado solo en escritorio</div>
:::

``` html
<div class="text-left">Texto alineado a la izquierda</div>
<div class="text-right">Texto alineado a la derecha</div>
<div class="text-center">Texto centrado</div>
<div class="text-justify">Texto justificado</div>

<div class="text-palm-right">Texto alineado a la izquierda solo en móviles</div>
<div class="text-desk-center">Texto centrado solo en escritorio</div>
```

## Texto desbordante

::: demo
<div class="page--wrap">
  <div class="page-block text-nowrap">El texto se mostrará en una sola línea</div>
  <div class="page-block"><p class="text-truncate no-margin">El texto se mostrará en una sola línea con una elipsis si no entra</p></div>
</div>
:::

``` html
<div class="text-nowrap">El texto se mostrará en una sola línea</div>

<div class="width-25">
  <p class="text-truncate">El texto se mostrará en una sola línea con una elipsis si no entra</p>
</div>
```

::: tip
  Para que funcione `.text-truncate` debe estar contenido en un elemento con una anchura definida, no funcionaría si el propio elemento al que aplicamos la clase tiene una anchura definida.
:::

## Transformación

::: demo
<div class="text-lowercase">Texto en minúscula</div>
<div class="text-uppercase">Texto en mayúscula</div>
<div class="text-capitalize">Texto en capital</div>
:::

``` html
<div class="text-lowercase">Texto en minúscula</div>
<div class="text-uppercase">Texto en mayúscula</div>
<div class="text-capitalize">Texto en capital</div>
```

## Apariencia básica

::: demo
<p>Puedes utilizar la etiqueta mark para <mark>resaltar</mark> texto.</p>
<p><del>Esta línea de texto debe tratarse como texto eliminado.</del></p>
<p><s>Esta línea de texto debe considerarse como incorrecta.</s></p>
<p><ins>Esta línea de texto debe considerarse como nuevo texto insertado.</ins></p>
<p><u>Esta línea de texto se mostrará subrayada.</u></p>
<p><small>Esta línea de texto se mostrará más pequeña.</small></p>
<p><strong>Esta línea de texto se mostrará en negrita.</strong></p>
<p><em>Esta línea de texto se mostrará en cursiva.</em></p>
<br>
<a href="http://www.didor.io">Esto es un enlace</a>
:::

```html
<p>Puedes utilizar la etiqueta mark para <mark>resaltar</mark> texto.</p>
<p><del>Esta línea de texto debe tratarse como texto eliminado.</del></p>
<p><s>Esta línea de texto debe considerarse como incorrecta.</s></p>
<p><ins>Esta línea de texto debe considerarse como nuevo texto insertado.</ins></p>
<p><u>Esta línea de texto se mostrará subrayada.</u></p>
<p><small>Esta línea de texto se mostrará más pequeña.</small></p>
<p><strong>Esta línea de texto se mostrará en negrita.</strong></p>
<p><em>Esta línea de texto se mostrará en cursiva.</em></p>

<a href="http://www.didor.io">Esto es un enlace</a>
```


## Entradilla

Puedes definir un párrafo como entradilla despues de un título con la clase `.caption`.

::: demo
<h1>Título nivel 1</h1>
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<p class="margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<h2>Título nivel 2</h2>
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<p class="margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<h3>Título nivel 3</h3>
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<p class="margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>
:::

``` html
<h1>Título nivel 1</h1>
<p class="caption">Lorem ipsum dolor sit amet....</p>
<p>Lorem ipsum dolor sit amet....</p>

<h2>Título nivel 2</h2>
<p class="caption">Lorem ipsum dolor sit amet....</p>
<p>Lorem ipsum dolor sit amet....</p>

<h3>Título nivel 3</h3>
<p class="caption">Lorem ipsum dolor sit amet....</p>
<p>Lorem ipsum dolor sit amet....</p>
```

La clase `.caption` también sirve para destacar un párrafo.

::: demo
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>
:::

``` html
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>
```

## Funciones

``` scss
.elemento {
  font-family: font-family(heading);
  font-size: font-size(beta);
  font-weight: font-weight(bold);
  line-height: line-height(beta);
}
```
