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

               
              
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u>Links to Partner Websites</u></h4>    
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://hiddeninnovators.co/ " target="_blank">
                        <h3 className="text-midnight">Hidden Innovators</h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href="https://2rvns.com/" target="_blank">
                        <h3 className="text-midnight">2 Ravens </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href="https://sigao.io/" target="_blank">
                        <h3 className="text-midnight"> Sigao Studios </h3>
                    </a>
                </div>





               
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u>colaboration / organization</u></h4>    
                </div>

              
                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://www.figma.com/ " target="_blank">
                        <h3 className="text-midnight">figma</h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://trello.com/ " target="_blank">
                        <h3 className="text-midnight"> trello </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://kumu.io/ " target="_blank">
                        <h3 className="text-midnight"> Kumu </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://miro.com/ " target="_blank">
                        <h3 className="text-midnight"> Miro </h3>
                    </a>
                </div>





               
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u> Job Sites </u></h4>    
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://www.goodjob.io/" target="_blank">
                        <h3 className="text-midnight">Goodjob</h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://onboardbirmingham.com/" target="_blank">
                        <h3 className="text-midnight"> OnBoard Bham - info tech </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href="https://boulosolutions.com/talent/" target="_blank">
                        <h3 className="text-midnight"> Boulo Solutions </h3>
                    </a>
                </div>





               
                <div className="col-12 text-center text-midnight mt-5">
                    <h4><u>Bham Tech Groups</u></h4>    
                </div>

               
                <div className="col-12 text-center mt-1">
                    <a className="href" href="http://magiccitytech.org/" target="_blank">
                        <h3 className="text-midnight"> Magic City Tech </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://twitter.com/bhmblacktechies?lang=en " target="_blank">
                        <h3 className="text-midnight"> Birmingham Black Techies </h3>
                    </a>
                </div>

                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://women-in-tech.org/ " target="_blank">
                        <h3 className="text-midnight"> Women in Tech </h3>
                    </a>
                </div>


                <div className="col-12 text-center mt-1">
                    <a className="href" href=" https://www.birminghambusinessalliance.com/" target="_blank">
                        <h3 className="text-midnight"> Birmingham business alliance </h3>
                    </a>
                </div>
                
                
            </div>
                    
               

        </main>
    )
}

interface ResourcesProps { }

export default Resources;
