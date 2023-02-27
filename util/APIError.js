"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError =
  exports.TokenInvalid =
  exports.UserError =
  exports.AuditError =
  exports.TestimonyError =
  exports.APIError =
    void 0;
const http_status_1 = require("http-status");
const I18N_1 = require("./I18N");
class APIError extends Error {
  constructor(I18NMessage) {
    /* istanbul ignore if */
    if (typeof I18NMessage === "string") {
      super(I18NMessage);
      return;
    }
    super(I18NMessage[I18N_1.I18N.DEFAULT_LOCALE]);
    this._I18NMessage = I18NMessage;
  }
  /* istanbul ignore next */
  get code() {
    return this._code;
  }
  get I18NMessage() {
    return this._I18NMessage;
  }
  //fix parameter language?
  getLocalizedMessage(language) {
    const message = this.I18NMessage
      ? this.I18NMessage[I18N_1.I18N.getValidLocale(language)]
      : this.message;
    return message;
  }
}
exports.APIError = APIError;
class TestimonyError extends APIError {
  get code() {
    return http_status_1.BAD_REQUEST;
  }
}
exports.TestimonyError = TestimonyError;
class AuditError extends APIError {
  get code() {
    return http_status_1.BAD_REQUEST;
  }
}
exports.AuditError = AuditError;
class UserError extends APIError {
  get code() {
    return http_status_1.BAD_REQUEST;
  }
}
exports.UserError = UserError;
class TokenInvalid extends APIError {
  get code() {
    return http_status_1.BAD_REQUEST;
  }
}
exports.TokenInvalid = TokenInvalid;
class ValidationError extends APIError {
  get code() {
    return http_status_1.BAD_REQUEST;
  }
}
exports.ValidationError = ValidationError;
