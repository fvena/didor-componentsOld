<template lang="pug">
.article(:class="{'article--show-device': deviceShow}")
  .wrapper
    v-runtime-template(:template="content" v-if="content")
    div(v-else)
      h1 No se ha encontrado el archivo
    Footer
  Device(v-if="deviceShow")
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

  computed: {
    ...mapGetters({
      article: 'docsModule/getArticle',
    }),
    content() {
      return `<div>${this.article.markdown}</div>`;
    },
    deviceShow() {
      return this.article.data && this.article.data.device ? this.article.data.device : false;
    },
  },
};
</script>

<style lang="scss">
$header-height: triple($space);
$header-height-media: double($space);
$wrapper-width: 670px;

.article {
  padding: double($space) $space;
  color: var(--color-gray2);

  .device {
    display: none;
  }

  img {
    border: 1px solid var(--color-gray6);
    border-radius: $border-radius;
    box-shadow: 0 5px 10px var(--color-gray6);
  }

  h1 + p {
    @include fontsize(delta);

    line-height: 1.8rem;
    color: var(--color-gray4);
  }

  h2 {
    @include fontsize(gamma);

    padding-top: double($space);
    margin-top: triple($space);
    border-top: 1px solid var(--color-border);
  }

  h3 {
    @include fontsize(delta);
  }

  h4 {
    @include fontsize(epsilon);
  }

  h5,
  h6 {
    @include fontsize(zeta);
  }

  pre {
    border-radius: $border-radius;

    &::after {
      right: 2rem;
    }
  }

  blockquote {
    padding-left: $space;
    margin-top: double($space);
    margin-right: 0;
    margin-bottom: double($space);
    margin-left: 0;
    color: var(--color-gray4);
    background-color: var(--color-gray8);
    border-left: 4px solid var(--color-brand);
  }

  table {
    th {
      @include fontsize(theta);

      font-weight: $content-font-bold;
      color: var(--color-gray4);
      text-transform: uppercase;
      background-color: var(--color-gray7);
    }

    td {
      @include fontsize(eta);

      color: var(--color-gray2);
      border-bottom: 1px solid var(--color-border);

      code {
        padding: 0.2rem 0.4rem;
        font-family: $content-font-family;
        font-size: 0.95em;
        font-weight: 400;
        color: var(--color-gray3);
      }
    }
  }

  pre[data-lang],
  pre[data-lang] code {
    font-weight: $code-font-weight;
    color: hsl(198, 17%, 38%);
    background: var(--color-gray7);
    border-radius: $border-radius;
  }

  .line-numbers {
    .line-numbers-rows {
      top: -0.15rem;
      border-right: 1px solid var(--color-border);

      > span::before {
        font-weight: $code-font-slim;
        color: var(--color-gray4);
      }
    }
  }

  .line-highlight {
    background: var(--color-brand);
    opacity: 0.1;
  }

  .code-toolbar {
    .toolbar {
      position: absolute;
      top: quarter($space);
      right: 0;
      opacity: 1;

      .toolbar-item {
        display: block;
      }
    }

    .toolbar a {
      display: block;
      height: $space;
      padding: 0 halve($space);
      font-family: $code-font-family;
      font-size: 0.6rem;
      font-weight: $code-font-bold;
      line-height: $space;
      color: var(--color-gray4);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      background: none;
      border-radius: 0;
      box-shadow: none;
    }
  }

  .token.cdata,
  .token.comment,
  .token.doctype,
  .token.prolog {
    color: var(--color-gray4); // #dfeffc
  }

  .token.punctuation {
    color: hsl(219, 33%, 65%); // #c0c5ce
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.boolean,
  .token.number,
  .token.operator {
    color: hsl(14, 61%, 53%); // #d08770
  }

  .token.property {
    color: hsl(40, 91%, 43%); // #ebcb8b
  }

  .token.tag,
  .token.function {
    color: hsl(210, 29%, 53%); // #8fa1b3
  }

  .language-bash .token.function,
  .token.string {
    color: hsl(178, 27%, 55%); // #96b5b4
  }

  .token.selector {
    color: hsl(311, 30%, 53%); // #b48ead
  }

  .token.attr-name {
    color: hsl(14, 61%, 53%); // #d08770
  }

  .language-css .token.string,
  .style .token.string,
  .token.entity,
  .token.url {
    color: hsl(178, 27%, 55%); // #96b5b4
  }

  .token.attr-value,
  .token.control,
  .token.directive,
  .token.keyword,
  .token.unit {
    color: hsl(92, 38%, 45%); // #a3be8c
  }

  .token.atrule,
  .token.regex,
  .token.statement {
    color: hsl(178, 27%, 55%); // #96b5b4
  }

  .token.placeholder,
  .token.variable {
    color: hsl(210, 29%, 53%); // #8fa1b3
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    text-decoration: none;
    border-bottom: 1px dotted hsl(220, 33%, 85%); // #eff1f5
  }

  .token.italic {
    font-style: italic;
  }

  .token.plain-text {
    font-weight: 400;
  }

  .token.bold,
  .token.important {
    font-weight: $code-font-bold;
  }

  .token.important {
    color: hsl(354, 52%, 46%); // #bf616a
  }

  .token.entity {
    cursor: help;
  }

  .language-bash .token.keyword,
  .language-bash .token.operator {
    color: var(--color-gray2);
  }

  pre > code.highlight {
    outline: 0.4em solid hsl(354, 52%, 46%); // #bf616a
    outline-offset: 0.4em;
  }
}

.article.article--show-device {
  padding-right: calc(320px + #{double($space)});

  .device {
    position: fixed;
    top: $header-height;
    right: $space;
    z-index: $layer-header-z-index;
    display: block;
  }
}

.wrapper {
  width: 100%;
  max-width: $wrapper-width;
  margin: 0 auto;
}

.markdownToc {
  margin-top: triple($space);
  margin-bottom: triple($space);
  list-style: none;

  &::before {
    @include fontsize(epsilon);

    display: block;
    margin-bottom: halve($space);
    font-weight: $content-font-bold;
    color: var(--color-gray2);
    content: 'Tabla de contenidos';
  }

  li {
    padding: 0;
    margin-bottom: 0.2rem;
    margin-left: 0;
  }
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

    h2 {
      @include fontsize(delta);

      padding-top: $space;
      margin-top: double($space);
    }

    h3 {
      @include fontsize(epsilon);
    }

    h4,
    h5,
    h6 {
      @include fontsize(zeta);
    }
  }
  .article.article--show-device {
    padding-right: halve($space);
  }
}
</style>
