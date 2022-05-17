import React from 'react';
import { NavLink } from 'react-router-dom';

const MangaPage = () => {
  return (
    <div className="container">
      <div className="">
        <h2 className="font-semibold text-xl">Truyện Đề Cử</h2>
        <div className="grid grid-cols-4 mt-4 gap-5">
          <div className="h-[350px] relative group">
            <img
              src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-cyan-600 flex items-center justify-center opacity-0 duration-300 invisible group-hover:opacity-100 group-hover:visible">
              <NavLink to={'/'}>
                <h3 className="font-bold text-2xl">Spy x Family (2022)</h3>
              </NavLink>
            </div>
          </div>

          <div className="h-[350px] relative group">
            <img
              src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-cyan-600 flex items-center justify-center opacity-0 duration-300 invisible group-hover:opacity-100 group-hover:visible">
              <NavLink to={'/'}>
                <h3 className="font-bold text-2xl">Spy x Family (2022)</h3>
              </NavLink>
            </div>
          </div>

          <div className="h-[350px] relative group">
            <img
              src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-cyan-600 flex items-center justify-center opacity-0 duration-300 invisible group-hover:opacity-100 group-hover:visible">
              <NavLink to={'/'}>
                <h3 className="font-bold text-2xl">Spy x Family (2022)</h3>
              </NavLink>
            </div>
          </div>

          <div className="h-[350px] relative group">
            <img
              src="https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-cyan-600 flex items-center justify-center opacity-0 duration-300 invisible group-hover:opacity-100 group-hover:visible">
              <NavLink to={'/'}>
                <h3 className="font-bold text-2xl">Spy x Family (2022)</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaPage;
