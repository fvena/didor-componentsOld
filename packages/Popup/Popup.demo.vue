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

    az-popup(v-model="zoom" @hide="zoom = false" bounce)
      | Un modal vue con animación zoom.
    az-popup(v-model="fade" transition="fade" @hide="fade = false" bounce)
      | Un modal vue con animación fade.
    az-popup(v-model="flip" transition="flip" @hide="flip = false" bounce)
      | Un modal vue con animación flip.
    az-popup(v-model="door" transition="door" @hide="door = false" bounce)
      | Un modal vue con animación door.
    az-popup(v-model="slideDown" transition="slideDown" @hide="slideDown = false" bounce)
      | Un modal vue con animación slideDown.
    az-popup(v-model="slideUp" transition="slideUp" @hide="slideUp = false" bounce)
      | Un modal vue con animación slideUp.


    Demo(title="Posición")
      az-row
        az-button(@click="top = true" size="small") top
        az-button(@click="right = true" size="small") right
        az-button(@click="bottom = true" size="small") bottom
        az-button(@click="left = true" size="small") left

    az-popup(v-model="top" @hide="top = false" position="top")
      | Un modal vue con animación.
    az-popup(v-model="right" @hide="right = false" position="right")
      | Un modal vue con animación.
    az-popup(v-model="bottom" @hide="bottom = false" position="bottom")
      | Un modal vue con animación.
    az-popup(v-model="left" @hide="left = false" position="left")
      | Un modal vue con animación.

    Demo(title="Abrir a pantalla completa")
      az-row
        az-button(@click="full = true" size="small") show
        az-button(@click="fullRight = true" size="small") full right

    az-popup(v-model="full" @hide="full = false" full)
      | Un modal vue con animación a pantalla completa.
    az-popup(v-model="fullRight" @hide="fullRight = false" position="right" full)
      | Un modal vue con animación a pantalla completa.

    Demo(title="Varios Modales")
      az-button(@click="some = true" size="small") Mostrar modal 1

    az-popup(v-model="some" @hide="some = false" bounce)
      .text-center
        .margin-bottom-half Modal 1
        az-button(@click="some1 = true" size="small") Mostrar modal 2

    az-popup(v-model="some1" @hide="some1 = false" bounce)
      .text-center
        .margin-bottom-half Modal 2
        az-button(@click="some2 = true" size="small") Mostrar modal 3

    az-popup(v-model="some2" @hide="some2 = false" bounce)
      | Modal 3


    Demo(title="Modales anidados")
      az-button(@click="nest = true" size="small") Mostrar modal 1

    az-popup(v-model="nest" @hide="nest = false" bounce)
      .text-center
        .margin-bottom-half Modal 1
        az-button(@click="nest1 = true" size="small") Mostrar modal 2

      az-popup(v-model="nest1" @hide="nest1 = false" bounce)
        .text-center
          .margin-bottom-half Modal 2
          az-button(@click="nest2 = true" size="small") Mostrar modal 3

        az-popup(v-model="nest2" @hide="nest2 = false" bounce)
          | Modal 3


    Demo(title="Scroll")
      az-button(@click="scroll = true" size="small") show

    az-popup(v-model="scroll" @hide="scroll = false" bounce)
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>
      | Un modal vue con animación y scroll. <br>

    Demo(title="Cerrar con Esc")
      az-button(@click="esc = true" size="small") show

    az-popup(v-model="esc" @hide="esc = false" closeOnEsc)
      | Un modal vue con animación y cierre con esc.

    Demo(title="Abrir en el body")
      az-button(@click="container = true" size="small") show

    az-popup(v-model="container" @hide="container = false" container="body")
      | Un modal vue con animación y renderizado en el body.


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
      scroll: false,
      some: false,
      some1: false,
      some2: false,
      nest: false,
      nest1: false,
      nest2: false,
      esc: false,
      container: false,
      full: false,
      top: false,
      right: false,
      bottom: false,
      left: false,
      fullRight: false,
    };
  },
};
</script>

<style lang="scss">
body {
  height: 100%;
}

.az-popup__content {
  padding: simple();
}
</style>
