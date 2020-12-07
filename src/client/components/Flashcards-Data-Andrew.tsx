// @ts-nocheck

import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
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

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Flashcards</h2>
                </div>
            </div>


            <div className="row bg-white bottom-row">
        
                <div className="col-12">

                    <div className={ dataAnswer ? "card-front card-front-anim" : "card-front shadow" }>

                        <div className="card text-center border-midnight shadow mt-5">

                            <div className="card-header">
                                Web Dataelopment
                            </div>

                            <div className="card-body">
                                <div className="card-text-question text-center">
                                    { dataQuestion?.question }
                                </div>
                            </div>
                            
                            <button onClick={ seeDataAnswer } className="btn btn-midnight btn-sm">
                                See Answer
                            </button>

                        </div>
                    </div>

                    <div className={ dataAnswer ? "card-back card-back-anim" : "card-back shadow" }>

                        <div className="card text-center border-midnight shadow mt-5">
                            
                            <div className="card-header">
                                Web Dataelopment
                            </div>
                            
                            <div className="card-body">
                                <div className="card-text-answer text-center">
                                    { dataQuestion?.answer }
                                </div>
                            </div>
                            
                            <button onClick={nextDataCard} className="btn btn-midnight btn-sm">
                                Next Flashcard
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};


interface FlashcardsDataProps extends RouteComponentProps { }

export default FlashcardsData;
