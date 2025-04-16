import React from 'react';

const Header = ({ display }) => {
  return (
    <div className="bg-header-footer w-full flex items-center px-10 py-4 text-english font-aclonica ">
      {display !== 'start' && <div className="text-5xl">quiz app</div>}
    </div>
  );
};

export default Header;
