import store from '@/store/store';
import BackendErrors from '@/utils/backendErrors.utils';
import AppError from '@/services/error.service';

const HandleError = {
  /**
   * Handle response errors from http api
   *
   * @param {Object} error - Error object
   */
  async response(error) {
    /*
     * TIMEOUT ERROR
     *
     * When the connection is too slow,
     * the request could be aborted if the request takes a long time.
     * I throw a specific error to be able to communicate it to the user.
     */
    if (error.code === 'ECONNABORTED') {
      throw new AppError('timeout', 'The connection is too slow');
    }

    /*
     * BACKEND DOWN INTERCEPTOR
     * When the backend is down launch global error to manage it
     */
    if (!error.response) {
      store.dispatch('globalModule/setError', 'backendDown', { root: true });
      throw new AppError();
    }

    /*
     * OTHER ERRORS
     *
     * Parse all error from backend to avoid coupling with it
     * Any error that has not been contemplated will be parsed as default error
     */
    const errorCode = error.response.data._id ? error.response.data._id : 'default';
    const parseError = BackendErrors[errorCode] ? BackendErrors[errorCode] : BackendErrors.default;

    throw new AppError(parseError[0], parseError[1]);
  },

  /**
   * Handle request errors from http api
   *
   * @param {Object} error - Error object
   */
  async request(error) {
    /*
     * BACKEND DOWN INTERCEPTOR
     *
     * When the backend is down launch global error to manage it
     */
    if (!error.status) {
      store.dispatch('globalModule/setError', 'backendDown', { root: true });
      throw new AppError();
    }

    /*
     * OTHER ERRORS
     *
     * Parse all error from backend to avoid coupling with it
     * Any error that has not been contemplated will be parsed as default error
     */
    const errorCode = error.response.data._id ? error.response.data._id : 'default';
    const parseError = BackendErrors[errorCode] ? BackendErrors[errorCode] : BackendErrors.default;

    throw new AppError(parseError[0], parseError[1]);
  },
};

export default HandleError;
