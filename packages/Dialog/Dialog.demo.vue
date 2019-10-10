<template lang="pug">
  .popupDemo
    Demo(title="Uso Básico")
      az-row
        az-button(@click="showDialog") Show Dialog
</template>

<script>
export default {
  methods: {
    showDialog() {
      this.$dialog.alert({
        message: 'Content',
      });
    },
  },
};
</script>
