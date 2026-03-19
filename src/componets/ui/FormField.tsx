import type { ChangeEvent, RefObject } from 'react';
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
  inputRef?: RefObject<HTMLInputElement | null>;
};

type TextareaFieldProps = BaseProps & {
  as: 'textarea';
  rows?: number;
  inputRef?: RefObject<HTMLTextAreaElement | null>;
};

type FormFieldProps = InputFieldProps | TextareaFieldProps;

function FormField(props: FormFieldProps) {
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
          ref={props.inputRef}
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
          ref={props.inputRef}
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

export default FormField;