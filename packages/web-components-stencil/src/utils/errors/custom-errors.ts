import { extendMessageIfAvailable } from './extend-message';

class CustomError extends Error {
  constructor(message: string) {
    super(extendMessageIfAvailable('LUX Error', message));
    this.name = this.constructor.name;
  }
}

export class RequiredPropertyError<T = HTMLElement> extends CustomError {
  constructor(component: T, property: keyof T, message?: string) {
    super(
      extendMessageIfAvailable(`Component ${component} is missing a required property "${String(property)}`, message),
    );
  }
}

export class UnsupportedPropertyValueError<T extends HTMLElement> extends CustomError {
  constructor(component: T, property: keyof T, value: any, message?: string) {
    super(
      extendMessageIfAvailable(
        `Component ${component} has unsupported value "${value}" for property "${String(property)}`,
        message,
      ),
    );
  }
}
