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


            <div className="card-container mx-auto mt-5">
                <div className="card card-front shadow">
                    <div className="card-border-gold">
                        <div className="card-header">Front</div>


                    </div>
                </div>

                <div className="card card-back shadow">
                    <div className="card-border-gold">
                        <div className="card-header">Back</div>
                    </div>
                </div>
            </div>



        </main>
    );
};

interface FlashcardsProps { }

export default Flashcards;
