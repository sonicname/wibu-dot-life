import React from 'react';

const Footer = () => {
  return (
    <div className="p-3 w-full">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl font-semibold">Wibu dot life</h1>
          <div>
            <p>©2022 Wibu.life</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h1 className="font-semibold text-2xl text-right">Contact</h1>
          <div className="flex gap-x-3 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>

            <p>Phamanhduc2k2@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
