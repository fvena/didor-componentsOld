import MarkdownIt from 'markdown-it';
import MarkdownToc from 'markdown-it-toc-and-anchor';
import MarkdownFrontMatter from 'markdown-it-front-matter';
import MarkdownEmoji from 'markdown-it-emoji';
import MarkdownCheckbox from 'markdown-it-task-lists';
import MarkdownVideo from 'markdown-it-video';
import MarkdownNotes from 'markdown-it-div';
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
      let lastTag = '';
      let wrapperTag = '';

      const markdown = MarkdownIt({
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true,
        typographer: true,
        quotes: '“”‘’',
        highlight(code, lang) {
          const getLanguage = /(\w+)/.exec(lang);
          const getLines = /\{(.+)\}/.exec(lang);
          const getFile = /\[(.+)\]/.exec(lang);

          const language = getLanguage ? getLanguage[1] : 'js';
          const lines = getLines ? getLines[1] : '';
          const filename = getFile ? getFile[1] : '';
          const filenameClass = filename ? 'hasFile' : '';

          const prismLanguage = Prism.languages[language];
          const highlight = Prism.highlight(code, prismLanguage);

          setTimeout(() => {
            Prism.highlightAll();
          }, 0);

          // eslint-disable-next-line
          return `<pre class="line-numbers ${filenameClass}" data-lang="${language}" data-line="${lines}"><code class="language-${language}">${highlight}</code><div class="file">${filename}</div></pre>`;
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
        .use(MarkdownEmoji)
        .use(MarkdownVideo)
        .use(MarkdownNotes, {
          render(tokens, idx) {
            let tag = tokens[idx].info.trim();
            const openTag = tokens[idx].nesting === 1;

            if (!tag) {
              if (lastTag) {
                tag = lastTag;
                lastTag = '';
              } else if (wrapperTag) {
                tag = wrapperTag;
                wrapperTag = '';
              }
            } else if (tag === 'demo') {
              wrapperTag = tag;
            } else {
              lastTag = tag;
            }

            switch (tag) {
              // Alarms
              case 'tip':
              case 'note':
              case 'warn':
                if (openTag) {
                  return `<div>\n<Alarm type="${tag}">\n`;
                }
                return '</Alarm>\n</div>\n';

              // Demo
              case 'demo':
                if (openTag) {
                  return '<div>\n<Demo>\n';
                }
                return '</Demo>\n</div>\n';

              // Default
              default:
                if (openTag) {
                  return `<div class="${tag}">\n`;
                }
                return '</div>\n';
            }
          },
        })
        .use(MarkdownCheckbox, { label: true, labelAfter: true })
        .render(response.data);

      return { markdown, data };
    } catch (error) {
      console.log(error);
      return '';
    }
  },
};

export default MarkdownService;
