import React, { useState, useEffect } from 'react';


const Resources: React.FC<ResourcesProps> = props => {
    return (
        <main className="container-fluid text-midnight">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-gold text-center">Resources</h2>
                </div>
            </div>
            <div>
                <h4 id="resource-title">Innovate Birmingham Staff</h4>
            </div>

                <div className="row py-5 page-row">
                                  
                    <div className="col-sm-4 text-center pb-5">

                        <h4>Josh Hurn</h4>
                        <h5 className="neg-top-margin">Web Dev Instructor</h5>
                        
                            
                        <h6>linkedin.com/joshjosh</h6>
                        <h6>joshjosh@innovatebham.com</h6>

                    </div>

                    <div className="col-sm-4 text-center pb-5">

                        <h4>Carlton Lewis</h4>
                        <h5 className="neg-top-margin">Success Coach</h5>
                        
                            
                        <h6>linkedin.com/carlton-lewis</h6>
                        <h6>carlton@innovatebham.com</h6>

                    </div>
                    <div className="col-sm-4 text-center pb-5">

                        <h4>Jake Lovett</h4>
                        <h5 className="neg-top-margin">Web Dev TA</h5>
                        
                            
                        <h6>linkedin.com/in/jake-lovett</h6>
                        <h6>Jake@innovatebham.com</h6>

                    </div>
                    <div className="col-sm-4 text-center pb-5">

                        <h4>Garrett Harris </h4>
                        <h5 className="neg-top-margin">Web Dev Instructor</h5>
                
                            
                        <h6>linkedin.com/</h6>
                        <h6>@innovatebham.com</h6>
                     

                    </div>

                    <div className="col-sm-4 text-center pb-5">

                        <h4>Taylor Abney</h4>
                        <h5 className="neg-top-margin">Data Instructor</h5>
                
                            
                        <h6>linkedin.com/</h6>
                        <h6>@innovatebham.com</h6>
                        

                    </div>

                    <div className="col-sm-4 text-center pb-5">

                        <h4>Reggie White</h4>
                        <h5 className="neg-top-margin">Data Instructor</h5>
                
                            
                        <h6>linkedin.com/</h6>
                        <h6>@thinkdatasolutions.com</h6>

                    </div> 
                    <div className="col-sm-4 text-center pb-5">

                        <h4>Rachel Davis Smith</h4>
                        <h5 className="neg-top-margin">Operations Coordinator</h5>

                            
                        <h6>linkedin.com/</h6>
                        <h6>@innovatebham.com</h6>

                    </div>

                    <div className="col-sm-4 text-center pb-5">

                        <h4>Haley Hoppe</h4>
                        <h5 className="neg-top-margin">Director Of Engagement</h5>

                            
                        <h6>linkedin.com/</h6>
                        <h6>@innovatebham.com</h6>

                    </div>

                    <div className="col-sm-4 text-center pb-5">

                        <h4>Brandie McGee</h4>
                        <h5 className="neg-top-margin">Senior Case Manager</h5>

                            
                        <h6>@innovatebham.com</h6>

                    </div>

                    <div className="col-sm-4 text-center pb-5">

                        <h4>Deva Dedios</h4>
                        <h5 className="neg-top-margin">Marketing Srategist</h5>

                            
                        <h6>linkedin.com/</h6>
                        <h6>info@innovatebham.com</h6>

                    </div>    

                    
            <h4 id="resource-title2">Outreach Resources</h4>
            <div className="col-sm-4 text-center pb-5">

                <h5 className="neg-top-margin"></h5>

    
                <h6></h6>
               

            </div>


            </div>

        
        </main>









        
    )
}

interface ResourcesProps { }

export default Resources;
