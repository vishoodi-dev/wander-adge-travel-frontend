import SocialMediaBtn from '../componets/layout/SocialMediaBtn';
import logo from '../assets/logo.png';
import ConactDetailsSection from './ConactDetailsSection';
import { useContactForm } from '../hooks/useContactForm';
import FormField from '../componets/ui/FormField';

const INPUT_STYLES ='h-14 w-full rounded-xl border border-[#a8c1ad] bg-transparent px-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]';

const TEXTAREA_STYLES ='min-h-[150px] w-full rounded-2xl border border-[#a8c1ad] bg-transparent px-4 py-4 text-[18px]';

function ContactSection() {
  const {
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
  } = useContactForm();

  return (
    <section id="contact" className="bg-[#f4f4f4] pb-10">
      <div className="flex flex-col items-center justify-center gap-4 mb-5">
        <img className="h-16 sm:h-20 md:h-24 lg:h-28" src={logo} />
        <SocialMediaBtn />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:px-8">
        <ConactDetailsSection />
        <div>
          <h2 className="text-5xl font-semibold tracking-tight text-black/85 text-start">Contact Us</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
               <FormField
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                inputRef={nameRef}
                placeholder="Name"
                error={errors.name}
                className={INPUT_STYLES}
              />

              <FormField
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                inputRef={emailRef}
                placeholder="E-mail"
                error={errors.email}
                className={INPUT_STYLES}
              />
            </div>

            <div className="mt-4">
               <FormField
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                inputRef={phoneRef}
                placeholder="Contact Number"
                error={errors.phone}
                className={INPUT_STYLES}
              />
            </div>

            <div className="mt-4">
               <FormField
                as="textarea"
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                inputRef={messageRef}
                placeholder="Message"
                error={errors.message}
                className={TEXTAREA_STYLES}
                rows={5}
              />
            </div>

            
            {submitMessage && (
              <p className="mt-4 text-sm text-black/70" role="status">
                {submitMessage}
              </p>
            )}

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[170px] rounded-xl bg-[#52b84f] px-8 py-3 text-[20px] font-medium uppercase tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
