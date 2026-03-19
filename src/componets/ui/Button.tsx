import { IoIosArrowDroprightCircle } from 'react-icons/io';

type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return (
    <button className="mt-8 inline-flex items-center gap-4 bg-white px-5 py-3 text-sm font-medium uppercase tracking-wide text-[#567e54] shadow-sm transition hover:bg-[#f7f7f7] sm:px-6">
      <span>{text}</span>
      <IoIosArrowDroprightCircle size={30} />
    </button>
  );
}

export default Button;
