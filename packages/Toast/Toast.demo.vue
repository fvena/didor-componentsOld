<template lang="pug">
  .inputDemo
    Demo(title="Uso Básico")
      az-fieldset(title="Datos de usuario")
        az-input(v-model="name" label="Nombre" placeholder="Nombre")
        az-input(v-model="lastName" label="Apellidos" placeholder="Apellidos")
        az-input(v-model="email" label="Email" placeholder="Email")

    Demo.no-margin-bottom(title="Slots")
      az-fieldset.no-margin-bottom
        template(v-slot:title)
          h4 Slot título
        az-input(v-model="name" label="Nombre" placeholder="Nombre")
        az-input(v-model="lastName" label="Apellidos" placeholder="Apellidos")
        az-input(v-model="email" label="Email" placeholder="Email")
</template>

<script>
export default {
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      name2: '',
      lastName2: '',
      email2: '',
    };
  },
};
</script>

<style lang="scss">
.inputDemo {
  min-height: 100vh;
  background-color: color(gray7);

  .demo__content {
    padding: 0;
  }
}
</style>
