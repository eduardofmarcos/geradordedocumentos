import { BAD_REQUEST } from "http-status";
import { I18N, Languages } from "./I18N";

export abstract class APIError extends Error {
  constructor(I18NMessage: Languages | string) {
    /* istanbul ignore if */
    if (typeof I18NMessage === "string") {
      super(I18NMessage);
      return;
    }

    super(I18NMessage[I18N.DEFAULT_LOCALE]);
    this._I18NMessage = I18NMessage;
  }

  protected _code: number;

  /* istanbul ignore next */
  public get code(): number {
    return this._code;
  }

  protected _I18NMessage: Languages;

  public get I18NMessage(): Languages {
    return this._I18NMessage;
  }

  //fix parameter language?
  public getLocalizedMessage(
    language: { query: { locale: string } } | { locale: string } | string
  ): string {
    const message: any = this.I18NMessage
      ? this.I18NMessage[I18N.getValidLocale(language)]
      : this.message;

    return message;
  }
}

export class TestimonyError extends APIError {
  public get code() {
    return BAD_REQUEST;
  }
}

export class AuditError extends APIError {
  public get code() {
    return BAD_REQUEST;
  }
}

export class UserError extends APIError {
  public get code() {
    return BAD_REQUEST;
  }
}

export class TokenInvalid extends APIError {
  public get code() {
    return BAD_REQUEST;
  }
}

export class ValidationError extends APIError {
  public get code() {
    return BAD_REQUEST;
  }
}
