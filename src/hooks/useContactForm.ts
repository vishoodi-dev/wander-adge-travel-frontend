import { useRef, useState, type ChangeEvent, type FormEvent, type RefObject } from 'react';
import { submitContactForm } from '../services/contactService';
import type { FormErrors, FormValues } from '../types/contactForm';
import { INITIAL_VALUES, validateContactForm } from '../utils/contactFormValidation';

type FieldRef = HTMLInputElement | HTMLTextAreaElement;

export function useContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefs: Record<keyof FormValues, RefObject<FieldRef | null>> = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    message: messageRef,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const focusFirstInvalidField = (validationErrors: FormErrors) => {
    const fieldOrder: (keyof FormValues)[] = ['name', 'email', 'phone', 'message'];

    const firstInvalidField = fieldOrder.find((field) => validationErrors[field]);

    if (firstInvalidField) {
      fieldRefs[firstInvalidField].current?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage('');

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      focusFirstInvalidField(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await submitContactForm(values);

      setValues(INITIAL_VALUES);
      setErrors({});
      setSubmitMessage('Your message has been sent successfully.');
    } catch {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    submitMessage,
    handleChange,
    handleSubmit,
    nameRef,
    emailRef,
    phoneRef,
    messageRef,
  };
}