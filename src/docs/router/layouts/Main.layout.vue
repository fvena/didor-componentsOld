<template lang="pug">
.main
  | Didor Components

  router-link(:to="{name: 'docs', params: { section: 'packages' }}") Docs
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
