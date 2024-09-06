import { expect, it, jest } from '@jest/globals';
import { newSpecPage } from '@stencil/core/testing';
import { getTestableShadowElement } from '../../../../utils/test/element';
import { LoginLink } from '../../login-link';
import { LoginLinkAgent } from '../../types';

interface AgentTestConfig {
  label: string;
  agent: LoginLinkAgent;
}

const agents: AgentTestConfig[] = [
  { agent: 'digid', label: 'Inloggen' },
  { agent: 'digid-machtigen', label: 'Inloggen als gemachtigde' },
  { agent: 'eherkenning', label: 'Inloggen als bedrijf of instelling' },
  { agent: 'eidas', label: 'European login' },
];

it.each(agents)(
  'renders the correct icon and label for [agent="$agent"]',
  async ({ agent, label }: AgentTestConfig) => {
    const page = await newSpecPage({
      components: [LoginLink],
      html: `<lux-login-link agent="${agent}" />`,
    });

    const labelElement = getTestableShadowElement<HTMLSpanElement>(page, 'label');
    const logoContainerElement = getTestableShadowElement<HTMLDivElement>(page, `logo`);

    expect(labelElement.textContent).toMatch(label);
    // TODO check for the child to be an SVGElement with [data-testid="icon-${agent}"]
    // --> logoContainerElement.children[0] is an empty object
    expect(logoContainerElement.children).toHaveLength(1);
  },
);

it('allows for a custom label to be provided', async () => {
  const page = await newSpecPage({
    components: [LoginLink],
    html: `<lux-login-link agent="digid" label="My Custom Label" />`,
  });

  const { textContent }: HTMLElement = getTestableShadowElement(page, 'label');
  expect(textContent).toMatch('My Custom Label');
});

it('only emits a luxClick event when clicked', async () => {
  const page = await newSpecPage({
    components: [LoginLink],
    html: `<lux-login-link agent="digid" />`,
  });

  const clickHandler = jest.fn();
  const luxClickHandler = jest.fn();
  const loginLink = page.root;

  loginLink?.addEventListener('click', luxClickHandler);
  loginLink?.addEventListener('luxClick', luxClickHandler);

  loginLink?.click();

  expect(clickHandler).not.toHaveBeenCalled();
  expect(luxClickHandler).toHaveBeenCalled();
});
