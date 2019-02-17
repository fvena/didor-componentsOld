<template lang="pug">
  div
    Demo(title="Tipo")
      .demo__subtitle Star
      az-loading

      .demo__subtitle Circles
      az-loading(type="circle")

      .demo__subtitle Bars
      az-loading(type="bars")

      .demo__subtitle Blobs
      az-loading(type="blobs")

      .demo__subtitle Square
      az-loading(type="square")

    Demo(title="Color")
      az-loading(color="var(--color-danger)")
      az-loading(color="var(--color-success)")

    Demo(title="Size")
      az-loading(style="font-size: 10px")
      az-loading(style="font-size: 20px")
      az-loading(style="font-size: 30px")
      az-loading(style="font-size: 40px")
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.az-loading {
  margin: halve($space);
}
</style>
