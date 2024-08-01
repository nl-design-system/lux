import { Component, /*Element,*/ h, Prop } from '@stencil/core';
// import { HTMLStencilElement } from '@stencil/core/internal';
import { attrBoolean } from '../../utils/helpers/attrBoolean';

@Component({
  tag: 'lux-button',
  shadow: true,
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
  // @Event({ cancelable: true }) utrechtRequestReset: EventEmitter;
  // @Event({ cancelable: true }) utrechtRequestSubmit: EventEmitter;
  // @Element() hostElement: HTMLElement;

  // @Prop() iconStart?: HTMLLuxIconChevronLeftElement;
  // @Prop() iconEnd?: boolean;

  render() {
    const classNames = { 'lux-button': true };

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
      >
        {/* <div part='start' class="lux-button__icon lux-button__icon--start"> */}
        {/* <slot name="icon-start"/> */}
        {/* </div> */}
        {/* {this.iconStart} */}
        <slot />
        {/* <slot name="icon-end" /> */}
      </utrecht-button>
    );
  }
}
