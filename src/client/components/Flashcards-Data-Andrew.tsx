// @ts-nocheck

import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import "../scss/flashcards-data-andrew";



const FlashcardsData: React.FC<FlashcardsDataProps> = (props: FlashcardsDataProps) => {
    const [dataCards, setDataCards] = React.useState({
        id: null,
        question: "",
        answer: "",
    });
    
      const [dataQuestion, nextDataQuestion] = React.useState({} as any);
    
      const [indexData, changeDataIndex] = React.useState(0);
    
      const [dataAnswer, showDataAnswer] = React.useState(false);
    
     useEffect(() => {
        (async () => {
            let data = await fetch('https://quiet-basin-68498.herokuapp.com/routes/api/dataflashcards');
            console.log(data);
            let dataCards = await data.json();
            setDataCards(dataCards);
        })();
    }, [])
    
    
      useEffect(() => {
        nextDataQuestion(dataCards[indexData]);
      }, [indexData, dataCards.id]);
    
    
      const seeDataAnswer = () => {
        showDataAnswer(true);
      };

    
      const showDataQuestion = () => {
        showDataAnswer(!showDataAnswer);
      }
    
    
      const nextDataCard = () => {
        showDataAnswer(false);
        if (indexData >= dataCards.length - 1) {
          changeDataIndex(0);
        } else {
          changeDataIndex(indexData + 1);
        }
      };


      const prevDataCard = () => {
        showDataAnswer(false);
        changeDataIndex(indexData - 1);
        if (indexData == 0) {
          changeDataIndex(dataCards.length - 1);
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
                <Link to="/flashcards-dev">
                    <button className="btn btn-midnight mx-1 mt-2 mb-5">
                        Switch to Dev Cards
                    </button>
                </Link>
            </div>


            <div className="row data-bottom-row">
        
                <div className="col-12">

                    <div className={ dataAnswer ? "card-front card-front-anim" : "card-front shadow" }>

                        <div className="card text-center border-midnight shadow">

                            <div className="card-header">
                                Data Analytics
                                <div className="float-right" onClick={showDataAnswer}>
                                    <i className="fas fa-reply"></i>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="card-text-question text-center">
                                    { dataQuestion?.question }
                                </div>
                            </div>
                            
                            <div className="bg-midnight text-white font-sm">
                                Innovate Birmingham Data Cards
                            </div>

                        </div>
                    </div>

                    <div className={ dataAnswer ? "card-back card-back-anim shadow" : "card-back shadow" }>

                        <div className="card text-center border-midnight shadow">
                            
                            <div className="card-header">
                                Data Analytics
                                <div className="float-right" onClick={showDataQuestion}>
                                    <i className="fas fa-reply"></i>
                                </div>
                            </div>
                            
                            <div className="card-body">
                                <div className="card-text-answer text-center">
                                    { dataQuestion?.answer }
                                </div>
                            </div>
                            
                            <div className="bg-midnight text-white font-sm">
                                Innovate Birmingham Data Cards
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center text-white">
                <button className="next-card-btn btn btn-midnight mx-1" onClick={prevDataCard}>
                    Prev Card
                </button>
                <button className="next-card-btn btn btn-midnight mx-1" onClick={nextDataCard}>
                    Next Card
                </button>
            </div>

        </main>
    );
};


interface FlashcardsDataProps extends RouteComponentProps { }

export default FlashcardsData;
