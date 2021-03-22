import React from 'react';

import drone from './Images/Drone.png';
import camera from './Images/D5300.png';
import osmo from './Images/Osmo.png';
import waterproof from './Images/Waterproof.png';
import arrowLeft from './Images/arrowLeft.svg';
import arrowRight from './Images/arrowRight.svg';
import { Link } from 'react-router-dom';
import facebook from './Images/facebook.svg';
import linkedin from './Images/linkedin.svg'

const Footer = () => {

    return (
        <>

            <footer className="row">
                <div className="col-12 col-md-6">
                    <p>Alexis Dormal</p>
                    <div className="row">
                        <Link to="/mentions-legales">Mentions Légales</Link>
                        <Link to="/mentions-legales">Conditions d'utilisation</Link>
                    </div>
                </div>

                <div id="social-network">
                    <Link to="https://www.facebook.com/alexisdormal/"><img className="social" src={facebook}/></Link>
                    <Link to=""><img className="social" src={linkedin}/></Link>
                </div>
                
            </footer>
        </>
    );
}

export default Footer;