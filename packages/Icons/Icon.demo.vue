<template lang="pug">
  div
    Demo(title="Name")
      az-icon(name="palm" scale="1.3")
      az-icon(name="lap" scale="1.3")
      az-icon(name="small" scale="1.3")
      az-icon(name="desktop" scale="1.3")
      az-icon(name="large" scale="1.3")
      az-icon(name="clipboard" scale="1.3")


    Demo(title="scale")
      az-icon(name="palm" scale="1")
      az-icon(name="palm" scale="1.2")
      az-icon(name="palm" scale="1.4")
      az-icon(name="palm" scale="1.6")

    Demo(title="Dir")
      az-icon(name="palm" scale="1.3" dir="up" )
      az-icon(name="palm" scale="1.3" dir="right")
      az-icon(name="palm" scale="1.3" dir="down")
      az-icon(name="palm" scale="1.3" dir="left")

    Demo(title="Color")
      az-icon.icon-brand(name="palm" scale="1.3")
      az-icon(name="palm" scale="1.3" color="var(--color-success)")
      az-icon(name="palm" scale="1.3" color="var(--color-warning)")
      az-icon(name="palm" scale="1.3" color="var(--color-danger)")

    Demo(title="Multiple Colors")
      az-icon(name="coffe" scale="1.6" color="#c13127 #ef5b49 #cacaea #cacaea #cacaea")
      az-icon.coffe-brand(name="coffe" scale="1.6")

    Demo(title="Color Gradient")
      svg(style="position: absolute; height: 0; width: 0;")
        defs
          linearGradient#gradient-1(x1="0" y1="0" x2="0" y2="1")
            stop(offset="5%"  stop-color="var(--color-brand-light)")
            stop(offset="95%" stop-color="var(--color-brand-dark)")

          linearGradient#gradient-2(x1="0" y1="0" x2="0" y2="1")
              stop(offset="5%"  stop-color="var(--color-gray7")
              stop(offset="95%" stop-color="var(--color-gray5")

      az-icon(name="palm" scale="1.3" color="url(#gradient-1)")
      az-icon(name="coffe" scale="1.6" color="url(#gradient-1) url(#gradient-1) url(#gradient-2)")
</template>

<script>
export default {};
</script>

<style lang="scss">
.az-icon {
  margin: quarter();
}

.icon-brand {
  fill: color(brand);
}

.coffe-brand {
  path[pid='0'] {
    fill: color(brand-dark);
  }

  rect[pid='1'] {
    fill: color(brand);
  }

  path[pid='2'] {
    fill: color(gray5);
  }
}
</style>
