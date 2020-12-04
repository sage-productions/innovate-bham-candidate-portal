import React, { useState, useEffect } from "react";
import "../scss/flashcards-alt";
import text from "./utilities/types";

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

      <div className="text-center btn-container">
        <button
          className="btn m-2 btn-navy">
          Web Dev Flashcards
      </button>

        <button
          className="btn m-2 btn-navy">
          Data Analytics Flashcards
      </button>
      </div>

      <div className="background-cards col-12">

        <div className="container justify-content-center col-7">

          <div className="deck2">
            <div className="card text-center">
              <div className="card-header">Web Dev Flashcard
            </div>
              <div className="card-body"></div>
            </div>
          </div>

          <div className="deck1">
            <div className="card text-center">
              <div className="card-header">Web Dev Flashcard
            </div>
              <div className="card-body">
                <div className="card-text text-center">{question.question}</div>
              </div>

              <div className="card-body"></div>
            </div>
          </div>

          <div className="card-front">
            <div className="card text-center">
              <div className="card-header">Web Dev Flashcard
            <a className="rotate-btn"><i className="fas fa-redo-alt text-center text-muted float-right"></i></a>
              </div>
              <div className="card-body">
                <div className="card-text text-center">{question.question}</div>
              </div>
            </div>
          </div>

          <div className="card-back">
            <div className="card text-center">
              <div className="card-header">Web Dev Flashcard</div>
              <div className="card-body">
                <div className="card-text text-center">{question.answer}</div>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center btn-container-new-flashcard">
          <button
            onClick={nextCard} className="btn btn-outline-gold btn-sm">
            New Flashcard
      </button>
        </div>



      </div>
    </main>
  );
};

interface FlashcardsProps { }

export default Flashcards;
