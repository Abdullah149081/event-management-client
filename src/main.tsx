import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import AuthProviders from './context/authProviders';
import './index.css';
import router from './routes/routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
