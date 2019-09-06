<template lang="pug">
  .cellDemo
    Demo(title="Uso Básico")
      az-cell-group
        az-cell(title="Cell title" value="Content")
        az-cell(title="Cell title" value="Content" label="Description")

    Demo(title="Iconos")
      az-cell-group
        az-cell(title="Cell title" value="Content" left-icon="palm")
        az-cell(title="Cell title" value="Content" right-icon="palm")

    Demo(title="Solo contenido")
      az-cell-group
        az-cell(value="Content")

    Demo(title="Link")
      az-cell-group
        az-cell(title="Cell title" is-link)
        az-cell(title="Cell title" value="Content" is-link )
        az-cell(title="Cell title" value="Content" arrow-direction="down" is-link)

    Demo(title="Router")
      az-cell-group
        az-cell(title="Cell title" url="https://vuejs.org/" is-link)
        az-cell(title="Cell title" url="/packages" is-link )

    Demo(title="Uso de slots")
      az-cell-group
        az-cell(value="Content" is-link)
          template(v-slot:title)
            h4 Title slot
</template>

<script>
export default {};
</script>

<style lang="scss">
.cellDemo {
  min-height: 100vh;
  background-color: color(gray7);

  .demo__content {
    padding: 0;
  }
}
</style>
