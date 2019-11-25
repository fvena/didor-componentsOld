<template lang="pug">
  div
    Demo(title="Alineación Horizontal")
      .demo__subtitle left
      .content.align
        az-row(align="left")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle center
      .content.align
        az-row(align="center")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle right
      .content.align
        az-row(align="right")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle between
      .content.align
        az-row(align="between")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle around
      .content.align
        az-row(align="around")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle evenly
      .content.align
        az-row(align="evenly")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

    Demo(title="Alineación Vertical")
      .demo__subtitle top
      .content.valign
        az-row(valign="top")
          .block line 1
          .block line 1 <br> line 2 <br> line 3
          .block line 1 <br> line 2

      .demo__subtitle middle
      .content.valign
        az-row(valign="middle")
          .block line 1
          .block line 1 <br> line 2 <br> line 3
          .block line 1 <br> line 2

      .demo__subtitle bottom
      .content.valign
        az-row(valign="bottom")
          .block line 1
          .block line 1 <br> line 2 <br> line 3
          .block line 1 <br> line 2

      .demo__subtitle baseline
      .content.valign.baseline
        az-row(valign="baseline")
          .block(style="padding-top: 10px") base
          .block(style="padding-top: 20px") base
          .block(style="padding-bottom: 20px") base

      .demo__subtitle stretch
      .content.valign
        az-row(valign="stretch")
          .block line 1
          .block line 1 <br> line 2 <br> line 3
          .block line 1 <br> line 2

    Demo(title="Dirección")
      .demo__subtitle row
      .content
        az-row(dir="row")
          .block 1
          .block 2
          .block 3

      .demo__subtitle row-reverse
      .content
        az-row(dir="row-reverse")
          .block 1
          .block 2
          .block 3

      .demo__subtitle column
      .content
        az-row(dir="column")
          .block 1
          .block 2
          .block 3

      .demo__subtitle column-resverse
      .content
        az-row(dir="column-resverse")
          .block 1
          .block 2
          .block 3

    Demo(title="Justificación Horizontal")
      .demo__subtitle nowrap
      .content.wrap
        az-row(hwrap="nowrap")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

      .demo__subtitle wrap
      .content.wrap
        az-row(hwrap="wrap")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

      .demo__subtitle wrap-reverse
      .content.wrap
        az-row(hwrap="wrap-reverse")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

    Demo(title="Justificación vertical")
      .demo__subtitle top
      .content.vwrap
        az-row(hwrap="wrap" vwrap="top")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

      .demo__subtitle middle
      .content.vwrap
        az-row(hwrap="wrap" vwrap="middle")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

      .demo__subtitle bottom
      .content.vwrap
        az-row(hwrap="wrap" vwrap="bottom")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

      .demo__subtitle between
      .content.vwrap
        az-row(hwrap="wrap" vwrap="between")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

      .demo__subtitle around
      .content.vwrap
        az-row(hwrap="wrap" vwrap="around")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

      .demo__subtitle stretch
      .content.vwrap
        az-row(hwrap="wrap" vwrap="stretch")
          .block 1
          .block 2
          .block 3
          .block 4
          .block 5
          .block 6

    Demo(title="Separación Horizontal")
      .demo__subtitle none
      .content
        az-row(hgutter="none")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle small
      .content
        az-row(hgutter="small")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle default
      .content
        az-row
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle large
      .content
        az-row(hgutter="large")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

    Demo(title="Separación Verical")
      .demo__subtitle none
      .content
        az-row(vgutter="none" dir="column")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle small
      .content
        az-row(vgutter="small" dir="column")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle default
      .content
        az-row(dir="column")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

      .demo__subtitle large
      .content
        az-row(vgutter="large" dir="column")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;

    Demo(title="Responsive")
      .content
        az-row(
          dir="column"
          :palm="{dir: 'row', hgutter: 'small'}"
          :desk="{dir: 'column', hgutter: 'large'}")
          .block &nbsp;
          .block &nbsp;
          .block &nbsp;
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

  .block:nth-child(3n + 1) {
    width: 60px;
  }
  .block:nth-child(3n + 2) {
    width: 80px;
  }
  .block:nth-child(3n + 3) {
    width: 40px;
  }

  &.default .block {
    width: 100% !important;
  }
}

.block {
  width: 100%;
  font-size: font-size(small2);
  font-weight: font-weight(bold);
  color: white;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: color(brand);
  border-radius: 3px;
}

.valign {
  position: relative;

  .row {
    height: 150px;
  }

  &.baseline::before {
    position: absolute;
    top: 2.2rem;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.vwrap {
  .row {
    height: 250px;
  }

  .block {
    height: initial;
  }
}
</style>
