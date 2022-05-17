import React from 'react';

const HeaderHamburger = ({ show, setShow }) => {
  return (
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
  );
};

export default HeaderHamburger;
