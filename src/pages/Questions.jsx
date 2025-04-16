import React from 'react';
import { questions } from '../data/data.js';

const Questions = ({
  index,
  handleNext,
  handlePrev,
  answer,
  setAnswers,
  setDisplay,
  setScore,
}) => {
  const handleAnswer = (key, index) => {
    setAnswers((prev) => ({ ...prev, [index + 1]: key }));
  };

  const handleFinish = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.answer === answer[index + 1]) {
        score++;
      }
    });
    setScore({
      correct: score,
      total: questions.length,
      percentage: (score / questions.length) * 100,
      incorect: questions.length - score,
    });
    setDisplay('score');
  };

  return (
    <div className="h-full relative p-8 font-alfa-slab-one text-3xl flex-col flex gap-10 items-center ">
      <div className="flex text-white text-xl justify-center text-center sm:text-3xl">
        {`Questions ${index + 1} : ${questions[index].question}`}
      </div>
      <div className="grid grid-cols-2 gap-y-4 gap-x-10  sm:gap-x-20 sm:gap-y-10  py-8 sm:w-3xl ">
        {Object.entries(questions[index].options).map(([key, value]) => {
          // console.log(key, value);

          return (
            <div
              onClick={() => handleAnswer(key, index)}
              key={key}
              className={`bg-copper text-white p-2 rounded-lg text-center cursor-pointer transition duration-100 text-sm  animate-fade-in-up  wrap-break-word border-4 hover:bg-charcoal hover:border-white  border-transparent sm:text-xl  
              ${answer[index + 1] === key ? 'bg-pastelPink border-white' : ''} 
              hover:bg-charcoal transition`}
            >
              {`${key}: ${value}`}
            </div>
          );
        })}
      </div>
      <div className="absolute  bottom-0 right-0 flex justify-end  w-full gap-4 p-4 items-center text-sm sm:text-3xl">
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
            onClick={handleFinish}
            className="border border-pastelPink p-2 fill-pastelPink rounded-2xl animate-fade-in-up delay-300 hover:fill-white cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            finnish
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
