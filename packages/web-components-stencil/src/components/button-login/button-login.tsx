import { Component, Element, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { COMPONENT_TAG, loginAgentsLabels } from './constants';
import type { ButtonLoginAgent } from './types';
import { applyTestId } from '../../utils/test/testid';

@Component({
  tag: 'lux-button-login',
  shadow: true,
  styleUrl: 'button-login.scss',
})
export class ButtonLogin {
  private get printedLabel(): string {
    if (this.label) {
      return this.label;
    }

    return loginAgentsLabels[this.agent].label;
  }

  private get hiddenAgentLabel(): string {
    if (this.label) {
      return '';
    }

    return loginAgentsLabels[this.agent].agentLabel;
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
    const className = `${COMPONENT_TAG}__label`;
    return (
      <span class={className} {...applyTestId('label')}>
        {this.printedLabel}
        <span class={`${className}--sr-only`}> {this.hiddenAgentLabel}</span>
      </span>
    );
  }

  renderLogoIcon() {
    const buttonLoginIcons: Record<ButtonLoginAgent, HTMLStencilElement> = {
      digid: <lux-icon-logo-digid />,
      'digid-machtigen': <lux-icon-logo-digid />,
      eherkenning: <lux-icon-logo-eherkenning />,
      eidas: <lux-icon-logo-eidas />,
    };

    return buttonLoginIcons[this.agent];
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
        {this.renderLogoContainer()}
        {this.renderLabel()}
      </button>
    );
  }
}
