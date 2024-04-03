import { Component, Element, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';
import { COMPONENT_TAG, LoginAgentsLabels } from './constants';
import type { ButtonLoginAgent } from './types';
import { applyTestId } from '../../utils/test/testid';

@Component({
  tag: 'lux-button-login',
  shadow: true,
  styleUrl: 'button-login.css',
})
export class ButtonLogin {
  private get printedLabel(): string {
    if (this.label) {
      return this.label;
    }

    return LoginAgentsLabels[this.agent];
  }

  @Element() el!: HTMLLuxButtonLoginElement;

  @Prop() public readonly agent!: ButtonLoginAgent;
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
    const loginMethodIcons: Record<ButtonLoginAgent, any> = {
      digid: <lux-icon-logo-digid />,
      'digid-machtigen': <lux-icon-logo-digid />,
      eherkenning: <lux-icon-logo-eherkenning />,
      eidas: <lux-icon-logo-eidas />,
    };

    return loginMethodIcons[this.agent];
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
      [`${COMPONENT_TAG}--${this.agent}`]: true,
    };

    return (
      <button class={classNames}>
        {this.renderLabel()}
        {this.renderLogoContainer()}
      </button>
    );
  }
}
