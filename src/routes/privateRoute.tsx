import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '@/components/ui/loading';
import { AuthContext } from '@/context/authProviders';

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext) || {};

  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
