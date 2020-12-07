import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import "../scss/flashcards-alt";


const FlashcardsData: React.FC<FlashcardsDataProps> = (props: FlashcardsDataProps) => {
  const dataCards = [
    {
      id: 1,
      question: "What is Data?",
      answer:
        "Data data data. Data data data.Data data data.Data data data.Data data data.Data data data.Data data",
    },
    {
      id: 2,
      question: "What is Analytics?",
      answer:
        "Analytics Analytics Analytics Analytics Analytics Analytics Analytics Analytics",
    },
    {
      id: 3,
      question: "What is statistics?",
      answer:
        "statistics statistics statistics statistics statistics statistics  statistics",
    },
  ];

  const [dataquestion, nextDataQuestion] = React.useState({} as any);

  const [indexData, changeDataIndex] = React.useState(0);

  const [dataAnswer, showDataAnswer] = React.useState(false);


  useEffect(() => {
    nextDataQuestion(dataCards[indexData]);
  }, [indexData]);

  const seeDataAnswer = () => {
    showDataAnswer(true);
  };


  const nextDataCard = () => {
    showDataAnswer(false);
    if (indexData >= dataCards.length - 1) {
      changeDataIndex(0);
    } else {
      changeDataIndex(indexData + 1);
    }
  };

  return (
    <main className="container-fluid text-midnight">
      <div className="row bg-white bottom-row">


        <div className="col-6">
          <div
            className={
              dataAnswer ? "card-front card-front-anim" : "card-front shadow"
            }
          >
            <div className="card text-center border-midnight shadow">
              <div className="card-header">Data Analytics</div>
              <div className="card-body">
                <div className="card-text-question text-center">
                  {dataquestion.question}
                </div>
              </div>
              <button
                onClick={seeDataAnswer}
                className="btn btn-midnight btn-sm"
              >
                See Answer
              </button>
            </div>
          </div>
          <div
            className={
              dataAnswer ? "card-back card-back-anim" : "card-back shadow"
            }
          >
            <div className="card text-center border-midnight">
              <div className="card-header">Data Analytics</div>
              <div className="card-body">
                <div className="card-text-answer text-center">
                  {dataquestion.answer}
                </div>
              </div>
              <button
                onClick={nextDataCard}
                className="btn btn-midnight btn-sm"
              >
                Next Flashcard
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface FlashcardsDataProps extends RouteComponentProps {}

export default FlashcardsData;
