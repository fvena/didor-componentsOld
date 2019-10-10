<template lang="pug">
  .popupDemo
    Demo(title="Uso Básico")
      az-row
        az-button(@click="zoom = true" size="small") zoom
        az-button(@click="fade = true" size="small") fade
        az-button(@click="flip = true" size="small") flip
        az-button(@click="door = true" size="small") door
        az-button(@click="slideDown = true" size="small") slideDown
        az-button(@click="slideUp = true" size="small") slideUp


    az-popup(v-model="zoom" @hide="zoom = false")
      | Un modal vue con animación zoom.
    az-popup(v-model="fade" animation="fade" @hide="fade = false")
      | Un modal vue con animación fade.
    az-popup(v-model="flip" animation="flip" @hide="flip = false")
      | Un modal vue con animación flip.
    az-popup(v-model="door" animation="door" @hide="door = false")
      | Un modal vue con animación door.
    az-popup(v-model="slideDown" animation="slideDown" @hide="slideDown = false")
      | Un modal vue con animación slideDown.
    az-popup(v-model="slideUp" animation="slideUp" @hide="slideUp = false")
      | Un modal vue con animación slideUp.

    Demo(title="Cerrar con Esc")
      az-button(@click="esc = true") show

    az-popup(v-model="esc" @hide="esc = false" :closeOnEsc="true")
      | Un modal vue con animación.
</template>

<script>
export default {
  data() {
    return {
      zoom: false,
      fade: false,
      flip: false,
      door: false,
      slideDown: false,
      slideUp: false,
      esc: false,
    };
  },
};
</script>
