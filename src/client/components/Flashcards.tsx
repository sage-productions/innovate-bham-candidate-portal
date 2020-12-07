// @ts-nocheck


import React, { useState, useEffect } from "react";
import "../scss/flashcards";
// import text from "./utilities/types";

const Flashcards: React.FC<FlashcardsProps> = (props) => {
  const sampleFlashcards = [
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
    {
      id: 4,
      question: "What are JavaScript Data Types?",
      answer: "Number, String, Boolean, Object, Undefined.",
    },
    {
      id: 5,
      question: "Which company developed JavaScript?",
      answer: "Netscape is the software company who developed JavaScript.",
    },
  ];

  const [question, nextQuestion] = React.useState({} as text);

  const [index, changeIndex] = React.useState(0);

  const [answer, showAnswer] = React.useState(false);

  useEffect(() => {
    nextQuestion(sampleFlashcards[index]);
  }, [index]);

  const seeAnswer = () => {
    showAnswer(true);
  };

  const nextCard = () => {
    console.log(index);
    showAnswer(false);
    if (index >= sampleFlashcards.length - 1) {
      changeIndex(0);
    } else {
      changeIndex(index + 1);
    }
  };

  return (
    <main className="container-fluid">
      <div className="row bg-navy bottom-row">
        <div className="col-12 text-center">
          <h2 className="text-gold text-center">Flashcards</h2>
        </div>
      </div>

      <div className="card-container col-5 mx-auto mt-5">
        <div className="col-5 text-center text-light pb-5"></div>
        <div className="card text-center border-gold mb-3 shadow">
          <div className="card-header">
            <h4 className="text-header text-midnight text-muted">Web Dev Flashcard</h4>
          </div>

          <div className="card-body text-navy">
            <h5 className="card-text text-center">
              {answer ? question.answer : question.question}
            </h5>
            <button
              onClick={seeAnswer}
              className="btn btn-sm m-2 btn-navy float-left"
            >
              See Answer
            </button>
            <button
              onClick={nextCard}
              className="btn btn-sm m-2 btn-gold float-right"
            >
              Next Card
            </button>
          </div>
        </div>

        <div className="col-5 text-center text-light pb-5"></div>
        <div className="card text-center border-gold mb-3 shadow">
          <div className="card-header">
            <h4 className="text-header text-midnight text-muted">Data Analytics Flashcard</h4>
          </div>

          <div className="card-body text-navy">
            <h5 className="card-text text-center">
              What is Data Analytics?
            </h5>
            <button
              className="btn btn-sm m-2 btn-navy float-left"
            >
              See Answer
            </button>
            <button
              className="btn btn-sm m-2 btn-gold float-right"
            >
              Next Card
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

interface FlashcardsProps {}

export default Flashcards;
