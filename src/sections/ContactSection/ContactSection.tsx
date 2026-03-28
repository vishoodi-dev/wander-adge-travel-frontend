import SocialMediaBtn from '../../componets/layout/SocialMediaBtn';
import logo from '../../assets/logo.png';
import ConactDetailsSection from '../ConactDetailsSection';
import { useContactForm } from '../../hooks/useContactForm';
import FormField from '../../componets/ui/FormField';
import { styles } from './ContactSection.styles';

const INPUT_STYLES = styles.input_styles;

const TEXTAREA_STYLES = styles.textarea_styles;

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
    <section className={styles.container}>
      <div className={styles.social_media_container}>
        <img className={styles.logo} src={logo} />
        <SocialMediaBtn />
      </div>
      <div className={styles.contact_form_container}>
        <ConactDetailsSection />
        <div>
          <h2 className={styles.title}>Contact Us</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className={styles.input_group}>
               <FormField
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                ref={nameRef}
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
                ref={emailRef}
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
                ref={phoneRef}
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
                ref={messageRef}
                placeholder="Message"
                error={errors.message}
                className={TEXTAREA_STYLES}
                rows={5}
              />
            </div>

            
            {submitMessage && (
              <p className={styles.submit_message} role="status">
                {submitMessage}
              </p>
            )}

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submit_bt}
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
