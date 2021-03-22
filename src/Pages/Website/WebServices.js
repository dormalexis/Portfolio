import {useEffect, React} from 'react';

import code from '../../Images/calendar.png';
import feedback from '../../Images/rocket2.png';
import design from '../../Images/folder.png';

import AOS from 'aos';
import "aos/dist/aos.css";

const WebServices = () => {

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

      
    return (
        
        <>
            <div id="webservices">
                <h1 data-aos="fade-down" className="title-bg-light text-center">Créer son site ? Simple comme 1-2-3 !</h1>
                <p data-aos="fade-up" className="title-bg-light mb-5 text-center">Ensemble, transformons vos idées en réalité.</p>
                <div className="row">
                    <div data-aos="zoom-in" data-aos-delay="500" className="col-12 col-md-4 text-center mt-5">
                        <img className="service-image" src={design}/>
                        <p className="mt-5"><b>Etape 1 : </b>Parlons ensemble de votre projet : et de la structure de votre site, comment vous le voyez.</p>
                    </div>

                    <div  data-aos="zoom-in" data-aos-delay="1200" className="col-12 col-md-4 text-center mt-5">
                        <img className="service-image" src={code}/>
                        <p className="mt-5"><b>Etape 2 : </b>C'est parti pour la réalisation. Durant toute cette étape, nous restons en contact pour être sûr que nous allons dans la bonne direction.</p>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="1900" className="col-12 col-md-4 text-center mt-5">
                        <img className="service-image" src={feedback}/>
                        <p className="mt-5"><b>Etape 3 : </b>Une fois le site terminé, nous vérifions ensemble que tout correspond bien à vos attentes & nous procédons à la mise en ligne.</p>
                    </div>
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 212"><path id="Forme_2" data-name="Forme 2" class="cls-1" d="M1923,0s-238.66-1-488,112C797.082,401.107,773-136-3,176l-1,40H1922Z"></path></svg>
                </div>
            </div>
            {1 == 2 && <svg fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 212"><path id="Forme_2" data-name="Forme 2" class="cls-1" d="M1923,0s-238.66-1-488,112C797.082,401.107,773-136-3,176l-1,40H1922Z"></path></svg>}
        </>
    );
}

export default WebServices;