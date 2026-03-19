function ConactDetailsSection() {
  return (
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
  )
}

export default ConactDetailsSection
