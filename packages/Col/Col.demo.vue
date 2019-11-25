<template lang="pug">
  div
    Demo(title="Columnas")
      .content
        az-row(hgutter="small" grid)
          az-col(cols="1")
            .block 1
          az-col(cols="11")
            .block 11
      .content
        az-row(hgutter="small" grid)
          az-col(cols="2")
            .block 2
          az-col(cols="10")
            .block 10
      .content
        az-row(hgutter="small" grid)
          az-col(cols="3")
            .block 3
          az-col(cols="9")
            .block 9
      .content
        az-row(hgutter="small" grid)
          az-col(cols="4")
            .block 4
          az-col(cols="8")
            .block 8
      .content
        az-row(hgutter="small" grid)
          az-col(cols="5")
            .block 5
          az-col(cols="7")
            .block 7
      .content
        az-row(hgutter="small" grid)
          az-col(cols="6")
            .block 6
          az-col(cols="6")
            .block 6
      .content
        az-row(hgutter="small" grid)
          az-col(cols="7")
            .block 7
          az-col(cols="5")
            .block 5
      .content
        az-row(hgutter="small" grid)
          az-col(cols="8")
            .block 8
          az-col(cols="4")
            .block 4
      .content
        az-row(hgutter="small" grid)
          az-col(cols="9")
            .block 9
          az-col(cols="3")
            .block 3
      .content
        az-row(hgutter="small" grid)
          az-col(cols="10")
            .block 10
          az-col(cols="2")
            .block 2
      .content
        az-row(hgutter="small" grid)
          az-col(cols="11")
            .block 11
          az-col(cols="1")
            .block 1
      .content
        az-row(hgutter="small" grid)
          az-col(cols="12")
            .block 12

    Demo(title="Offset")
      .content
        az-row(hgutter="small" grid)
          az-col(cols="11" offset="1")
            .block 11

      .content
        az-row(hgutter="small" grid)
          az-col(cols="10" offset="2")
            .block 10

      .content
        az-row(hgutter="small" grid)
          az-col(cols="9" offset="3")
            .block 9

      .content
        az-row(hgutter="small" grid)
          az-col(cols="8" offset="4")
            .block 8

      .content
        az-row(hgutter="small" grid)
          az-col(cols="7" offset="5")
            .block 7

      .content
        az-row(hgutter="small" grid)
          az-col(cols="6" offset="6")
            .block 6

      .content
        az-row(hgutter="small" grid)
          az-col(cols="5" offset="7")
            .block 5

      .content
        az-row(hgutter="small" grid)
          az-col(cols="4" offset="8")
            .block 4

      .content
        az-row(hgutter="small" grid)
          az-col(cols="3" offset="9")
            .block 3

      .content
        az-row(hgutter="small" grid)
          az-col(cols="2" offset="10")
            .block 2

      .content
        az-row(hgutter="small" grid)
          az-col(cols="1" offset="11")
            .block 1

    Demo(title="Nesting")
      .content
        az-row(hgutter="small" vgutter="small" grid)
          az-col(cols="6")
            .block
              az-row(hgutter="small" vgutter="small" grid)
                az-col(cols="12")
                  .block 12
                az-col(cols="6")
                  .block 6
                az-col(cols="6")
                  .block 6
          az-col(cols="6")
            .block 4

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
          az-col(cols="4" :palm={cols:'12'})
            .block 4
          az-col(cols="4" :palm={cols:'6'})
            .block 4
          az-col(cols="4" :palm={cols:'6'})
            .block 4

      .content
        az-row(hgutter="small" vgutter="small" grid)
          az-col(cols="4" :palm={cols:'12'})
            .block 4
          az-col(cols="4" :palm={cols:'5'})
            .block 4
          az-col(cols="4" :palm={cols:'5', offset:'2'})
            .block 4
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: half();
  overflow: hidden;
  background-color: color(gray6);
  border-radius: 3px;
}

.block {
  font-size: font-size(small2);
  font-weight: font-weight(bold);
  color: white;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: color(brand);
  border-radius: 3px;

  .block {
    background-color: color(brand-dark);
  }
}
</style>
