import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { LuxSelectOption } from '../../select/Select';
import { LuxFormFieldSelect } from '../FormFieldSelect';

const selectOptions = [
  <LuxSelectOption key={1} value={'Manager'} data-testid="option-manager">
    Manager
  </LuxSelectOption>,
  <LuxSelectOption key={2} value={'Developer'}>
    Developer
  </LuxSelectOption>,
];

describe('Form Field Textbox', () => {
  it('renders a basic form field select with label and input', () => {
    render(<LuxFormFieldSelect label="Job Title">{selectOptions}</LuxFormFieldSelect>);

    expect(screen.getByText('Job Title')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('applies the base class', () => {
    render(<LuxFormFieldSelect label="Job Title">{selectOptions}</LuxFormFieldSelect>);

    const formField = screen.getByText('Job Title').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
  });

  it('can have an additional class name', () => {
    render(
      <LuxFormFieldSelect label="Job Title" className="custom-class">
        {selectOptions}
      </LuxFormFieldSelect>,
    );

    const formField = screen.getByText('Job Title').closest('.utrecht-form-field');
    expect(formField).toHaveClass('utrecht-form-field');
    expect(formField).toHaveClass('custom-class');
  });

  it('renders description when provided', () => {
    render(
      <LuxFormFieldSelect label="Job Title" description="Select your job title">
        {selectOptions}
      </LuxFormFieldSelect>,
    );

    expect(screen.getByText('Select your job title')).toBeInTheDocument();
  });

  it('renders error message when invalid and error message provided', () => {
    render(
      <LuxFormFieldSelect label="Job Title" invalid={true} errorMessage="Job Title is required">
        {selectOptions}
      </LuxFormFieldSelect>,
    );

    expect(screen.getByText('Job Title is required')).toBeInTheDocument();
  });

  it('adds the correct attributes to the Select', () => {
    const onBlurMock = jest.fn();
    const onChangeMock = jest.fn();
    const onFocusMock = jest.fn();
    const onInputMock = jest.fn();
    render(
      <LuxFormFieldSelect
        label="Job Title"
        busy
        disabled
        name="JobTitleSelect"
        required
        onBlur={onBlurMock}
        onChange={onChangeMock}
        onFocus={onFocusMock}
        onInput={onInputMock}
        size={2}
      >
        {selectOptions}
      </LuxFormFieldSelect>,
    );

    const select = screen.getByRole('listbox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('aria-busy', 'true');
    expect(select).not.toHaveAttribute('busy');
    expect(select).toHaveAttribute('disabled');
    expect(select).toHaveAttribute('name', 'JobTitleSelect');
    expect(select).toHaveAttribute('aria-required', 'true');
    expect(select).not.toHaveAttribute('required');
    expect(select).toHaveAttribute('size', '2');

    fireEvent.focusIn(select);
    expect(onFocusMock).toHaveBeenCalledTimes(1);

    fireEvent.focusOut(select);
    expect(onBlurMock).toHaveBeenCalledTimes(1);

    fireEvent.change(select, { target: { value: 'Manager' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
