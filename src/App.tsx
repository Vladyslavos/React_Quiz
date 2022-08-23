import React from "react";
import "./index.scss";
import { questions } from "./question";

function Result({ correct }: any) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/4746/4746956.png" />
      <h2>
        You guessed {correct} answers from {questions.length}
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ question, onHandleClick, step }: any) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((el: string, index: number) => (
          <li key={el} onClick={() => onHandleClick(index)}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}

const App: React.FC = () => {
  const [step, setStep] = React.useState<number>(0);
  const question = questions[step];
  const onHandleClick = (index: number) => {
    setStep(step + 1);
    console.log(step, index);
    {
      index === question.correct ? setCorrect(correct + 1) : console.log(null);
    }
  };
  const [correct, setCorrect] = React.useState<number>(0);
  return (
    <div className="App">
      {step != questions.length ? (
        <Game question={question} onHandleClick={onHandleClick} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default App;
