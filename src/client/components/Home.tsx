import React, { useState, useEffect } from 'react';


const Home: React.FC<HomeProps> = props => {
    return (
        <div className="row">
            <div className="col-10">
                <h1 className="text-center">Home</h1>
            </div>
        </div>
    )
}

interface HomeProps { }

export default Home;
