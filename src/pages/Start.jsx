import React from 'react';

const Start = ({ setDisplay }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full font-alfa-slab-one ">
      <div className="text-english text-6xl mb-6 font-aclonica">Quiz App</div>

      <button
        onClick={() => setDisplay('questions')}
        className="bg-copper rounded-4xl fill-pastelPink cursor-pointer hover:scale-110 transition-transform duration-200 hover:fill-white p-4 text-4xl border border-pastelPink"
      >
        START
      </button>
      <div className="wrap-break-word text-center">
        KAMU ADALAH BENTUK KEGAGALAN DUNIA
        <br />
        KAMU TERLUKA,KAMU SELALU GAGAL DALAM HAL APAPUN
      </div>
    </div>
  );
};

export default Start;
