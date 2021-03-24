import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from './../components/Header';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const LandingPanel = () => {

    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);

    return (
        
        <>
           
            <div id="landing-header">
                <Header/>
                <div className="header-content">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1 id="landing-title"><ReactTypingEffect
                                text={["Développeur Web & Mobile", "Identité visuelle & site web", "Front & Back-End"]}
                                speed={50}
                                typingDelay={0}
                                eraseDelay={1000}
                                eraseSpeed={50}
                            /></h1>
                            <p>Diplomé en Informatique de Gestion, je suis passionné par tout ce qui touche à la technologie & au design.</p>

                            <div className="row">
                                <Link className="m-auto" to="creation-site-internet-et-design"><button className="button">Site Web & Design</button></Link>
                                <Link className="mx-auto mt-3 mt-md-0" to="developpeur-web-et-mobile"><button className="button">Développeur Web & Mobile</button></Link>
                            </div>
                        </div>

                        <div className="human d-none d-md-block"></div>
                    </div>
                </div>
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 212"><path id="Forme_2" data-name="Forme 2" class="cls-1" d="M1923,0s-238.66-1-488,112C797.082,401.107,773-136-3,176l-1,40H1922Z"></path></svg>
            </div>           
        </>
    );
}

export default LandingPanel;