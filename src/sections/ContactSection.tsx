import SocialMediaBtn from '../componets/layout/SocialMediaBtn';
import logo from '../assets/logo.png';

function ContactSection() {
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

          <form className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="h-14 rounded-xl border border-[#a8c1ad] bg-transparent px-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
              />
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                className="h-14 rounded-xl border border-[#a8c1ad] bg-transparent px-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
              />
            </div>

            <div className="mt-4">
              <input
                id="phone"
                type="text"
                placeholder="Contact Numberr"
                className="h-14 w-full rounded-xl border border-[#a8c1ad] bg-transparent px-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
              />
            </div>

            <div className="mt-4">
              <textarea
                id="message"
                rows={5}
                placeholder="Message"
                className="min-h-[150px] w-full rounded-2xl border border-[#a8c1ad] bg-transparent px-4 py-4 text-[18px] outline-none placeholder:text-black/55 focus:border-[#6a9a72]"
              />
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
