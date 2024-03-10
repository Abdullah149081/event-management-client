import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';

const DashBoardLayout = () => {
  return (
    <div className="grid grid-cols-12 space-x-7 bg-gray-950 text-white ">
      <Sidebar />
      <div className="col-span-10 mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
