import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/pages/shared/Navbar';

function MainLayout() {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default MainLayout;
