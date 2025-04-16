import React from 'react';

const Header = ({ display }) => {
  return (
    <div className="bg-header-footer w-full flex items-center px-20 py-2 text-english font-aclonica h-20 ">
      {display !== 'start' && <div className="text-5xl">quiz app</div>}
    </div>
  );
};

export default Header;
