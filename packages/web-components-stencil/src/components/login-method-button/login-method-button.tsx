import { Component, Element, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';
import { COMPONENT_TAG, loginMethodLabels } from './constants';
import type { LoginMethodVariant } from './types';
import { applyTestId } from '../../utils/test/testid';

@Component({
  tag: 'lux-login-method-button',
  shadow: true,
  styleUrl: 'login-method-button.css',
})
export class LoginMethodButton {
  private get printedLabel(): string {
    if (this.label) {
      return this.label;
    }

    return loginMethodLabels[this.variant];
  }

  @Element() el!: HTMLLuxLoginMethodButtonElement;

  @Prop() public readonly variant!: LoginMethodVariant;
  @Prop() public readonly label!: string;

  @Event() private luxClick!: EventEmitter<void>;

  @Listen('click')
  handleClick(evt: MouseEvent) {
    evt.stopPropagation();
    evt.preventDefault();

    this.luxClick.emit();
  }

  renderLabel() {
    return (
      <span class={`${COMPONENT_TAG}__label`} {...applyTestId('label')}>
        {this.printedLabel}
      </span>
    );
  }

  renderLogoIcon() {
    const loginMethodIcons: Record<LoginMethodVariant, any> = {
      digid: <lux-icon-logo-digid />,
      'digid-machtigen': <lux-icon-logo-digid />,
      eherkenning: <lux-icon-logo-eherkenning />,
      eidas: <lux-icon-logo-eidas />,
    };

    return loginMethodIcons[this.variant];
  }

  renderLogoContainer() {
    return (
      <div class={`${COMPONENT_TAG}__logo`} aria-hidden="true" {...applyTestId('logo')}>
        {this.renderLogoIcon()}
      </div>
    );
  }

  render() {
    const classNames = {
      [`${COMPONENT_TAG}`]: true,
      [`${COMPONENT_TAG}--${this.variant}`]: true,
    };

    return (
      <button class={classNames}>
        {this.renderLabel()}
        {this.renderLogoContainer()}
      </button>
    );
  }
}
