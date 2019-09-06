<template lang="pug">
  .inputDemo
    Demo(title="Uso Básico")
      az-fieldset
        az-input(placeholder="name" v-model="name")

    Demo(title="Personalizado")
      az-fieldset
        az-input(
          required
          clearable
          v-model="username"
          label="Username"
          right-icon="info"
          placeholder="Username"
          maxlength="5"
          @click-right-icon="showAlert")

        az-input(
          v-model="password"
          type="password"
          label="Password"
          placeholder="Password"
          required)

    Demo(title="Desactivado")
      az-fieldset
        az-input(
          label="Username"
          v-model="disabled"
          placeholder="Username"
          left-icon="palm"
          disabled)

    Demo(title="Errores")
      az-fieldset
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
      az-fieldset
        az-input(
          label="Message"
          v-model="message"
          type="textarea"
          placeholder="Message"
          rows="3"
          autosize
          clearable)

    Demo(title="Atributos")
      az-fieldset
        az-input(
          v-model="attr"
          label="Username"
          placeholder="Username"
          maxlength="5"
          autocomplete="false"
          info-message="Máximo 5 caracteres"
          clearable
          autofocus)
        az-input(
          label="Valor"
          v-model="number"
          type="number"
          placeholder="Valor"
          max="10"
          min="0"
          step="2")

    Demo.no-margin-bottom(title="Slots")
      az-fieldset
        az-input(
          v-model="slots"
          placeholder="username")
            template(v-slot:label)
              h5.padding-top-quarter Label slot

            template(v-slot:rightIcon)
              az-button(type="brand") Guardar
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
      attr: '',
      number: 2,
      slots: '',
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
  min-height: 100vh;
  background-color: color(gray7);

  .demo__content {
    padding: 0;
  }
}
</style>
