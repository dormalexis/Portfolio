import {React, useEffect} from 'react';
import phone from '../Images/phone.svg';
import mail from '../Images/mail.svg';
import facebook from '../Images/facebook.svg';
import linkedin from '../Images/linkedin.svg';
import contact from '../Images/rocket.png';
import AOS from 'aos';

const Contact = () => {

    useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);

    return (
        <>
            <div id="contact" className="pb-5">
                <div>
                    <img src={contact} className="rocket" style={{width:"300px"}}/>
                    <h1 data-aos="fade-down" className="title-bg-light text-center">Faisons décoller votre projet.</h1>
                </div>
                
                <div className="mx-0 mx-lg-5 mt-5">
                    <div className="row mt-5 d-flex justify-content-center">
                        <div data-aos="zoom-in" data-aos-delay="300" className="col-12 col-sm-4 d-flex align-items-center mt-3 mt-sm-0">
                            <img className="img-fluid social" src={phone}></img>
                            <p className="ml-3 mb-0">+32 477 51 80 46</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="600" className="col-12 col-sm-4 d-flex align-items-center mt-3 mt-sm-0">
                            <img className="img-fluid social" src={mail}/>
                            <p className="ml-3 mb-0">alexisdormal@hotmail.com</p>
                        </div>
                    </div>
                    <div className="row mt-lg-5 justify-content-center">
                        <div data-aos="zoom-in" data-aos-delay="900" className="col-12 col-sm-4 d-flex align-items-center mt-3 mt-sm-0">
                            <img className="img-fluid social" src={facebook}></img>
                            <p className="ml-3 mb-0">Développeur Web & Mobile</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="1200" className="col-12 col-sm-4 d-flex align-items-center mt-3 mt-sm-0">
                            <img className="img-fluid social" src={linkedin}/>
                            <p className="ml-3 mb-0">/alexis-dormal</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;