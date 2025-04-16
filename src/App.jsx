import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Start from './pages/Start';
import Questions from './pages/Questions';
import Score from './pages/Score';
import Riview from './pages/Riview';

function App() {
  const [display, setDisplay] = useState('start');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState({});

  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const handlePrev = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  const handleReset = () => {
    setDisplay('start');
    setIndex(0);
    setAnswers({});
    setScore({});
  };

  return (
    <>
      <div className="h-screen text-pastelPink bg-charcoal font-aclonica flex flex-col">
        <Header display={display} />
        <div className="w-full bg-charcoal flex-1">
          {display === 'start' && <Start setDisplay={setDisplay} />}
          {display === 'questions' && (
            <Questions
              index={index}
              handleNext={handleNext}
              handlePrev={handlePrev}
              answer={answers}
              setAnswers={setAnswers}
              setDisplay={setDisplay}
              score={score}
              setScore={setScore}
            />
          )}
          {display === 'score' && (
            <Score score={score} setDisplay={setDisplay} setIndex={setIndex} />
          )}
          <div className="w-full bg-charcoal flex-1">
            {display === 'riview' && (
              <Riview
                handleNext={handleNext}
                handlePrev={handlePrev}
                answer={answers}
                index={index}
                setIndex={setIndex}
                setAnswers={setAnswers}
                setScore={setScore}
                setDisplay={setDisplay}
              />
            )}
          </div>
        </div>

        <Footer handleReset={handleReset} />
      </div>
    </>
  );
}

export default App;
