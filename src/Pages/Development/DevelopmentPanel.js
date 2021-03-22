import {useEffect, React} from 'react';
import surf from '../../Images/surf.png';
import Header from '../../Components/Header';

import AOS from 'aos';
import "aos/dist/aos.css";
import Contact from '../../Components/Contact';
import ProjectsPanel from './ProjectsPanel';
import SkillsPanel from './SkillsPanel';

const DevelopmentPanel = () => {

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

    return (
        
        <>
            <div id="development-header">
                <Header/>
                <div className="row m-auto">
                    <div data-aos="fade-right" id="header-dev" className="col-md-7">
                        <h1 className="developer-title">Développeur Web & Mobile</h1>
                        <p>Analyse, développement, conception & documentation.<br/>
                        N'hésitez pas à me contacter pour parler ensemble de votre projet.</p>
                    </div>
                    <img data-aos="fade-up" className="col-md-3 m-auto" src={surf} style={{width:"300px"}}/>
                </div>
           
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 212"><path id="Forme_2" data-name="Forme 2" class="cls-1" d="M1923,0s-238.66-1-488,112C797.082,401.107,773-136-3,176l-1,40H1922Z"></path></svg>
            </div>

            <SkillsPanel/>
            <ProjectsPanel/>

            <Contact/>
            
        </>
    );
}

export default DevelopmentPanel;