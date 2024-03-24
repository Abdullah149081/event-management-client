import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import DashBoardLayout from '@/components/layout/DashBoardLayout';
import DashBoard from '@/pages/Dashboard/DashBoard';
import DashboardEvent from '@/pages/Dashboard/eventDashboard/DashboardEvent';
import DashboardRecent from '@/pages/Dashboard/recentDashboard/DashboardRecent';
import DashboardServices from '@/pages/Dashboard/servicesDashboard/DashboardServices';
import Home from '@/pages/Home/Home';
import AboutUsPage from '@/pages/about/aboutUsPage';
import ContactUsPage from '@/pages/contact/contactUsPage';
import ErrorPage from '@/pages/errorPage/error';
import Login from '@/pages/login/login';
import PrivateRoutes from './privateRoute';

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
      {
        path: 'about',
        element: <AboutUsPage />,
      },
      {
        path: 'contact',
        element: <ContactUsPage />,
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
        element: (
          <PrivateRoutes>
            <DashboardEvent />
          </PrivateRoutes>
        ),
      },
      {
        path: 'dashBoard-recent',
        element: (
          <PrivateRoutes>
            <DashboardRecent />
          </PrivateRoutes>
        ),
      },
      {
        path: 'dashBoard-services',
        element: (
          <PrivateRoutes>
            <DashboardServices />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
