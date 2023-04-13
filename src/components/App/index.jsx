import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';

export const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      {/* <Home /> */}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reservation',
    element: <Reservation /> 
  }
])
