import {
  LuxFormField,
  LuxFormFieldDescription,
  LuxFormFieldErrorMessage,
  LuxFormFieldLabel,
  type LuxFormFieldLabelProps,
  LuxParagraph,
} from '@lux-design-system/components-react';

type FormFieldTypeProps = {
  type?: 'text' | 'checkbox' | 'radio';
  invalid?: boolean;
  show?: {
    description?: boolean;
    extra?: boolean;
  };
};

export const FormFieldType = ({
  type = 'text',
  invalid = false,
  show = { description: true, extra: false },
}: FormFieldTypeProps) => {
  const Input = ({ type }: any) => {
    switch (type) {
      case 'checkbox':
        return (
          <input
            type={type}
            defaultChecked
            style={{ appearance: 'none', width: '1rem', height: '1rem', border: '1px dotted grey' }}
          />
        );

      case 'radio':
        return (
          <input
            type={type}
            defaultChecked
            style={{
              appearance: 'none',
              width: '1rem',
              height: '1rem',
              border: '1px dotted grey',
              borderRadius: '50%',
            }}
          />
        );

      default:
        return (
          <input
            type={type}
            defaultValue={`Input type=${type}`}
            style={{
              appearance: 'none',
              border: '1px dotted grey',
              backgroundColor: 'transparent',
              color: 'var(--utrecht-document-color)',
            }}
          />
        );
    }
  };

  return (
    <LuxFormField
      type={type}
      label={<LuxFormFieldLabel type={type as LuxFormFieldLabelProps['type']}>{`Label`}</LuxFormFieldLabel>}
      description={
        show.description ? (
          <LuxFormFieldDescription>
            <LuxParagraph>{`Description`}</LuxParagraph>
          </LuxFormFieldDescription>
        ) : null
      }
      errorMessage={invalid ? <LuxFormFieldErrorMessage>{`Error Message`}</LuxFormFieldErrorMessage> : null}
      input={<Input type={type} />}
      invalid={invalid}
    >
      {show.extra ? <LuxParagraph>{`Extra content`}</LuxParagraph> : null}
    </LuxFormField>
  );
};
