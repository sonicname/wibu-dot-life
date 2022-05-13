import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="bg-slate-900 text-white shadow-md w-full">
      <div className="container flex items-center justify-between p-3 relative z-10 bg-slate-900">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `text-2xl font-bold p-3 rounded-lg ${isActive && 'bg-green-500'}`
          }>
          Wibu.life
        </NavLink>

        <div
          className="flex flex-col items-center justify-between gap-y-2 w-[40px] h-8 lg:hidden"
          onClick={() => setShow(!show)}>
          <span
            className={`inline-block w-full h-[4px] bg-white rounded transition-all ${
              show && 'rotate-45 translate-y-[14px]'
            }`}
          />
          <span
            className={`inline-block w-full h-[4px] bg-white rounded transition-all ${
              show && 'scale-0'
            }`}
          />
          <span
            className={`inline-block w-full h-[4px] bg-white rounded transition-all ${
              show && '-rotate-45 -translate-y-[14px]'
            }`}
          />
        </div>

        <ul
          className={`absolute top-full left-full w-full bg-slate-900 text-center pt-4 transition-all flex flex-col gap-y-10 p-3 ${
            show && '!left-0'
          } lg:static lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-x-5 lg:p-0`}>
          <li className="font-semibold text-xl mb-3 hover:opacity-70 lg:mb-0">
            <NavLink
              to={'/manga'}
              className={({ isActive }) => `px-3 py-4 rounded-lg ${isActive && 'bg-green-500'}`}>
              Truyện
            </NavLink>
          </li>

          <li className="font-semibold text-xl mb-3 hover:opacity-70 lg:mb-0">
            <NavLink
              to={'/genre'}
              className={({ isActive }) => `px-3 py-4 rounded-lg ${isActive && 'bg-green-500'}`}>
              Thể loại
            </NavLink>
          </li>

          <li className="font-semibold text-xl mb-3 hover:opacity-70 lg:mb-0">
            <NavLink
              to={'/search'}
              className={({ isActive }) => `px-3 py-4 rounded-lg ${isActive && 'bg-green-500'}`}>
              Tìm kiếm
            </NavLink>
          </li>
        </ul>
      </div>

      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 lg:hidden"
          onClick={() => setShow(false)}
        />
      )}
    </header>
  );
};

export default Header;
