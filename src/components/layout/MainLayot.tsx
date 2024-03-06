import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/pages/shared/Navbar';

function MainLayout() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default MainLayout;
