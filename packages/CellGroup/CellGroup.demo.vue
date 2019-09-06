<template lang="pug">
  .cellGroupDemo
    Demo(title="Uso Básico")
      az-cell-group(title="Datos de usuario")
        az-cell(title="Cell title" value="Content")
        az-cell(title="Cell title" value="Content" label="Description")

    Demo.no-margin-bottom(title="Slots")
      az-cell-group.no-margin-bottom
        template(v-slot:title)
          h4 Slot título
        az-cell(title="Cell title" value="Content")
        az-cell(title="Cell title" value="Content" label="Description")
</template>

<script>
export default {};
</script>

<style lang="scss">
.cellGroupDemo {
  min-height: 100vh;
  background-color: color(gray7);

  .demo__content {
    padding: 0;
  }
}
</style>
