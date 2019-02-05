import axios from 'axios';
import HandleError from '@/utils/handleError.utils';

const ApiService = {
  /**
   * Initialice the Api Service
   *
   * @param {String} baseURL - Base url of the API
   * @param {Integer} timeout - Max timeout of a request
   */
  init(baseURL, timeout) {
    // Configuration
    axios.defaults.baseURL = baseURL;
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.defaults.headers.post.Accept = 'application/json';
    axios.defaults.timeout = timeout;

    // Interceptors
    axios.interceptors.request.use(config => config, error => HandleError.request(error));
    axios.interceptors.response.use(response => response, error => HandleError.response(error));
  },

  setHeader() {
    // axios.defaults.headers.common.Authorization = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },
};

export default ApiService;
