import React, { useState, useEffect } from "react";
import "../scss/flashcards-alt";
import FlashcardsData from "./FlashcardsData"


const FlashcardsDev: React.FC<FlashcardsDevProps> = (props: FlashcardsDevProps) => {
  const devCards = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
    },
    {
      id: 2,
      question: "What is Callback?",
      answer:
        "A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘.",
    },
    {
      id: 3,
      question: "What is NaN in JavaScript?",
      answer: "NaN is a short form of Not a Number.",
    },
  ];


  const [devquestion, nextDevQuestion] = React.useState({} as any);

  const [indexDev, changeDevIndex] = React.useState(0);

  const [devAnswer, showDevAnswer] = React.useState(false);


  useEffect(() => {
    nextDevQuestion(devCards[indexDev]);
  }, [indexDev]);


  const seeDevAnswer = () => {
    showDevAnswer(true);
  };


  const nextDevCard = () => {
    showDevAnswer(false);
    if (indexDev >= devCards.length - 1) {
      changeDevIndex(0);
    } else {
      changeDevIndex(indexDev + 1);
    }
  };


  return (
    <main className="container-fluid text-midnight">
      <div className="row bg-white bottom-row">
        

        <div className="col-6">
          <div
            className={
              devAnswer ? "card-front card-front-anim" : "card-front shadow"
            }
          >
            <div className="card text-center border-midnight shadow">
              <div className="card-header">Web Development</div>
              <div className="card-body">
                <div className="card-text-question text-center">
                  {devquestion.question}
                </div>
              </div>
              <button
                onClick={seeDevAnswer}
                className="btn btn-midnight btn-sm"
              >
                See Answer
              </button>
            </div>
          </div>

          <div
            className={
              devAnswer ? "card-back card-back-anim" : "card-back shadow"
            }
          >
            <div className="card text-center border-midnight">
              <div className="card-header">Web Development</div>
              <div className="card-body">
                <div className="card-text-answer text-center">
                  {devquestion.answer}
                </div>
              </div>
              <button onClick={nextDevCard} className="btn btn-midnight btn-sm">
                Next Flashcard
              </button>
            </div>
          </div>
        </div>

        <div className="col-6">
        <FlashcardsData />
        </div>

      </div>
    </main>
  );
};

interface FlashcardsDevProps {}

export default FlashcardsDev;
