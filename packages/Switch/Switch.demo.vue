<template lang="pug">
  .switchDemo
    Demo(title="Uso Básico")
      .padding-x
        az-switch(v-model="checked")

    Demo(title="Desactivado")
      .padding-x
        az-switch(v-model="disabled" disabled)

    Demo(title="Tamaño")
      p.padding-x
        az-switch(v-model="size1" size="large")
      p.padding-x
        az-switch(v-model="size2")
      p.padding-x
        az-switch(v-model="size3" size="small")

    Demo(title="Color personalizado")
      .padding-x
        az-switch(v-model="color" active-color="var(--color-success)" inactive-color="var(--color-danger)")


    Demo(title="Modo celda")
      az-cell(title="title")
        az-switch(v-model="cell")

    Demo(title="Control asíncrono")
      .padding-x
        az-switch(:value="async" @input="onInput" :disabled="loading")
        az-loading.margin-left(type="bars" v-if="loading")
        p.small.color-gray4 timeout: 2 segundos
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      disabled: true,
      size1: true,
      size2: true,
      size3: true,
      color: true,
      async: false,
      cell: true,
      loading: false,
    };
  },

  methods: {
    onInput(checked) {
      this.loading = true;

      setTimeout(() => {
        this.async = checked;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.switchDemo {
  min-height: 100vh;
  background-color: color(gray7);

  .demo__content {
    padding: 0;
  }
}
</style>
