<template lang="pug">
  div
    Demo(title="Tipo")
      az-button Default
      az-button(type="brand") Brand
      az-button(type="success") Success
      az-button(type="warning") Warning
      az-button(type="danger") Danger

    Demo(title="Plano")
      az-button(plain) Default
      az-button(type="brand" plain) Brand
      az-button(type="success" plain) Success
      az-button(type="warning" plain) Warning
      az-button(type="danger" plain) Danger

    Demo(title="Ghost")
      az-button(ghost) Default
      az-button(type="brand" ghost) Brand
      az-button(type="success" ghost) Success
      az-button(type="warning" ghost) Warning
      az-button(type="danger" ghost) Danger

    Demo(title="Forma")
      az-button(type="brand") Default
      az-button(type="brand" circle) Circle
      az-button(type="brand" square) Square

    Demo(title="Disabled")
      az-button(type="brand" disabled) Disabled
      az-button(type="success" disabled) Disabled

    Demo(title="Block")
      az-button.no-margin.margin-bottom-half(type="brand" block) Block Brand
      az-button.no-margin(type="danger" block) Block Danger

    Demo(title="Tamaño")
      az-button(type="brand" size="small") Small
      az-button(type="brand") Default
      az-button(type="brand" size="large") Large

    Demo(title="Icono")
      .demo__subtitle Icon and text
      az-button(type="brand" iconName="palm") Icon 1
      az-button(type="brand" iconName="lap") Icon 2
      az-button(type="brand" iconName="desktop") Icon 3

      .demo__subtitle.margin-top Only Icon
      az-button(type="brand" iconName="palm" size="small")
      az-button(type="brand" iconName="palm")
      az-button(type="brand" iconName="palm" size="large")

      .demo__subtitle.margin-top Icon Position
      .padding-x-half.padding-top
        az-row(grid)
          az-button(type="brand" iconName="palm") Default
          az-button(type="brand" iconName="palm" iconPosition="right") Right
        az-row(grid)
          az-button(type="brand" iconName="palm" iconPosition="top") Top
          az-button(type="brand" iconName="palm" iconPosition="bottom") Bottom

    Demo(title="Loading")
      az-button.margin-bottom(type="default" @click="toggleDemo") Toggle Loading

      .demo__subtitle Icon and text
      div
        az-button(type="brand" :loading="loading" loadingType="square") Guardar
      div
        az-button(type="brand" :loading="loading" loadingType="bars") Guardar
      div
        az-button(type="brand" :loading="loading" loadingType="circle") Guardar
      div
        az-button(type="brand" :loading="loading" loadingType="blobs") Guardar
      div
        az-button(type="brand" :loading="loading") Guardar

      .demo__subtitle Only Icon
      div
        az-button(type="brand" :loading="loading" loadingIconOnly) Guardar
      div
        az-button(type="brand" :loading="loading" loadingIconOnly loadingType="square") Guardar

      .demo__subtitle Change text
      div
        az-button(:loading="loading" loadingText="Buscando") Buscar
      div
        az-button(:loading="loading" loadingText="Configurando") Guardar

</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    toggleDemo() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style lang="scss" scoped>
.az-button {
  margin: quarter();
}
</style>
