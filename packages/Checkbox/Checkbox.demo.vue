<template lang="pug">
  div
    Demo(title="Uso Básico")
      az-checkbox(v-model="checked") Checkbox

      p.margin-left.margin-top-half
        span.color-gray3 valor:&nbsp;
        span.color-brand {{ checked }}

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

      p.margin-left.margin-top-half
        span.color-gray3 valor:&nbsp;
        span.color-brand {{ groupResult }}

    Demo(title="Máximo de checkbox seleccionados")
      az-checkbox-group(max-options="2")
        az-checkbox(
          v-for="(item, index) in sports"
          v-model="groupMax"
          :key="index"
          :value="item")
          | {{ item }}

      p.margin-left.margin-top-half
        span.color-gray3 valor:&nbsp;
        span.color-brand {{ groupMax }}

    Demo.demo--cell.no-margin-bottom(title="Vista modo celda")
      az-checkbox-group(cell)
        az-checkbox(
          v-for="(item, index) in sports"
          v-model="groupCell"
          :key="index"
          :value="item")
          | {{ item }}

      p.margin-left.margin-top-half
        span.color-gray3 valor:&nbsp;
        span.color-brand {{ groupCell }}
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

<style lang="scss"></style>
