import { Component, Element, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';
import { UtrechtButtonCustomEvent } from '@utrecht/web-component-library-stencil';
import { attrBoolean } from '../../utils/helpers/attrBoolean';

@Component({
  tag: 'lux-button',
  shadow: { delegatesFocus: true },
  styleUrl: 'button.scss',
})
export class Button {
  @Prop() appearance!: string;
  @Prop() busy?: boolean | 'false' | 'true' = false;
  @Prop() disabled?: HTMLButtonElement['disabled'];
  @Prop() expanded?: boolean | 'false' | 'true';
  @Prop() pressed?: boolean | 'false' | 'true' | 'mixed';
  @Prop({ attribute: 'readonly', reflect: true }) form?: HTMLButtonElement['form'];
  @Prop({ attribute: 'formaction', reflect: true }) formAction?: HTMLButtonElement['formAction'];
  @Prop({ attribute: 'formenctype', reflect: true }) formEnctype?: HTMLButtonElement['formEnctype'];
  @Prop({ attribute: 'formmethod', reflect: true }) formMethod?: HTMLButtonElement['formMethod'];
  @Prop({ attribute: 'formnovalidate', reflect: true }) formNoValidate?: HTMLButtonElement['formNoValidate'];
  @Prop({ attribute: 'formtarget', reflect: true }) formTarget?: HTMLButtonElement['formTarget'];
  @Prop({ attribute: 'popovertarget', reflect: true }) popoverTarget?: PopoverInvokerElement['popoverTargetElement'];
  @Prop({ attribute: 'popovertargetaction', reflect: true })
  popoverTargetAction?: PopoverInvokerElement['popoverTargetAction'];
  @Prop() name?: HTMLButtonElement['name'];
  @Prop() value?: HTMLButtonElement['value'];
  @Prop() type?: HTMLButtonElement['type'];
  @Prop() forceState?: 'active' | 'focus' | 'hover';
  @Event({ cancelable: true }) luxRequestReset!: EventEmitter;
  @Event({ cancelable: true }) luxRequestSubmit!: EventEmitter;
  @Element() hostElement!: HTMLElement;

  private utrechtButtonElement?: HTMLUtrechtButtonElement;
  private buttonElement?: HTMLButtonElement | null;

  @Listen('utrechtRequestReset')
  utrechtRequestResetHandler(event: CustomEvent<UtrechtButtonCustomEvent<any>>) {
    this.luxRequestReset.emit();

    if (!event.defaultPrevented) {
      this.hostElement.closest('form')?.reset();
    }
  }
  @Listen('utrechtRequestSubmit')
  utrechtRequestSubmitHandler(event: CustomEvent<UtrechtButtonCustomEvent<any>>) {
    this.luxRequestSubmit.emit();

    if (!event.defaultPrevented) {
      this.hostElement?.closest('form')?.requestSubmit();
    }
  }

  componentDidLoad() {
    this.buttonElement = this.utrechtButtonElement?.shadowRoot?.querySelector('button');
    if (this.forceState) {
      let forcedClass: string[] = [`utrecht-button--${this.forceState}`];
      if (this.forceState === 'focus') {
        forcedClass.push('utrecht-button--focus-visible');
      }

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
        ref={(el: HTMLUtrechtButtonElement) => {
          this.utrechtButtonElement = el;
        }}
      >
        <slot />
      </utrecht-button>
    );
  }
}
