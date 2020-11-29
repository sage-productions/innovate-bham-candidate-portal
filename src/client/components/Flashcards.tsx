import React, { useState, useEffect } from 'react';


const Flashcards: React.FC<FlashcardsProps> = props => {
    return (
        <div className="row">
            <div className="col-10">
                <h1 className="text-center">Flashcards</h1>
            </div>
        </div>
    )
}

interface FlashcardsProps { }

export default Flashcards;
