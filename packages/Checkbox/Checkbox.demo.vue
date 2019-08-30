<template lang="pug">
  .inputDemo
    Demo(title="Uso Básico")
      az-checkbox(v-model="checked") Checkbox

      p {{ checked }}

    Demo(title="Desactivado")
      az-checkbox(v-model="disable1" disabled) Checkbox
      az-checkbox(v-model="disable2" disabled) Checkbox

    Demo(title="Grupos")
      az-checkbox-group
        az-checkbox(
          v-for="(item, index) in sports"
          v-model="groupResult"
          :key="index"
          :value="item")
          | {{ item }}

      p {{ groupResult }}

    Demo(title="Máximo de checkbox seleccionados")
      az-checkbox-group(max-options="2")
        az-checkbox(
          v-for="(item, index) in sports"
          v-model="groupMax"
          :key="index"
          :value="item")
          | {{ item }}

      p {{ groupMax }}

    Demo.demo--cell.no-margin-bottom(title="Vista modo celda")
      az-checkbox-group(cell)
        az-checkbox(
          v-for="(item, index) in sports"
          v-model="groupCell"
          :key="index"
          :value="item")
          | {{ item }}

      p {{ groupCell }}
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      disable1: false,
      disable2: true,
      sports: ['swimming', 'cycling', 'running'],
      groupResult: ['cycling'],
      groupMax: [],
      groupCell: [],
    };
  },
};
</script>

<style lang="scss">
.inputDemo {
  min-height: 100vh;
  background-color: color(gray7);

  .demo--cell .demo__content {
    padding: 0;
  }
}
</style>
