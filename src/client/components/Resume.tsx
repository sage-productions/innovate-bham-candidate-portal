import React, { useState, useEffect } from 'react';
import { Document } from 'react-pdf';


const Resume: React.FC<ResumeProps> = props => {
    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-10">
                    <h1 className="text-center">Resume</h1>
                </div>
            </div>
        </main>
        
    )
}

interface ResumeProps { }

export default Resume;
