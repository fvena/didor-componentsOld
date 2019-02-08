import MarkdownIt from 'markdown-it';
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
};

export default MarkdownService;
