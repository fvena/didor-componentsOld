<template lang="pug">
.col(
  :class="classObject"
)
  slot
</template>

<script>
import ResponsiveClass from '../mixins/responsiveClass';

export default {
  mixins: [ResponsiveClass],
  props: {
    cols: {
      type: [String, Number],
      default: null,
    },
    auto: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: [String, Number],
      default: null,
    },
    palm: { type: Object },
    lap: { type: Object },
    small: { type: Object },
    desk: { type: Object },
    large: { type: Object },
  },
  computed: {
    classObject() {
      const baseClass = 'col';
      const responsiveProperties = ['cols', 'offset'];
      const responsiveClass = this.getResponsiveClass(baseClass, responsiveProperties);

      const propertiesClass = [
        this.cols > 0 ? `col--cols-${this.cols}` : '',
        this.offset > 0 ? `col--offset-${this.offset}` : '',
        {
          'col--auto': this.auto,
          'col--expand': this.expand,
        },
      ];

      return propertiesClass.concat(responsiveClass);
    },
  },
};
</script>
