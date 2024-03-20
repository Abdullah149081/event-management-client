import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import DashBoardLayout from '@/components/layout/DashBoardLayout';
import DashBoard from '@/pages/Dashboard/DashBoard';
import DashboardEvent from '@/pages/Dashboard/eventDashboard/DashboardEvent';
import DashboardRecent from '@/pages/Dashboard/recentDashboard/DashboardRecent';
import DashboardServices from '@/pages/Dashboard/servicesDashboard/DashboardServices';
import Home from '@/pages/Home/Home';
import ErrorPage from '@/pages/errorPage/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: 'dashBoard-event',
        element: <DashboardEvent />,
      },
      {
        path: 'dashBoard-recent',
        element: <DashboardRecent />,
      },
      {
        path: 'dashBoard-services',
        element: <DashboardServices />,
      },
    ],
  },
]);

export default router;
