import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';

const Navbar = () => {
  const [state, setState] = useState(false);

  const menus = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact ', path: '/contact' },
  ];
  return (
    <nav className=" relative  z-10  w-full border-b md:border-0">
      <Container className=" items-center justify-between px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link to="/">
            <h1 className="text-3xl font-bold  ">
              <span>Event</span>
              <span className="ml-3 font-extrabold text-[#3461FF]">300</span>
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`mt-8  pb-3 md:mt-0 md:block md:pb-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="font-medium text-gray-600 hover:text-indigo-600"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
