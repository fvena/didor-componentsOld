<template lang="pug">
  .inputDemo
    Demo(title="Uso Básico")
      az-input(placeholder="name" v-model="name")

    Demo(title="Personalizado")
      div
        az-input(
          required
          clearable
          v-model="username"
          label="Username"
          right-icon="palm"
          placeholder="Username"
          @click-right-icon="showAlert")

        az-input(
          v-model="password"
          type="password"
          label="Password"
          placeholder="Password"
          required)

    Demo(title="Desactivado")
      az-input(
        label="Username"
        v-model="disabled"
        placeholder="Username"
        left-icon="palm"
        disabled)

    Demo(title="Errores")
      az-input(
        label="Username"
        v-model="error"
        placeholder="Username"
        error)
      az-input(
        label="Teléfono"
        v-model="phone"
        placeholder="Teléfono"
        error-message="Teléfono no válido")

    Demo(title="Autosize")
      az-input(
        label="Message"
        v-model="message"
        type="textarea"
        placeholder="Message"
        rows="3"
        autosize)

    Demo.no-margin-bottom(title="Number")
      az-input(
        label="Número"
        v-model="number"
        type="number"
        placeholder="Número")
</template>

<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      password: '',
      disabled: 'didor',
      error: '',
      phone: '123456',
      message: '',
      number: 7,
    };
  },
  methods: {
    showAlert() {
      alert('Hola mundo'); // eslint-disable-line
    },
  },
};
</script>

<style lang="scss">
.inputDemo {
  background-color: color(gray7);

  .demo__content {
    padding: 0;
  }
}
</style>
