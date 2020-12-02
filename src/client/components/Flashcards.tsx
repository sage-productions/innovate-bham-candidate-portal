import React, { useState, useEffect } from 'react';


const Flashcards: React.FC<FlashcardsProps> = props => {
    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-10">
                    <h1 className="text-center">Flashcards</h1>
                </div>
            </div>
        </main>
        
    )
}

interface FlashcardsProps { }

export default Flashcards;
