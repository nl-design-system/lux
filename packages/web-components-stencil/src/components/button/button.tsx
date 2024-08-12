import { Component, Element, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';
import { UtrechtButtonCustomEvent } from '@utrecht/web-component-library-stencil';
import { attrBoolean } from '../../utils/helpers/attrBoolean';

@Component({
  tag: 'lux-button',
  shadow: { delegatesFocus: true },
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() appearance!: string; // = 'primary-action-button'
  @Prop() busy?: boolean;
  @Prop() disabled?: boolean;
  @Prop() expanded?: boolean | string | 'false' | 'true';
  @Prop() pressed?: boolean | string | 'false' | 'true' | 'mixed';
  @Prop({ attribute: 'readonly', reflect: true }) form?: string;
  @Prop({ attribute: 'formaction', reflect: true }) formAction?: string;
  @Prop({ attribute: 'formenctype', reflect: true }) formEnctype?: string;
  @Prop({ attribute: 'formmethod', reflect: true }) formMethod?: string;
  @Prop({ attribute: 'formnovalidate', reflect: true }) formNoValidate?: boolean;
  @Prop({ attribute: 'formtarget', reflect: true }) formTarget?: string;
  @Prop({ attribute: 'popovertarget', reflect: true }) popoverTarget?: string;
  @Prop({ attribute: 'popovertargetaction', reflect: true }) popoverTargetAction?: string;
  @Prop() name?: string;
  @Prop() value?: string;
  @Prop() type?: string = 'button';
  @Prop() forceState?: 'active' | 'focus' | 'hover';
  @Event({ cancelable: true }) luxRequestReset!: EventEmitter;
  @Event({ cancelable: true }) luxRequestSubmit!: EventEmitter;
  @Element() hostElement!: HTMLElement;

  private buttonElement?: HTMLButtonElement | null;

  @Listen('utrechtRequestReset')
  utrechtRequestResetHandler(event: CustomEvent<UtrechtButtonCustomEvent<any>>) {
    console.log('Received the custom utrechtRequestReset event: ', event);
    this.luxRequestReset.emit();

    if (!event.defaultPrevented) {
      this.hostElement?.closest('form')?.reset();
    }
  }
  @Listen('utrechtRequestSubmit')
  utrechtRequestSubmitHandler(event: CustomEvent<UtrechtButtonCustomEvent<any>>) {
    console.log('Received the custom utrechtRequestSubmit event: ', event);
    this.luxRequestSubmit.emit();

    if (!event.defaultPrevented) {
      this.hostElement?.closest('form')?.requestSubmit();
    }
  }

  componentDidLoad() {
    this.buttonElement = this.hostElement.shadowRoot
      ?.querySelector('utrecht-button')
      ?.shadowRoot?.querySelector('button');
    if (this.forceState) {
      let forcedClass: string[] = [`utrecht-button--${this.forceState}`];
      if (this.forceState === 'focus') {
          forcedClass.push('utrecht-button--focus-visible');
      }

      // console.log('componentDidLoad', this.buttonElement, forcedClass);
      this.buttonElement?.classList.add(...forcedClass);
    }
  }

  render() {
    const classNames = { [`force-state--${this.forceState}`]: Boolean(this.forceState), 'lux-button': true };

    const {
      appearance,
      busy,
      disabled,
      expanded,
      pressed,
      form,
      formAction,
      formEnctype,
      formMethod,
      formNoValidate,
      formTarget,
      popoverTarget,
      popoverTargetAction,
      name,
      value,
      type,
    } = this;

    return (
      <utrecht-button
        class={classNames}
        appearance={appearance}
        busy={busy}
        disabled={disabled}
        expanded={attrBoolean(expanded)}
        pressed={attrBoolean(pressed)}
        form={form}
        formAction={formAction}
        formEnctype={formEnctype}
        formMethod={formMethod}
        formNoValidate={formNoValidate}
        formTarget={formTarget}
        popoverTarget={popoverTarget}
        popoverTargetAction={popoverTargetAction}
        name={name}
        value={value}
        type={type}
        part="utrecht-button"
      >
        <slot />
      </utrecht-button>
    );
  }
}
