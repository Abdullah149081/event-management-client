import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/pages/shared/Navbar';
import Footer from '@/pages/shared/Footer';

function MainLayout() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default MainLayout;
