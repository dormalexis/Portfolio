import {useEffect, React} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { STEPS } from '../../data/Steps';
import Step from '../../components/Step';

const WebServices = () => {

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

      
    return (
        <div id="webservices">
            <h1 data-aos="fade-down" className="title-bg-light text-center">Créer son site ? Simple comme 1-2-3 !</h1>
            <p data-aos="fade-up" className="title-bg-light mb-5 text-center">Ensemble, transformons vos idées en réalité.</p>
            <div className="row">
                {STEPS.map(step => <Step key={step.id} step={step}/>)}
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 212"><path id="Forme_2" data-name="Forme 2" class="cls-1" d="M1923,0s-238.66-1-488,112C797.082,401.107,773-136-3,176l-1,40H1922Z"></path></svg>
            </div>
        </div>
    );
}

export default WebServices;