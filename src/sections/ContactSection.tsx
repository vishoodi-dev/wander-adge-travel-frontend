import SocialMediaBtn from '../componets/layout/SocialMediaBtn';
import logo from '../assets/logo.png';
import { useState, useRef } from 'react';
import ErrorMsg from '../componets/ui/ErrorMsg';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!values.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^(?:0|94|\+94)7[0-9]{8}$/.test(values.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }

    if (!values.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const focusFirstInvalidField = (validationErrors: FormErrors) => {
    if (validationErrors.name) {
      nameRef.current?.focus();
      return;
    }

    if (validationErrors.email) {
      emailRef.current?.focus();
      return;
    }

    if (validationErrors.phone) {
      phoneRef.current?.focus();
      return;
    }

    if (validationErrors.message) {
      messageRef.current?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage('');

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      focusFirstInvalidField(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      await fakeSubmit(values);

      setSubmitMessage('Your message has been sent successfully.');
      setValues(initialValues);
    } catch {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  async function fakeSubmit(values: FormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Submitted values:', values);
  }

  return (
    <section id="contact" className="bg-[#f4f4f4] mb-15">
      <div className="flex flex-col items-center justify-center gap-4 mb-5">
        <img className="h-16 sm:h-20 md:h-24 lg:h-28" src={logo} />
        <SocialMediaBtn />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:px-8">
        <div className="pt-2 text-black/80">
          <p className="max-w-xl text-[18px] leading-9 text-black/55 text-start">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div className="text-start">
              <h3 className="text-2xl font-semibold tracking-tight text-black/85">
                Contact Details
              </h3>
              <div className="mt-6 space-y-3 text-[18px] leading-8 text-black/70">
                <p>Lorem ipsum.</p>
                <p className="font-semibold text-black/85">Lorem@gmail.com</p>
                <p className="font-semibold text-black/85">+94 11 222 3333</p>
                <p className="font-semibold text-black/85">+94 11 222 3333</p>
                <p className="font-semibold text-black/85">+94 11 222 3333</p>
              </div>
            </div>

            <div className="text-start">
              <h3 className="text-2xl font-semibold tracking-tight text-black/85">Quick Links</h3>
              <div className="mt-6 space-y-3 text-[18px] leading-8 text-black/70">
                <a href="#home" className="block transition hover:text-black">
                  Home
                </a>
                <a href="#products" className="block transition hover:text-black">
                  Products
                </a>
                <a href="#about" className="block transition hover:text-black">
                  About Us
                </a>
                <a href="#contact" className="block transition hover:text-black">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-semibold tracking-tight text-black/85">Contact Us</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  ref={nameRef}
                  placeholder="Name"
                  className="h-14 rounded-xl border border-[#a8c1ad] bg-transparent px-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
                />
                <ErrorMsg errorMsg={errors.name} />
              </div>
              <div className="flex flex-col">
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  ref={emailRef}
                  placeholder="E-mail"
                  className="h-14 rounded-xl border border-[#a8c1ad] bg-transparent px-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
                />
                <ErrorMsg errorMsg={errors.email} />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-col">
                <input
                  name="phone"
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  ref={phoneRef}
                  placeholder="Contact Numberr"
                  className="h-14 w-full rounded-xl border border-[#a8c1ad] bg-transparent px-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
                />
                <ErrorMsg errorMsg={errors.phone} />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-col">
                <textarea
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  ref={messageRef}
                  placeholder="Message"
                  className="min-h-[150px] w-full rounded-2xl border border-[#a8c1ad] bg-transparent px-4 py-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
                />
                <ErrorMsg errorMsg={errors.message} />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="min-w-[170px] rounded-xl bg-[#52b84f] px-8 py-3 text-[20px] font-medium uppercase tracking-wide text-white transition hover:opacity-90"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
