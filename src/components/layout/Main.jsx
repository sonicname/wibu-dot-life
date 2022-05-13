import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './index';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
