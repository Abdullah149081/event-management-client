import {
  Calendar,
  CalendarDays,
  HandPlatter,
  Home,
  LayoutDashboard,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const navAdmin = [
    {
      name: 'Dashboard',
      path: '/dashBoard/event',
      icon: LayoutDashboard,
    },

    {
      name: 'Event',
      path: '/dashBoard/dashBoard-event',
      icon: Calendar,
    },
    {
      name: 'Recent Event',
      path: '/dashBoard/dashBoard-recent',
      icon: CalendarDays,
    },
    {
      name: 'Services',
      path: '/dashBoard/dashBoard-services',
      icon: HandPlatter,
    },
    {
      name: 'Home',
      path: '/',
      icon: Home,
    },
  ];

  return (
    <aside className=" no-scrollbar sticky left-0 top-0 col-span-2 h-screen overflow-y-scroll bg-gradient-to-t from-gray-700/20 from-25% to-cyan-700/20 to-80%  text-white shadow-2xl">
      <nav>
        <ul className="mt-4">
          {navAdmin.map((item) => (
            <li className="p-3" key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center rounded-md  p-2 text-lg font-bold uppercase  text-primary-foreground transition-all hover:bg-fuchsia-500/60 hover:text-white',
                    {
                      'bg-fuchsia-400/20 text-white': isActive,
                    }
                  )
                }
              >
                {item.icon && (
                  <span>
                    <item.icon />
                  </span>
                )}
                <span className="ml-3 truncate">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
