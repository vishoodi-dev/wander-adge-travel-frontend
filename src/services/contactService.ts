import type { FormValues } from '../types/contactForm';

export async function submitContactForm(values: FormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Submitted values:', values);

  // real API example if needed in the future:
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(values),
  // });
  //
  // if (!response.ok) {
  //   throw new Error('Failed to submit contact form');
  // }
}