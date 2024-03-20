import { Component, Event, EventEmitter, getAssetPath, h, Prop, State } from '@stencil/core';
import { COMPONENT_TAG, loginMethodLabels } from './constants';
import type { LoginMethodVariant } from './types';
import { isStatusValid } from '../../utils/http/status';

const requestsCache = new Map<string, Promise<string>>();

@Component({
  tag: 'lux-login-method-button',
  assetsDirs: ['assets'],
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

  @State() private svgContent: string = '';

  @Prop() public readonly variant!: LoginMethodVariant;
  @Prop() public readonly label!: string;

  @Event() private luxClick!: EventEmitter<void>;

  async componentWillLoad() {
    return this.loadLogoAsset();
  }

  async componentWillRender() {
    return this.loadLogoAsset();
  }

  renderLabel() {
    return <span class={`${COMPONENT_TAG}__label`}>{this.printedLabel}</span>;
  }

  renderLogo() {
    const classNames = {
      [`${COMPONENT_TAG}__logo`]: true,
      [`${COMPONENT_TAG}__logo--${this.variant}`]: true,
    };

    return <div class={classNames} aria-hidden="true" innerHTML={this.svgContent} />;
  }

  render() {
    return (
      <button class={COMPONENT_TAG} onClick={(evt: MouseEvent) => this.handleClick(evt)}>
        {this.renderLabel()}
        {this.renderLogo()}
      </button>
    );
  }

  private handleClick(evt: MouseEvent) {
    evt.stopPropagation();

    this.luxClick.emit();
  }

  private async loadLogoAsset(): Promise<void> {
    const assetPath = this.getLogoAssetPath();

    try {
      const content = await this.getLogoAssetHtmlString(assetPath);
      this.svgContent = content;
    } catch (err) {
      console.error(`Icon '${this.variant}' was not resolved`);
      console.error(err);
    }
  }

  private getLogoAssetPath(): string {
    return getAssetPath(`./logos/${this.variant}.svg`);
  }

  private async getLogoAssetHtmlString(assetPath: string): Promise<string> {
    if (!assetPath) {
      return Promise.reject();
    }

    // Get from cache, if available
    let request = requestsCache.get(assetPath);

    if (request) {
      return request;
    }

    request = fetch(assetPath, { cache: 'force-cache', credentials: 'include' }).then((response) => {
      if (isStatusValid(response)) {
        return response.text();
      }

      return Promise.resolve('');
    });

    // Cache to prevent repetition
    requestsCache.set(assetPath, request);

    return request;
  }
}
