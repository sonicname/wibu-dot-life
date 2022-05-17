import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLink from '../header/HeaderLink';
import { headerLinkConfig } from '../header/HeaderLinkConfig';
import HeaderHamburger from '../header/HeaderHamburger';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="w-full select-none">
      <div className="container flex items-center justify-between relative z-10 p-3">
        <HeaderLink>Wibu.Life</HeaderLink>

        <HeaderHamburger show={show} setShow={setShow} />

        <ul
          className={`absolute top-full left-full w-full text-center pt-4 duration-300 flex flex-col gap-y-10 p-3 ${
            show && '!left-0'
          } lg:static lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-x-5 lg:p-0`}>
          {headerLinkConfig.map((item) => (
            <li key={item.id} className="lg:mb-0">
              <HeaderLink to={item.to} className={'font-semibold text-xl p-3 hover:opacity-70'}>
                {item.title}
              </HeaderLink>
            </li>
          ))}
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
