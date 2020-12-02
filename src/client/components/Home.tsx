import React, { useState, useEffect } from 'react';


const Home: React.FC<HomeProps> = props => {
    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-10">
                    <h1 className="text-center">Home</h1>
                </div>
            </div>
        </main>
      
    )
}

interface HomeProps { }

export default Home;
