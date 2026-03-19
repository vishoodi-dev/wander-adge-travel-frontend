import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import SocialMediaBtn from './SocialMediaBtn';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Get Started', path: '/get-started' },
  { label: 'Research', path: '/research' },
  { label: 'Reports', path: '/reports' },
  { label: 'Branches', path: '/branches' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

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

          <nav className="flex justify-around min-w-max gap-7 pb-1 text-[15px] font-medium text-black/75">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
