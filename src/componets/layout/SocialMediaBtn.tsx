import { FaTwitter, FaYoutube, FaInstagramSquare, FaFacebookF } from 'react-icons/fa';

function SocialMediaBtn() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <a
        href="#"
        aria-label="Twitter"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white"
      >
        <FaTwitter />
      </a>
      <a
        href="#"
        aria-label="YouTube"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white"
      >
        <FaYoutube />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="#"
        aria-label="Facebook"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white"
      >
        <FaFacebookF />
      </a>
    </div>
  );
}

export default SocialMediaBtn;
