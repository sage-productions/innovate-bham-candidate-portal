import React, { useState, useEffect } from "react";
import "../scss/flashcards-alt";
import FlashcardsDev from "./FlashcardsDev"
import FlashcardsData from "./FlashcardsData"


const Flashcards: React.FC<FlashcardsProps> = (props: FlashcardsProps) => {

  return (
    <main className="container-fluid text-midnight">
      <div className="row bg-white bottom-row">
        <div className="col-12 text-center px-0">
          <div className="text-gold bg-midnight text-center col-12">
            Flashcards
          </div>
          <FlashcardsDev />

          </div>

        </div>




    </main>
  );
};

interface FlashcardsProps { }

export default Flashcards;