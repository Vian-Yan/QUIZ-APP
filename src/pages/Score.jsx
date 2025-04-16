import React from 'react';

const Score = ({ score, setDisplay, setIndex }) => {
  const handleRiview = () => {
    setDisplay('riview');
    setIndex(0);
  };
  return (
    <>
      <div className="h-full relative w-full flex-col flex gap-10 sm:gap-30 items-center sm:p-10 border border-red-50 p-6 font-alfa-slab-one text-3xl ">
        <div className="text-white text-2xl text-center bg-copper p-2 rounded-lg animate-fade-in-up delay-300 transition-transform duration-200">
          {`Jawaban Benar: ${score.correct} / ${score.total}`}
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          <div className="text-2xl lg:text-6xl">Your Score</div>
          <div className=" rounded- text-center border w-40 h-40 rounded- text-pastelPink flex flex-col justify-evenly items-center rounded-[50%] animate-fade-in-up delay-300 transition-transform duration-200 lg:h-60 lg:w-60 lg:text-8xl text-6xl ">
            {Math.floor(score.percentage)}
          </div>
        </div>
        <div className="text-white text-xl sm:text-2xl text-center bg-copper p-2 rounded-lg animate-fade-in-up delay-300 transition-transform duration-200">
          {`Jawaban Salah: ${score.incorect}`}
        </div>
      </div>
      <div
        onClick={handleRiview}
        className="absolute  bottom-30 md:bottom-28 sm:bottom-26 right-0 flex justify-end w-full gap-4 p-4 items-center text-sm sm:text-3xl lg:bottom-4 "
      >
        <div className="border border-pastelPink p-2 fill-pastelPink rounded-2xl animate-fade-in-up delay-300 hover:fill-white cursor-pointer hover:scale-110 transition-transform duration-200">
          Riview
        </div>
      </div>
    </>
  );
};

export default Score;
