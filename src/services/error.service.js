/**
 * Custom errors in to the app
 */
class AppError extends Error {
  /**
   * Create an error.
   *
   * @param {String} errorId - Code of the error
   * @param {String} message - Description of the error
   */
  constructor(errorId, message) {
    super(message);

    this.name = this.constructor.name;
    this.errorId = errorId;
    this.message = `${errorId} - ${message}`;
  }
}

export default AppError;
