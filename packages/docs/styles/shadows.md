# Sombras

Un truco para dar profundidad a nuestros diseños consiste en apilar capas una encima de la otra como hojas de papel reales. Para lograr este efecto en CSS, utilizamos la propiedad box-shadow.

## Sombras predefinidas

Para evitar tener que escribir manualmente las sombras cada vez que las necesitemos y mantener una coherencia, hemos creado un Mixin de Sass con 6 valores de profundidad predefinidos (de 0 a 5).

::: demo
<div class="page--shadows">
    <div class="page-block shadow-1">nivel 1</div>
    <div class="page-block shadow-2">nivel 2</div>
    <div class="page-block shadow-3">nivel 3</div>
    <div class="page-block shadow-4">nivel 4</div>
    <div class="page-block shadow-5">nivel 5</div>
    <div class="page-block shadow-2 no-shadow">sin sombra</div>
</div>
:::

```html
  <div class="shadow-1">nivel 1</div>
  <div class="shadow-2">nivel 2</div>
  <div class="shadow-3">nivel 3</div>
  <div class="shadow-4">nivel 4</div>
  <div class="shadow-5">nivel 5</div>
  <div class="shadow-2 no-shadow">sin sombra</div>
```

## Función

```scss
.elemento {
  @include shadow(0);
}
```
