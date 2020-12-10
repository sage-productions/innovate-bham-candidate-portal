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

            <div className="home-img-wrapper">
                <div className="resources-bg-img"></div>
            </div>

            <div className="Resource-container-row-5 col-10 mt-20 bg-filter text-white">
                <div className="row page-row">



                    {/* <div className="col-12 text-center text-midnight mt-5">
                    <h4>Links to Partner Websites</u></h4>    
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
                </div> */}

                    <div className="href col-12 text-center mt-1">
                        <h4>--Colaboration--</h4>
                    </div>


                    <div className="col-12 text-center mt-3">
                        <a className="href" href=" https://www.figma.com/ " target="_blank">
                            <h3 className="text-white">Figma</h3>
                        </a>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://trello.com/ " target="_blank">
                            <h3 className="text-white"> Trello </h3>
                        </a>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://kumu.io/ " target="_blank">
                            <h3 className="text-white"> Kumu </h3>
                        </a>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://miro.com/ " target="_blank">
                            <h3 className="text-white"> Miro </h3>
                        </a>
                    </div>






                    <div className="href col-12 text-center  mt-3">
                        <h4>--Job Sites--</h4>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://www.goodjob.io/" target="_blank">
                            <h3 className="text-white">Goodjob</h3>
                        </a>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://onboardbirmingham.com/" target="_blank">
                            <h3 className="text-white"> OnBoard Bham - info tech </h3>
                        </a>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href="https://boulosolutions.com/talent/" target="_blank">
                            <h3 className="text-white"> Boulo Solutions </h3>
                        </a>
                    </div>






                    <div className="href col-12 text-center  mt-3">
                        <h4>--Bham Tech Groups--</h4>
                    </div>


                    <div className="col-12 text-center mt-1">
                        <a className="href" href="http://magiccitytech.org/" target="_blank">
                            <h3 className="text-white"> Magic City Tech </h3>
                        </a>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://women-in-tech.org/ " target="_blank">
                            <h3 className="text-white"> Women in Tech </h3>
                        </a>
                    </div>

                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://twitter.com/bhmblacktechies?lang=en " target="_blank">
                            <h3 className="text-white"> Birmingham Black Techies </h3>
                        </a>
                    </div>


                    <div className="col-12 text-center mt-1">
                        <a className="href" href=" https://www.birminghambusinessalliance.com/" target="_blank">
                            <h3 className="text-white"> Birmingham Business Alliance </h3>
                        </a>
                    </div>



                </div>
            </div>




        </main>
    )
}

interface ResourcesProps { }

export default Resources;
