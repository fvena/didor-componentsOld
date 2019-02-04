<template lang="pug">
  nav.sidebar-nav
    ul
      li
        p
          a(href="#/home") Intro
      li
        p Api
        ul
          li
            a(href="#/auth") Auth
          li
            a(href="#/auth") Todo
          li
            a(href="#/auth") User
      li
        p Plantilla
        ul
          li
            a(href="#/auth") Introducción
          li
            a(href="#/auth") Colores
          li
            a(href="#/auth") Iconos
          li
            a(href="#/auth") Demo
          li
            a(href="#/auth") Tabs Code
          li
            a(href="#/auth") Api
      li
        p Diseño
        ul
          li
            a(href="#/auth") Colores
          li
            a(href="#/auth") Iconos
          li
            a(href="#/auth") Responsive
      li
        p Componentes
        ul
          li
            a(href="#/auth") Component1
          li
            a(href="#/auth") Component2
          li
            a(href="#/auth") Component3
          li
            a(href="#/auth") Component4
      li
        p Utilidades
        ul
          li
            a(href="#/auth") Visibilidad
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  li {
    margin: 0;
    list-style: none;
  }

  li > p,
  li > p > a {
    @include fontsize(eta);

    display: block;
    margin-bottom: 0;
    font-weight: $content-font-bold;
    color: var(--color-gray2);
    text-transform: uppercase;
  }

  li > p > a:hover {
    color: var(--color-brand);
  }

  li > a {
    @include fontsize(eta);

    display: block;
    color: var(--color-gray3);

    &:hover {
      color: var(--color-brand);
    }
  }

  li > p > a,
  li > ul {
    margin-bottom: halve($space);
  }

  li > ul {
    padding-top: quarter($space);
    border-top: 1px solid var(--color-border);
  }
}
</style>
