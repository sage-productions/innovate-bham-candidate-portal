import React, { useState, useEffect } from 'react';


const Alert: React.FC<AlertProps> = props => {
    return (
        <main className="container-fluid text-midnight">

            {/* ALERT WINDOW - DOESN'T SHOW UNLESS THERE'S TEXT IN IT */}
            {/* FUTURE FUNCTIONALTIY */}
            {/* ADMIN SHOULD BE ABLE TO ADD MSG TO ONLY CANDIDATES, TO ALUM, TO ALL, ETC */}
            {/* INDIVIDUAL USERS SHOULD BE ABLE TO CLEAR THE MSG FOR THEIR PORTAL, BUT NOT EVERYONE'S */}
            {/* CAN WE MAKE IT SO IT POPS UP WITHOUT A PAGE REFRESH */}
            <div className="row alert-row justify-content-center">
                <div className="col-md-5 text-center text-midnight font-weight-bold mt-5 mb-4">
                    <div className="alert-window bg-warning rounded">
                        Demo day is here!! <span className="float-right text-midnight mr-3">x</span>
                        <br />Please have your updated resumes in today
                        <br />Looking forward to seeing everyone's final projects!
                    </div>
                </div>
            </div>









        </main>
    )
}

interface AlertProps { }

export default Alert;