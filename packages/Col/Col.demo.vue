<template lang="pug">
  div
    Demo(title="Columnas")
      .content
        az-row(hgutter="small" grid)
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
          az-col(cols="1")
            .block 1
      .content
        az-row(hgutter="small" grid)
          az-col(cols="3")
            .block 3
          az-col(cols="6")
            .block 6
          az-col(cols="3")
            .block 3

      .content
        az-row(hgutter="small" grid)
          az-col(cols="4")
            .block 4
          az-col(cols="8")
            .block 8

    Demo(title="Offset")
      .content
        az-row(hgutter="small" grid)
          az-col(cols="4")
            .block 4
          az-col(cols="3" offset="5")
            .block 3

      .content
        az-row(hgutter="small" grid)
          az-col(cols="3")
            .block 3
          az-col(cols="4" offset="1")
            .block 4
          az-col(cols="3" offset="1")
            .block 3

    Demo(title="Auto / Expand")
      .content
        az-row(hgutter="small" grid)
          az-col(auto style="width: 100px")
            .block Auto
          az-col(expand)
            .block Expand

    Demo(title="Responsive")
      .content
        az-row(hgutter="small" vgutter="small" grid)
          az-col(cols="4" palm="12")
            .block 4
          az-col(cols="4" palm="6")
            .block 4
          az-col(cols="4" palm="6")
            .block 4

      .content
        az-row(hgutter="small" vgutter="small" grid)
          az-col(cols="4" palm="12")
            .block 4
          az-col(cols="4" palm="5")
            .block 4
          az-col(cols="4" palm="5" offset-palm="2")
            .block 4
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: halve($space);
  overflow: hidden;
  background-color: var(--color-gray6);
  border-radius: 3px;
}

.block {
  @include fontsize(theta);

  font-weight: $content-font-bold;
  color: white;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: var(--color-brand);
  border-radius: 3px;
}
</style>
