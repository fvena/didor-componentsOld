<script>
import Vue from 'vue';

export default {
  render(h) {
    return h('iframe', {
      on: {
        load: this.renderChildren,
        resize: () => {
          console.log('PEPEPEPEPPEPEP');
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
          return h('div', { style: { overflow: 'hidden' } }, this.children);
        },
        methods: {
          log() {
            const doc = this.$el.ownerDocument;
            const win = doc.defaultView;
            const contentHeight = this.$el.offsetHeight;
            const paddingIframe = win.frameElement.style.padding;
            console.log(paddingIframe);
            win.frameElement.style.height = `${contentHeight}px`;
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
      console.log('=======================================>');
    },
  },
};
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  padding: 0 $space 0;
  margin-top: -$space;
  border: 1px solid var(--color-border);
  border-radius: $border-radius;
}
</style>
