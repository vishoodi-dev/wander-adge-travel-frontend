import type { FormErrors, FormValues } from '../types/contactForm';

export const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SL_PHONE_REGEX = /^(?:0|94|\+94)7\d{8}$/;

export function validateContactForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone is required';
  } else if (!SL_PHONE_REGEX.test(values.phone)) {
    errors.phone = 'Enter a valid phone number';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
}