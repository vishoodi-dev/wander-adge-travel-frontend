import { forwardRef, type ChangeEvent } from 'react';
import ErrorMsg from './ErrorMsg';

type BaseProps = {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className: string;
};

type InputFieldProps = BaseProps & {
  as?: 'input';
  type?: string;
};

type TextareaFieldProps = BaseProps & {
  as: 'textarea';
  rows?: number;
};

type FormFieldProps = InputFieldProps | TextareaFieldProps;

const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  (props, ref) => {
    const { id, name, value, placeholder, error, onChange, className } = props;
    const errorId = `${id}-error`;

    return (
      <div>
        {props.as === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={props.rows ?? 5}
            placeholder={placeholder}
            className={className}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={props.type ?? 'text'}
            value={value}
            onChange={onChange}
            ref={ref as React.Ref<HTMLInputElement>}
            placeholder={placeholder}
            className={className}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
          />
        )}

        <ErrorMsg id={errorId} errorMsg={error} />
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export default FormField;