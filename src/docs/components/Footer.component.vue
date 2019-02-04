<template lang="pug">
  .footer
    .pagination-item.pagination-item--previous
      a(href="#/README")
        .pagination-item-label
          svg.icon(width="10" height="16" viewBox="0 0 10 16")
            polyline(fill="none" vector-effect="non-scaling-stroke" points="8,2 2,8 8,14")
          span Anterior
        .pagination-item-title Introducción

    .pagination-item.pagination-item--next
      a(href="#/templateIcon")
        .pagination-item-label
          span Siguiente
          svg(width="10" height="16" viewBox="0 0 10 16")
            polyline(fill="none" vector-effect="non-scaling-stroke" points="2,2 8,8 2,14")
        .pagination-item-title Iconos
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: triple($space);
  overflow: hidden;
  border-top: 1px solid var(--color-border);
}

.pagination-item {
  margin-top: $space;

  &:not(:last-child) a .pagination-item-label,
  &:not(:last-child) a .pagination-item-title {
    opacity: 0.3;
    transition: all 0.2s;
  }

  &:hover a .pagination-item-label {
    opacity: 1;
  }

  &:hover a .pagination-item-title {
    text-decoration: underline;
    opacity: 1;
  }
}

.pagination-item--previous {
  svg {
    margin-right: 0.5em;
  }
}

.pagination-item--next {
  text-align: right;

  svg {
    margin-left: 0.5em;
  }
}

.pagination-item-label {
  @include fontsize(eta);

  margin-bottom: quarter(-$space);
  color: var(--color-gray4);
  opacity: 1;

  > * {
    line-height: 1;
    vertical-align: middle;
  }

  svg {
    width: auto;
    height: 0.8em;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1px;
  }
}

.pagination-item-title {
  @include fontsize(gamma);

  color: var(--color-gray2);
  opacity: 1;
}
</style>
