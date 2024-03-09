import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import DashBoardLayout from '@/components/layout/DashBoardLayout';
import DashBoard from '@/pages/Dashboard/DashBoard';
import Home from '@/pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/dashBoard',
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashBoard/event" />,
      },
      {
        path: 'event',
        element: <DashBoard />,
      },
    ],
  },
]);

export default router;
