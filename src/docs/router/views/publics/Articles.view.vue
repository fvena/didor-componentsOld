<template lang="pug">
.article(:class="{'article--show-device': deviceShow}")
  .wrapper
    v-runtime-template(:template="article" v-if="article")
    div(v-else)
      h1 No se ha encontrado el archivo
    Footer
  Device
</template>

<script>
import { mapGetters } from 'vuex';
import VRuntimeTemplate from 'v-runtime-template';
import Footer from '@/components/Footer.component.vue';
import Device from '@/components/Device.component.vue';

export default {
  components: {
    Footer,
    Device,
    VRuntimeTemplate,
  },

  data() {
    return {
      deviceShow: true,
    };
  },

  computed: {
    ...mapGetters({
      article: 'docsModule/getArticle',
    }),
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
  padding-right: calc(320px + #{double($space)});

  .device {
    position: fixed;
    top: $header-height;
    right: $space;
    z-index: $layer-header-z-index;
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
  }
}

@include media(portrait) {
  .article.article--show-device {
    padding-right: $space;
  }
}

@include media(palm) {
  .article {
    padding: halve($space);
  }
  .article.article--show-device {
    padding-right: halve($space);
  }
}
</style>
