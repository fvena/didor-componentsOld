import MarkdownIt from 'markdown-it';
import ApiService from './api.service';

const MarkdownService = {
  async getMarkdown(file) {
    // Request
    const response = await ApiService.get(file);
    const md = new MarkdownIt();

    return md.render(response.data);
  },
};

export default MarkdownService;
