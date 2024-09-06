import { Component, Element, h, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { COMPONENT_TAG, loginAgentsLabels } from './constants';
import type { LoginLinkAgent } from './types';
import { applyTestId } from '../../utils/test/testid';

@Component({
  tag: 'lux-login-link',
  shadow: true,
  styleUrl: 'login-link.scss',
})
export class LoginLink {
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

  @Element() el!: HTMLLuxLoginLinkElement;

  @Prop() public readonly agent!: LoginLinkAgent;
  @Prop() public readonly label?: string;

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
    const LoginLinkIcons: Record<LoginLinkAgent, HTMLStencilElement> = {
      digid: <lux-icon-logo-digid />,
      'digid-machtigen': <lux-icon-logo-digid />,
      eherkenning: <lux-icon-logo-eherkenning />,
      eidas: <lux-icon-logo-eidas />,
    };

    return LoginLinkIcons[this.agent];
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
