import React from 'react';
import { questions } from '../data/data.js';

const Riview = ({ handleNext, handlePrev, answer, index, setDisplay }) => {
  return (
    <>
      <div className="relative p-10 font-alfa-slab-one h-full flex-col flex gap-5 w-full">
        <div className="flex text-white text-xl lg:text-4xl justify-center text-center">
          {`Questions ${index + 1} : ${questions[index].question}`}
        </div>

        <div className="text-lg lg:text-2xl lg:p-8  rounded-xl flex text-white p-2 bg-copper text-center mx-auto">
          {'Jawaban kamu: ' +
            (answer[index + 1]
              ? `${answer[index + 1]} . ${
                  questions[index].options[answer[index + 1]]
                }`
              : 'Tidak Menjawab')}
        </div>

        <div className="text-xl lg:text-xl mx-auto text-center  p-2 uppercase">
          {questions[index].answer === answer[index + 1] ? 'BENAR' : 'SALAH'}
        </div>
        <div className="text-lg lg:text-2xl lg:p-4  rounded-xl flex text-white p-2 bg-copper text-center mx-auto">
          Jawabannya adalah: {questions[index].answer} .{' '}
          {questions[index].options[questions[index].answer]}
        </div>
      </div>
      <div className="absolute bottom-14 sm:bottom-29 right-0 flex justify-end  w-full gap-4 p-4 items-center text-sm sm:text-3xl ">
        {index !== 0 && (
          <div
            onClick={handlePrev}
            className="border border-pastelPink p-2 fill-pastelPink rounded-2xl animate-fade-in-up delay-300 hover:fill-white cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            prev
          </div>
        )}
        {index !== questions.length - 1 ? (
          <div
            onClick={handleNext}
            className="border border-pastelPink p-2 fill-pastelPink rounded-2xl animate-fade-in-up delay-300 hover:fill-white cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            next
          </div>
        ) : (
          <div
            onClick={() => setDisplay('score')}
            className="border border-pastelPink p-2 fill-pastelPink rounded-2xl animate-fade-in-up delay-300 hover:fill-white cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            Score
          </div>
        )}
      </div>
    </>
  );
};

export default Riview;
