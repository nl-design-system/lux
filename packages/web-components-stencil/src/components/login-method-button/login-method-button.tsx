import { Component, Event, EventEmitter, getAssetPath, h, Prop, State } from '@stencil/core';
import { COMPONENT_TAG, loginMethodLabels } from './constants';
import type { LoginMethodVariant } from './types';

const requests = new Map<string, Promise<string>>();

@Component({
  tag: 'lux-login-method-button',
  assetsDirs: ['logos'],
  shadow: true,
  styleUrl: 'login-method-button.css',
})
export class LoginMethodButton {
  @Prop() public readonly variant!: LoginMethodVariant;
  @Prop() public readonly label!: string;

  @State() private svgContent: string = 'No logo';

  @Event() private luxClick!: EventEmitter<void>;

  async componentWillLoad() {
    this.loadIcon();
  }

  private get printedLabel(): string {
    if (this.label) {
      return this.label;
    }

    return loginMethodLabels[this.variant];
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
    return <span class={`${COMPONENT_TAG}__label`}>{this.printedLabel}</span>;
  }

  renderLogo() {
    const classNames = {
      [`${COMPONENT_TAG}__logo`]: true,
      [`${COMPONENT_TAG}__logo--${this.variant}`]: true,
    };

    return <div class={classNames} aria-hidden="true" innerHTML={this.svgContent} />;
  }

  private handleClick(evt: MouseEvent) {
    evt.stopPropagation();

    this.luxClick.emit();
  }

  private async loadIcon(): Promise<void> {
    const url = this.getSvgUrl();

    try {
      const content = await this.getSvgContent(url);
      this.svgContent = content;
    } catch (err) {
      console.error(`Icon '${this.variant}' was not resolved`);
      console.error(err);
    }
  }

  private isStatusValid(status: number): boolean {
    return status <= 299;
  }

  private getSvgUrl(): string {
    return getAssetPath(`./logos/${this.variant}.svg`);
  }

  private async getSvgContent(url: string): Promise<string> {
    if (!url) {
      return Promise.reject();
    }

    // Make sure we only request the same icon once by checking if we already have a request for this url
    let request = requests.get(url);

    if (request) {
      return request;
    }

    request = fetch(url, { cache: 'force-cache', credentials: 'include' }).then((response) => {
      if (this.isStatusValid(response.status)) {
        return response.text();
      }

      return Promise.resolve('');
    });

    // cache for the same requests
    requests.set(url, request);

    return request;
  }
}
