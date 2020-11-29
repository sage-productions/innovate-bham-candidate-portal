import React, { useState, useEffect } from 'react';


const Template: React.FC<TemplateProps> = props => {
    return (
        <div className="row">
            <div className="col-10">
                <h1 className="text-center">Template</h1>
            </div>
        </div>
    )
}

interface TemplateProps { }

export default Template;
