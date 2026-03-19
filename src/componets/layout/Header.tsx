import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";
import SocialMediaBtn from "./SocialMediaBtn";

export default function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 py-5">
          <div className="flex items-center justify-between gap-4">
            <SocialMediaBtn />
            <div className="text-center leading-none">
              <img className="h-16 sm:h-20 md:h-24 lg:h-28" src={logo} />
            </div>
            <div className="hidden w-40 items-center rounded-full border border-black/40 px-3 py-1.5 md:flex">
              <input
                type="text"
                aria-label="Search"
                className="w-full bg-transparent text-sm outline-none"
              />
              <FaSearch />
            </div>
          </div>

          <nav className="overflow-x-auto">
            <div className="flex justify-around min-w-max gap-7 pb-1 text-[15px] font-medium text-black/75">
              <a
                href="#home"
                className="border-b-2 border-[#7fbe6d] pb-1 text-[#5b9b4e]"
              >
                Home
              </a>
              <a href="#about" className="pb-1 transition hover:text-black">
                About
              </a>
              <a href="#solutions" className="pb-1 transition hover:text-black">
                Solutions
              </a>
              <a href="#get-started" className="pb-1 transition hover:text-black">
                Get Started
              </a>
              <a href="#research" className="pb-1 transition hover:text-black">
                Research
              </a>
              <a href="#reports" className="pb-1 transition hover:text-black">
                Reports
              </a>
              <a href="#branches" className="pb-1 transition hover:text-black">
                Branches
              </a>
              <a href="#faq" className="pb-1 transition hover:text-black">
                FAQ
              </a>
              <a href="#contact" className="pb-1 transition hover:text-black">
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}