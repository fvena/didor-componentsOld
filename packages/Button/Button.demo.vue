<template lang="pug">
  div.touch
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
      az-button.no-margin.margin-halve-bottom(type="brand" block) Block Brand
      az-button.no-margin(type="danger" block) Block Danger

    Demo(title="Tamaño")
      az-button(type="brand" size="large") Large
      az-button(type="brand") Default
      az-button(type="brand" size="small") Small

    Demo(title="Loading")
      az-button.margin-bottom(type="default" @click="toggleDemo") Toggle Loading
      div
        az-button(type="danger" :loading="loading" loadingType="square" size="large") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="square") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="square" size="small") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="bars" size="large") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="bars") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="bars" size="small") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="circle" size="large") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="circle") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="circle" size="small") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="blobs" size="large") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="blobs") Guardar
      div
        az-button(type="danger" :loading="loading" loadingType="blobs" size="small") Guardar
      div
        az-button(type="danger" :loading="loading" size="large") Guardar
      div
        az-button(type="danger" :loading="loading") Guardar
      div
        az-button(type="danger" :loading="loading" size="small") Guardar
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
  margin: quarter($space);
}
</style>
