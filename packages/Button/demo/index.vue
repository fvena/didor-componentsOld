<template lang="pug">
  demo-section.demo-button
    demo-block(:title="$t('type')")
      az-button(type="primary") {{ $t('primary') }}
      az-button(type="danger") {{ $t('danger') }}
</template>

<script>
export default {
  i18n: {
    es: {
      type: 'Tipo',
      primary: 'Primary',
      danger: 'Danger',
    },
    en: {
      type: 'Type',
      primary: 'Primary',
      danger: 'Danger',
    },
  },
};
</script>

<style lang="scss">
.demo-button {
  text-align: center;
}
</style>
