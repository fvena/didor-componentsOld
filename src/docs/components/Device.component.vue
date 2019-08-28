<template lang="pug">
  .device
    .device__speaker
    .device__screen
      iframe(:name="component" src="/demo.html" frameborder="0" v-if="component")
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      demoComponent: 'docsModule/getComponent',
    }),
  },
  watch: {
    demoComponent(newValue) {
      this.component = '';

      setTimeout(() => {
        this.component = newValue;
      }, 300);
    },
  },
  data() {
    return {
      component: '',
    };
  },
  created() {
    setTimeout(() => {
      this.component = this.demoComponent;
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
$device-background: color(gray7);
$device-color: #9da6aa;
$device-color-a70: rgba($device-color, 0.8);
$device-color-a40: rgba($device-color, 0.4);
$device-color-a20: rgba($device-color, 0.2);
$device-light-a70: rgba(255, 255, 255, 0.7);
$device-light-a30: rgba(255, 255, 255, 0.3);
$device-screen: rgb(255, 255, 255);

// $device-background: color(gray1);
// $device-color: #3b4c53;
// $device-color-a70: rgba($device-color, 0.8);
// $device-color-a40: rgba($device-color, 0.8);
// $device-color-a20: rgba($device-color, 0.8);
// $device-light-a70: rgba(255, 255, 255, 0.2);
// $device-light-a30: rgba(255, 255, 255, 0.3);
// $device-screen: rgb(255, 255, 255);

.device {
  position: relative;
  z-index: 1;
  width: 320px;
  min-width: 320px;
  height: 640px;
  padding: 40px 0 30px;
  overflow: hidden;
  background: $device-background;
  border-radius: 20px;
  box-shadow: 0 0 4px 0 $device-color-a70, 0 10px 18px 0 $device-color-a40,
    inset 0 2px 2px 0 $device-light-a70, inset 0 -1px 2px 0 $device-color-a40;

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  }
}

.device__speaker {
  position: absolute;
  top: 18px;
  left: 50%;
  width: 60px;
  height: 5px;
  background-color: $device-color-a40;
  border-radius: 3px;
  transform: translate(-50%, 0);

  &::before {
    position: absolute;
    top: 0;
    right: -20px;
    display: block;
    width: 5px;
    height: 5px;
    content: '';
    background-color: $device-color-a40;
    border-radius: 3px;
  }
}

.device__screen {
  height: 100%;
  background: $device-screen;
  border-top: 1px solid $device-color-a20;
  border-bottom: 1px solid $device-color-a20;
  box-shadow: inset 0 0 2px 0 $device-color-a40, inset 0 -1px 2px 0 $device-light-a30;
}

@include media(screen) {
  .device {
    right: size(2);
    width: 360px;
    min-width: 360px;
    height: 720px;
  }
}

@include media(portrait) {
  .device {
    display: none;
  }
}
</style>
