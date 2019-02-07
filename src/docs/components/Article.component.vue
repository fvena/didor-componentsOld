<template lang="pug">
.article(:class="{'article--show-device': deviceShow}")
  .wrapper
    slot
    Footer
  Device
</template>

<script>
import Footer from '@/components/Footer.component.vue';
import Device from '@/components/Device.component.vue';

export default {
  components: {
    Footer,
    Device,
  },

  data() {
    return {
      deviceShow: true,
    };
  },
};
</script>

<style lang="scss">
$header-height: triple($space);
$header-height-media: double($space);
$wrapper-width: 670px;

.article {
  padding: double($space) $space;
}

.article.article--show-device {
  .device {
    position: fixed;
    top: $header-height;
    right: $space;
    z-index: $layer-header-z-index;
  }

  .docs__section {
    padding-right: calc(320px + #{double($space)});
  }
}

.wrapper {
  width: 100%;
  max-width: $wrapper-width;
  margin: 0 auto;
}

@include media(large) {
  .article.article--show-device {
    padding-right: calc(360px + #{double($space)});

    .device {
      right: double($space);
    }
  }
}
</style>
