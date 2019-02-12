import MarkdownIt from 'markdown-it';
import MarkdownToc from 'markdown-it-toc-and-anchor';
import MarkdownFrontMatter from 'markdown-it-front-matter';
import Prism from 'prismjs';
import yaml from 'js-yaml';
import ApiService from './api.service';

const MarkdownService = {
  async getMarkdown(file) {
    try {
      // Request
      const response = await ApiService.get(file);
      const md = new MarkdownIt();

      return md.render(response.data);
    } catch (error) {
      return '';
    }
  },

  async getMarkdownArticle(file) {
    try {
      // Request
      const response = await ApiService.get(file);

      let data = {};
      const markdown = MarkdownIt({
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true,
        typographer: true,
        quotes: '“”‘’',
        highlight(code, lang) {
          const languageRegexp = /(.*){(.*)}/;
          const match = languageRegexp.exec(lang);
          let language = lang || 'js';
          let lines = '';

          if (match) {
            language = match[1];
            lines = match[2];
          }

          const prismLanguage = Prism.languages[language] || Prism.languages.markup;
          const highlight = Prism.highlight(code, prismLanguage);

          setTimeout(() => {
            Prism.highlightAll();
          }, 0);
          // return highlight;

          // if (lang && hljs.getLanguage(lang)) {
          //   return `<pre class="hljs language-${lang}" data-lang="${lang}"><code>${
          //     Prism.highlight(lang, str, true).value
          //   }</code></pre>`;
          // }

          // eslint-disable-next-line
          return `<pre class="line-numbers" data-lang="${language}" data-line="${lines}"><code class="language-${language}">${highlight}</code></pre>`;
        },
      })
        .use(MarkdownToc, {
          tocClassName: 'markdownToc',
          tocFirstLevel: 2,
          tocLastLevel: 2,
          anchorLink: false,
        })
        .use(MarkdownFrontMatter, (frontMatter) => {
          data = yaml.load(frontMatter);
        })
        .render(response.data);

      return { markdown, data };
    } catch (error) {
      console.log(error);
      return '';
    }
  },
};

export default MarkdownService;
