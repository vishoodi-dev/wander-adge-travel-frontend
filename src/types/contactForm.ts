export type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;