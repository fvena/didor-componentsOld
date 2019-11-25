<template lang="pug">
  .codegroup
    .codegroup__files
      .codegroup__file(
        v-for="(file, key) in files"
        :class="{'codegroup__file--select': key === index }"
        @click="showFile(key + 1)")
        | {{ file }}
    slot
</template>

<script>
export default {
  data() {
    return {
      files: [],
      index: 0,
    };
  },
  methods: {
    showFile(index) {
      this.index = index - 1;
      const codeBlocks = this.$el.children;
      const array = [...codeBlocks];

      // eslint-disable-next-line
      array.forEach(codeBlock => {
        if (codeBlock.className === 'codegroup__files') return;
        codeBlock.style.display = 'none';
      });

      codeBlocks[index].style.display = 'block';
    },
    getFiles() {
      // eslint-disable-next-line
      return new Promise(resolve => {
        const codeBlocks = this.$el.children;
        const array = [...codeBlocks];

        // eslint-disable-next-line
        array.forEach(codeBlock => {
          const blocks = codeBlock.children;
          const arrayBlocks = [...blocks];

          // eslint-disable-next-line
          arrayBlocks.forEach(blocksChildren => {
            const blockChildren = blocksChildren.children;
            const arrayChildren = [...blockChildren];

            // eslint-disable-next-line
            arrayChildren.forEach(item => {
              if (item.className !== 'file') return;
              this.files.push(item.innerHTML);
            });
          });
        });

        resolve(true);
      });
    },
  },
  mounted() {
    setTimeout(async () => {
      await this.getFiles();
      this.showFile(1);
    }, 50);
  },
};
</script>

<style lang="scss">
.codegroup {
  .code-toolbar {
    // display: none;

    .file {
      display: none !important;
    }

    pre[data-lang].hasFile {
      padding-top: 1.2rem;
      border-radius: 0;

      &::after,
      + .toolbar {
        top: -1.5rem;
      }

      .line-numbers-rows {
        top: 1.2rem;
      }
    }
  }
}
.codegroup__files {
  height: simple();
  padding: 0 half();
  font-family: font-family(base);
  font-size: font-size(small2);
  line-height: simple();
  color: color(gray2);
  background-color: color(gray6);
  border-radius: $border-radius $border-radius 0 0;
}

.codegroup__file {
  display: inline-block;
  padding: 0 quarter();
  color: color(gray3);
  cursor: pointer;

  &.codegroup__file--select {
    font-weight: font-weight(bold);
    color: color(gray1);
    border-bottom: 2px solid color(gray1);
  }
}
</style>
