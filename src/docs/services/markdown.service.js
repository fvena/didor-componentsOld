import MarkdownIt from 'markdown-it';
import MarkdownToc from 'markdown-it-toc-and-anchor';
import MarkdownFrontMatter from 'markdown-it-front-matter';
import MarkdownEmoji from 'markdown-it-emoji';
import MarkdownCheckbox from 'markdown-it-task-lists';
import MarkdownVideo from 'markdown-it-video';
import MarkdownNotes from 'markdown-it-div';
import Prism from 'prismjs';
import yaml from 'js-yaml';
import ClipboardJS from 'clipboard';
import ApiService from './api.service';

Prism.plugins.toolbar.registerButton('copy-to-clipboard', (env) => {
  // const linkCopy = document.createElement('a');
  // linkCopy.textContent = 'Copiarrrrr';
  const icon = `<svg width="18" height="18" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.219 5.886c-.7 0-1.358.273-1.853.768l-1.38
      1.379-.145.146V4.386c0-.827-.673-1.5-1.5-1.5h-2.592c-.207-.581-.757-1-1.408-1h-1.774a2 2 0
      0 0-1.726-1 2 2 0 0 0-1.726 1H6.34c-.651 0-1.201.419-1.408 1H2.34c-.827 0-1.5.673-1.5
      1.5v19c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-7.794l3.85-3.85.003-.002c0-.001
      0-.002.002-.003l1.377-1.377a2.6 2.6 0 0 0 .768-1.854 2.624 2.624 0 0 0-2.622-2.62zM5.84
      3.386a.5.5 0 0 1 .5-.5h2.092a.5.5 0 0 0 .47-.333 1 1 0 0 1 .938-.667 1 1 0 0 1 .937.667.5.5
      0 0 0 .47.333h2.093a.5.5 0 0 1 .5.5v.5h-8v-.5zm12 20a.5.5 0 0 1-.5.5h-15a.5.5 0 0
      1-.5-.5v-19a.5.5 0 0 1 .5-.5h2.5v.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-.5h2.5a.5.5 0 0 1
      .5.5v4.793L11 16.019l-.01.01-.003.004-.003.005a.474.474 0 0
      0-.111.197c-.004.01-.014.019-.017.03l-1 4a.499.499 0 0 0
      .606.605l4-1c.012-.003.02-.014.03-.018a.503.503 0 0 0
      .17-.095c.009-.008.023-.01.032-.018l3.147-3.147v6.794zm-6.128-6.423c.323.094.8.302
      1.274.776.474.474.683.953.777 1.275l-2.736.685.685-2.736zm2.893 1.45a4.021 4.021 0 0
      0-.913-1.381 4.012 4.012 0 0 0-1.38-.911l7.028-7.027 2.292 2.292-7.027
      7.027zm8.76-8.76l-1.026 1.026-2.292-2.292 1.026-1.027a1.623 1.623 0 0 1 2.292 2.293z"/>
  </svg>`;

  const linkCopy = document.createElement('a');
  linkCopy.setAttribute('class', 'copied');
  linkCopy.innerHTML = icon;

  function resetText() {
    setTimeout(() => {
      linkCopy.setAttribute('class', 'copied');
    }, 3000);
  }

  function registerClipboard() {
    const clip = new ClipboardJS(linkCopy, {
      text() {
        return env.code;
      },
    });

    clip.on('success', () => {
      linkCopy.setAttribute('class', 'copied copied--success');

      resetText();
    });
    clip.on('error', () => {
      linkCopy.setAttribute('class', 'copied copied--error');

      resetText();
    });
  }

  registerClipboard();

  return linkCopy;
});

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
      const tags = [];

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

            // Check is collapse tag
            const collapse = tag.match(/^collapse title="(.*)"$/);
            if (collapse) tag = 'collapse';

            if (tag) {
              tags.push(tag);
            } else {
              tag = tags.pop();
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

              // Collapse
              case 'collapse':
                if (openTag) {
                  return `<div>\n<Collapse title="${collapse[1]}">\n`;
                }
                return '</Collapse>\n</div>\n';

              // Codegroup
              case 'codegroup':
                if (openTag) {
                  return '<div>\n<Codegroup>\n';
                }
                return '</Codegroup>\n</div>\n';

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
