import { expect, it, jest } from '@jest/globals';
import { newSpecPage } from '@stencil/core/testing';
import { getTestableShadowElement } from '../../../../utils/test/element';
import { LoginMethodButton } from '../../login-method-button';
import { LoginMethodVariant } from '../../types';

interface VariantTestConfig {
  label: string;
  variant: LoginMethodVariant;
}

const variants: VariantTestConfig[] = [
  { variant: 'digid', label: 'Inloggen' },
  { variant: 'digid-machtigen', label: 'Inloggen als gemachtigde' },
  { variant: 'eherkenning', label: 'Inloggen als bedrijf of instelling' },
  { variant: 'eidas', label: 'European login' },
];

it.each(variants)(
  'renders the correct icon and label for [variant="$variant"]',
  async ({ variant, label }: VariantTestConfig) => {
    const page = await newSpecPage({
      components: [LoginMethodButton],
      html: `<lux-login-method-button variant="${variant}" />`,
    });

    const labelElement = getTestableShadowElement<HTMLSpanElement>(page, 'label');
    const logoContainerElement = getTestableShadowElement<HTMLDivElement>(page, `logo`);

    expect(labelElement.textContent).toBe(label);
    // TODO check for the child to be an SVGElement with [data-testid="icon-${variant}"]
    // --> logoContainerElement.children[0] is an empty object
    expect(logoContainerElement.children).toHaveLength(1);
  },
);

it('allows for a custom label to be provided', async () => {
  const page = await newSpecPage({
    components: [LoginMethodButton],
    html: `<lux-login-method-button variant="digid" label="My Custom Label" />`,
  });

  const { textContent }: HTMLLuxLoginMethodButtonElement = getTestableShadowElement(page, 'label');
  expect(textContent).not.toBe('Inloggen'); // The default label for variant="digid"
  expect(textContent).toBe('My Custom Label');
});

it('only emits a luxClick event when clicked', async () => {
  const page = await newSpecPage({
    components: [LoginMethodButton],
    html: `<lux-login-method-button variant="digid" />`,
  });

  const clickHandler = jest.fn();
  const luxClickHandler = jest.fn();
  const loginMethodButton = page.root;

  loginMethodButton?.addEventListener('click', luxClickHandler);
  loginMethodButton?.addEventListener('luxClick', luxClickHandler);

  loginMethodButton?.click();

  expect(clickHandler).not.toHaveBeenCalled();
  expect(luxClickHandler).toHaveBeenCalled();
});
