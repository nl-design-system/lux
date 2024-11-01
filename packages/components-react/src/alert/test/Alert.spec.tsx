import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { LuxHeading1, LuxParagraph } from '../../index';
import { LuxAlert } from '../Alert';

describe('Alert', () => {
  it('renders an info alert', () => {
    const { container } = render(
      <LuxAlert type="info">
        <LuxHeading1>Heading</LuxHeading1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus.
        </LuxParagraph>
      </LuxAlert>,
    );

    const alert = container.querySelector(':only-child');
    expect(alert).toBeInTheDocument();

    expect(alert).toHaveClass('utrecht-alert--info');
  });

  it('renders an success alert', () => {
    const { container } = render(
      <LuxAlert type="success">
        <LuxHeading1>Heading</LuxHeading1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus.
        </LuxParagraph>
      </LuxAlert>,
    );

    const alert = container.querySelector(':only-child');
    expect(alert).toBeInTheDocument();

    expect(alert).toHaveClass('utrecht-alert--ok');
  });

  it('renders an warning alert', () => {
    const { container } = render(
      <LuxAlert type="warning">
        <LuxHeading1>Heading</LuxHeading1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus.
        </LuxParagraph>
      </LuxAlert>,
    );

    const alert = container.querySelector(':only-child');
    expect(alert).toBeInTheDocument();

    expect(alert).toHaveClass('utrecht-alert--warning');
  });

  it('renders an error alert', () => {
    const { container } = render(
      <LuxAlert type="error">
        <LuxHeading1>Heading</LuxHeading1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus.
        </LuxParagraph>
      </LuxAlert>,
    );

    const alert = container.querySelector(':only-child');
    expect(alert).toBeInTheDocument();

    expect(alert).toHaveClass('utrecht-alert--error');
  });

  it('can have an additional class name', () => {
    const { container } = render(
      <LuxAlert type="info" className="eva-alert">
        <LuxHeading1>Heading</LuxHeading1>
        <LuxParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis massa lorem. Ut laoreet varius rhoncus.
        </LuxParagraph>
      </LuxAlert>,
    );

    const alert = container.querySelector(':only-child');

    expect(alert).toHaveClass('eva-alert');

    expect(alert).toHaveClass('lux-alert');
  });

  it('can have extra properties', () => {
    const { container } = render(
      <LuxAlert type="info" hidden={true}>
        Lux Section
      </LuxAlert>,
    );

    const alert = container.querySelector(':only-child');

    expect(alert).not.toBeVisible();
  });
});
