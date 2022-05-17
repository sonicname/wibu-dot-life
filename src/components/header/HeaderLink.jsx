import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({
  className = 'text-2xl font-bold hover:opacity-70 p-3',
  to = '/',
  children
}) => {
  return (
    <NavLink className={className} to={to}>
      {children}
    </NavLink>
  );
};

export default HeaderLink;
