import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactSection from './ContactSection';
import { vi } from 'vitest';

// 🔥 Mock child components (focus only on this component)
vi.mock('../../componets/layout/SocialMediaBtn', () => ({
  default: () => <div>SocialMedia</div>,
}));

vi.mock('../ConactDetailsSection', () => ({
  default: () => <div>ContactDetails</div>,
}));

vi.mock('../../componets/ui/FormField', () => ({
  default: ({ name, value, onChange, placeholder, error, ...rest }: any) => (
    <div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={name}
        {...rest}
      />
      {error && <span>{error}</span>}
    </div>
  ),
}));

// 🔥 Mock hook
const mockHandleChange = vi.fn();
const mockHandleSubmit = vi.fn();

vi.mock('../../hooks/useContactForm', () => ({
  useContactForm: () => ({
    values: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    errors: {},
    isSubmitting: false,
    submitMessage: '',
    handleChange: mockHandleChange,
    handleSubmit: mockHandleSubmit,
    nameRef: { current: null },
    emailRef: { current: null },
    phoneRef: { current: null },
    messageRef: { current: null },
  }),
}));

describe('ContactSection', () => {
  it('renders form fields', () => {
    render(<ContactSection />);

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contact Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
  });

  it('calls handleChange when typing', async () => {
    render(<ContactSection />);

    const nameInput = screen.getByPlaceholderText('Name');

    await userEvent.type(nameInput, 'John');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('disables button when submitting', () => {
    vi.mocked(mockHandleChange).mockClear();

    // override hook for this test
    vi.mock('../../hooks/useContactForm', () => ({
      useContactForm: () => ({
        values: {
          name: '',
          email: '',
          phone: '',
          message: '',
        },
        errors: {},
        isSubmitting: true,
        submitMessage: '',
        handleChange: mockHandleChange,
        handleSubmit: mockHandleSubmit,
        nameRef: { current: null },
        emailRef: { current: null },
        phoneRef: { current: null },
        messageRef: { current: null },
      }),
    }));

    render(<ContactSection />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Sending...');
  });

  
});
