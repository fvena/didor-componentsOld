<script>
import Vue from 'vue';

export default {
  render(h) {
    return h('iframe', {
      on: {
        load: this.renderChildren,
        resize: () => {
          // Resize action
        },
      },
      class: {
        demo: true,
      },
      attrs: {
        src: '/demo.html',
        frameborder: 0,
        resize: this.resize,
      },
    });
  },
  beforeUpdate() {
    // freezing to prevent unnessessary Reactifiation of vNodes
    this.iApp.children = Object.freeze(this.$slots.default);
  },
  methods: {
    renderChildren() {
      const children = this.$slots.default;
      const body = this.$el.contentDocument.body;
      const el = document.createElement('DIV'); // we will mount or nested app to this element
      body.appendChild(el);

      const iApp = new Vue({
        name: 'iApp',
        // freezing to prevent unnessessary Reactifiation of vNodes
        data: { children: Object.freeze(children) },
        render(h) {
          return h(
            'div',
            { class: { 'demo-container': true }, style: { overflow: 'hidden' } },
            this.children // eslint-disable-line
          );
        },
        methods: {
          log() {
            const doc = this.$el.ownerDocument;
            const win = doc.defaultView;
            const contentHeight = this.$el.offsetHeight;
            const paddingIframe = 55;
            win.frameElement.style.height = `${contentHeight + paddingIframe}px`;
          },
        },
        mounted() {
          this.$nextTick(() => {
            const doc = this.$el.ownerDocument;
            const win = doc.defaultView;

            win.addEventListener('resize', this.log());
          });
          this.log();
        },
        beforeDestroy() {
          const doc = this.$el.ownerDocument;
          const win = doc.defaultView;
          win.removeEventListener('resize', this.log);
        },
      });

      iApp.$mount(el); // mount into iframe

      this.iApp = iApp; // cache instance for later updates
    },
    resize() {
      // Resize action
    },
  },
};
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  padding: 25px;
  margin: $space 0;
  border: 1px solid color(border);
  border-radius: $border-radius;

  > * {
    margin: 0;
  }
}
</style>
