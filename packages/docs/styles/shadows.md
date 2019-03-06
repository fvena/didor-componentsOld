# Sombras

Un truco para dar profundidad a nuestros diseños consiste en apilar capas una encima de la otra como hojas de papel reales. Para lograr este efecto en CSS, utilizamos la propiedad box-shadow.

## Sombras predefinidas

Para evitar tener que escribir manualmente las sombras cada vez que las necesitemos y mantener una coherencia, hemos creado un Mixin de Sass con 6 valores de profundidad predefinidos (de 0 a 5).

::: demo
<div class="page-shadows">
  <ul>
    <li class="shadow0">0</li>
    <li class="shadow1">1</li>
    <li class="shadow2">2</li>
    <li class="shadow3">3</li>
    <li class="shadow4">4</li>
    <li class="shadow5">5</li>
  </ul>
</div>
:::

```pug
ul
  li.shadow0 0
  li.shadow1 1
  li.shadow2 2
  li.shadow3 3
  li.shadow4 4
  li.shadow5 5
```

```scss
li.shadow0 { @include shadow(0); }
li.shadow1 { @include shadow(1); }
li.shadow2 { @include shadow(2); }
li.shadow3 { @include shadow(3); }
li.shadow4 { @include shadow(4); }
li.shadow5 { @include shadow(5); }
```
