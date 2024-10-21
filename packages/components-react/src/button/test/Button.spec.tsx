import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { LuxButton } from '../Button';

//TODO replace icon in #308
const ExampleIcon = (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg">
    <circle r="6" cx="7" cy="7" fill="white" stroke="green" />
  </svg>
);

describe('Button', () => {
  it('renders a button', () => {
    render(<LuxButton label="LUX Button" />);

    const button = screen.getByRole('button', {
      name: 'LUX Button',
    });
    expect(button).toBeInTheDocument();
  });
  it('renders a small button', () => {
    render(<LuxButton label="LUX Button" size="small" />);

    const button = screen.getByRole('button', {
      name: 'LUX Button',
    });

    expect(button).toHaveClass('lux-button--small');
  });

  it('renders a button with a start icon', () => {
    render(<LuxButton label="LUX Button" icon={ExampleIcon} iconPosition="start" />);

    const button = screen.getByRole('button', {
      name: 'LUX Button',
    });

    expect(button.children[0].getAttribute('class')).toEqual('lux-button-icon--start');
  });

  it('renders a button with an end icon', () => {
    render(<LuxButton label="LUX Button" icon={ExampleIcon} iconPosition="end" />);

    const button = screen.getByRole('button', {
      name: 'LUX Button',
    });

    expect(button.children[0].getAttribute('class')).toEqual('lux-button-icon--end');
  });
});
