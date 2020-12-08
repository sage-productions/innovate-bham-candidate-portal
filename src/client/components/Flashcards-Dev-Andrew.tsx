// @ts-nocheck

import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import "../scss/flashcards-dev-andrew";



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
      }, [indexDev, devCards.id]);
    
    
      const seeDevAnswer = () => {
        showDevAnswer(true);
      };
    

      const showDevQuestion = () => {
        showDevAnswer(!showDevAnswer);
      }
    
        
      const nextDevCard = () => {
        showDevAnswer(false);
        if (indexDev >= devCards.length - 1) {
          changeDevIndex(0);
        } else {
          changeDevIndex(indexDev + 1);
        }
      };


      const prevDevCard = () => {
        showDevAnswer(false);
        changeDevIndex(indexDev - 1);
        if (indexDev == 0) {
          changeDevIndex(devCards.length - 1);
        }
      }


    return (

        <main className="container-fluid text-midnight">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Flashcards</h2>
                </div>
            </div>


            <div className="row d-flex justify-content-center text-white">
                <Link to="/flashcards-data">
                    <button className="btn btn-midnight mt-2 mb-5">
                        Switch to Data Cards
                    </button>
                </Link>
            </div>
            
            <div className="row dev-bottom-row">
        
                <div className="col-12">

                    <div className={ devAnswer ? "card-front card-front-anim" : "card-front shadow" }>

                        <div className="card text-center border-midnight shadow">

                            <div className="card-header">
                                Web Development
                                <div className="float-right" onClick={showDevAnswer}>
                                    <i className="fas fa-reply"></i>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="card-text-question text-center">
                                    { devQuestion?.question }
                                </div>
                            </div>
                            
                            <div className="bg-midnight text-white font-sm">
                                Innovate Birmingham Dev Cards
                            </div>

                        </div>
                    </div>

                    <div className={ devAnswer ? "card-back card-back-anim" : "card-back shadow" }>

                        <div className="card text-center border-midnight shadow">
                            
                            <div className="card-header">
                                Web Development
                                <div className="float-right" onClick={showDevQuestion}>
                                    <i className="fas fa-reply"></i>
                                </div>
                            </div>
                            
                            <div className="card-body">
                                <div className="card-text-answer text-center">
                                    { devQuestion?.answer }
                                </div>
                            </div>
                            
                            <div className="bg-midnight text-white font-sm">
                                Innovate Birmingham Dev Cards
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center text-white">
                <button className="next-card-btn btn btn-midnight mx-1" onClick={prevDevCard}>
                    Prev Card
                </button>
                <button className="next-card-btn btn btn-midnight mx-1" onClick={nextDevCard}>
                    Next Card
                </button>
            </div>

        </main>
    );
};


interface FlashcardsDevProps extends RouteComponentProps { }

export default FlashcardsDev;
