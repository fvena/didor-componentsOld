<template lang="pug">
  div
    Demo(title="Name")
      az-icon(name="build1")
      az-icon(name="build2")
      az-icon(name="build4")
      az-icon(name="build5")

    Demo(title="Size")
      az-icon(name="build2" size="1rem")
      az-icon(name="build2" size="2rem")
      az-icon(name="build2" size="3rem")
      az-icon(name="build2" size="4rem")

    Demo(title="Dir")
      az-icon(name="build2" dir="up")
      az-icon(name="build2" dir="right")
      az-icon(name="build2" dir="down")
      az-icon(name="build2" dir="left")

    Demo(title="Stroke")
      az-icon(name="build2" stroke)

    Demo(title="Color")
      div(style="color: blue")
        az-icon(name="build2" stroke)
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
