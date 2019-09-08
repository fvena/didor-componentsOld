<template lang="pug">
  .tabBarDemo
    Demo(title="Uso Básico")
      az-tabBar(v-model="active" :fixed="false")
        az-tabBar-item(icon="palm") Tab
        az-tabBar-item(icon="lap") Tab
        az-tabBar-item(icon="desktop") Tab
        az-tabBar-item(icon="large") Tab

    Demo(title="Seleccionar por nombre")
      az-tabBar(v-model="name" :fixed="false")
        az-tabBar-item(icon="palm" name="palm")
        az-tabBar-item(icon="lap" name="lap")
        az-tabBar-item(icon="desktop" name="desktop")
        az-tabBar-item(icon="large" name="large")

    Demo(title="Barra de navegación")
      az-tabBar(v-model="route" :fixed="false")
        az-tabBar-item(icon="palm" to="home") Home
        az-tabBar-item(icon="lap" to="shop") Shop
        az-tabBar-item(icon="desktop" to="faqs") Faqs
        az-tabBar-item(icon="large" to="contact") Contact

    Demo(title="Mostrar etiqueta")
      az-tabBar(v-model="badge" :fixed="false")
        az-tabBar-item(icon="palm") Tab
        az-tabBar-item(icon="lap" dot) Tab
        az-tabBar-item(icon="desktop" info="5") Tab
        az-tabBar-item(icon="large" info="10") Tab

    Demo(title="Mostrar etiqueta")
      az-tabBar(v-model="custom" :fixed="false" active-color="var(--color-brand)" inactive-color="var(--color-gray1)")
        az-tabBar-item(icon="palm") Tab
        az-tabBar-item(icon="lap" dot) Tab
        az-tabBar-item(icon="desktop" info="5") Tab
        az-tabBar-item(icon="large" info="10") Tab
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      name: 'palm',
      route: 0,
      badge: 0,
      custom: 0,
    };
  },
};
</script>

<style lang="scss">
.tabBarDemo {
  .az-tabBar {
    margin-bottom: simple();
    background-color: color(gray7);
  }
}
</style>
