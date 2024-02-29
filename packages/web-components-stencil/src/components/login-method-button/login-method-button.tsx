import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { COMPONENT_TAG, loginMethodLabels, loginMethodLogos } from './constants';
import type { LoginMethodVariant } from './types';

@Component({
  tag: 'lux-login-method-button',
  assetsDirs: ['logos'],
  shadow: true,
  styleUrl: 'login-method-button.css',
})
export class LoginMethodButton {
  @Prop() public readonly variant!: LoginMethodVariant;
  @Prop() public readonly label!: string;

  @Event() private luxClick!: EventEmitter<void>;

  private get printedLabel(): string {
    if (this.label) {
      return this.label;
    }

    return loginMethodLabels[this.variant];
  }

  private get logoUrl() {
    return loginMethodLogos[this.variant];
  }

  render() {
    return (
      <button class={COMPONENT_TAG} onClick={(evt: MouseEvent) => this.handleClick(evt)}>
        {this.renderLabel()}
        {this.renderLogo()}
      </button>
    );
  }

  renderLabel() {
    return (
      <span class={`${COMPONENT_TAG}__label`}>{this.printedLabel}</span>
    )
  }

  renderLogo() {
    const classNames = {
      [`${COMPONENT_TAG}__logo`]: true,
      [`${COMPONENT_TAG}__logo--${this.variant}`]: true,
    }

    return (
      <img class={classNames} src={this.logoUrl} alt='' aria-hidden="true" />
    )
  }

  private handleClick(evt: MouseEvent) {
    evt.stopPropagation();

    this.luxClick.emit();
  }
}
