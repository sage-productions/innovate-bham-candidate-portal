import React, { useState, useEffect } from 'react';
import '../scss/resources-alt';


const Resources: React.FC<ResourcesProps> = props => {
    return (
        <main className="container-fluid text-midnight">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Resources</h2>
                </div>
            </div>


            <div className="row page-row">

                {/* Re-order these so they are in the same order as on innovate's staff page */}

                {/* Add Robin Hunt and whoever else we're missing - Ask Josh, Garrett or Jake... */}
                    {/* put whoever you add in the order wherever it makes the most sense */}

                {/* Add a profile pic to each... */}
                    {/* for each person, choose the best pic from either innovate's page or slack */}



                {/* Partner Websites Title */}
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u>Links to Partner Websites</u></h4>    
                </div>

                {/* Partner Links */}
                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://hiddeninnovators.co/ " target="_blank">
                        <h3 className="text-midnight">Hidden Innovators</h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href="..." target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href="..." target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>





                {/* ... Title */}
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u>Links to ... </u></h4>    
                </div>

                {/* ... Links */}
                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>





                {/* ... Title */}
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u>Links to ... </u></h4>    
                </div>

                {/* ... Links */}
                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>





                {/* ... Title */}
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u>Links to ... </u></h4>    
                </div>

                {/* ... Links */}
                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" ... " target="_blank">
                        <h3 className="text-midnight"> ... </h3>
                    </a>
                </div>



                
                
            </div>
                    
               

        </main>
    )
}

interface ResourcesProps { }

export default Resources;
