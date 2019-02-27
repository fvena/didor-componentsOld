<template lang="pug">
  div
    Demo(title="Name")
      az-icon(name="palm" size="2rem")
      az-icon(name="lap" size="2rem")
      az-icon(name="small" size="2rem")
      az-icon(name="desktop" size="2rem")
      az-icon(name="large" size="2rem")
      az-icon(name="clipboard" size="2rem")


    Demo(title="Size")
      az-icon(name="palm" size="1rem")
      az-icon(name="palm" size="2rem")
      az-icon(name="palm" size="3rem")
      az-icon(name="palm" size="4rem")

    Demo(title="Dir")
      az-icon(name="palm" dir="up")
      az-icon(name="palm" dir="right")
      az-icon(name="palm" dir="down")
      az-icon(name="palm" dir="left")

    Demo(title="Stroke")
      az-icon(name="palm" stroke)

    Demo(title="Color")
      div(style="color: blue")
        az-icon(name="palm")
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
