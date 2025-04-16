import React from 'react';

const Footer = ({ handleReset }) => {
  return (
    <div className="bg-header-footer w-full flex justify-between items-center p text-english font-aclonica px-8 py-2 border border-red-50 sm:px-14 sm:py-4">
      <div className="flex gap-6 items-center justify-center ">
        <svg
          className="bg-copper rounded-full fill-pastelPink cursor-pointer hover:scale-110 transition-transform duration-200 hover:fill-white h-10 w-10 sm:w-20 sm:h-20 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <g data-name="ask android app aplication phone">
            <path d="M16 31a15 15 0 1 1 15-15 15 15 0 0 1-15 15zm0-28a13 13 0 1 0 13 13A13 13 0 0 0 16 3z" />
            <path d="M16 22a1 1 0 0 1-1-1v-1.5a3.5 3.5 0 0 1 3.5-3.5 1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 18.5 8h-5A1.5 1.5 0 0 0 12 9.5V12a1 1 0 0 1-2 0V9.5A3.5 3.5 0 0 1 13.5 6h5A3.5 3.5 0 0 1 22 9.5v5a3.5 3.5 0 0 1-3.5 3.5 1.5 1.5 0 0 0-1.5 1.5V21a1 1 0 0 1-1 1z" />
            <circle cx="16" cy="25" r="1" />
          </g>
        </svg>
        <svg
          onClick={handleReset}
          className="bg-copper rounded-full fill-pastelPink cursor-pointer hover:scale-110 transition-transform duration-200 hover:fill-white h-10 w-10  sm:w-20 sm:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="31.Home">
            <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
            <path d="M18.293 13.707 12 7.414l-6.293 6.293-1.414-1.414L12 4.586l7.707 7.707-1.414 1.414z" />
            <path d="M17 18H7v-8h2v6h6v-6h2v8z" />
          </g>
        </svg>
      </div>
      <div className="text-xl font-alfa-slab-one sm:text-4xl">
        created by: vian
      </div>
    </div>
  );
};

export default Footer;
