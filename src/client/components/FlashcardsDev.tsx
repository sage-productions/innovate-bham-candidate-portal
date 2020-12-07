// @ts-nocheck

import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../scss/flashcards-alt";


const FlashcardsDev: React.FC<FlashcardsDevProps> = (props: FlashcardsDevProps) => {
  const [devCards, setDevCards] = React.useState({
    id: null,
    question: "",
    answer: "",
});

  const [devQuestion, nextDevQuestion] = React.useState({} as any);

  const [indexDev, changeDevIndex] = React.useState(0);

  const [devAnswer, showDevAnswer] = React.useState(false);

 useEffect(() => {
    (async () => {
        let data = await fetch('https://quiet-basin-68498.herokuapp.com/routes/api/devflashcards');
        console.log(data);
        let devCards = await data.json();
        setDevCards(devCards);
    })();
}, [])


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
        

        <div className="col-12">
          <div
            className={
              devAnswer ? "card-front card-front-anim" : "card-front shadow"
            }
          >
            <div className="card text-center border-midnight shadow">
              <div className="card-header">Web Development</div>
              <div className="card-body">
                <div className="card-text-question text-center">
                  {devQuestion?.question}
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
                  {devQuestion?.answer}
                </div>
              </div>
              <button onClick={nextDevCard} className="btn btn-midnight btn-sm">
                Next Flashcard
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

interface FlashcardsDevProps extends RouteComponentProps {}

export default FlashcardsDev;