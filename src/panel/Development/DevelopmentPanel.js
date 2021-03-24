import {useEffect, React} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Contact from '../../components/Contact';
import ProjectsPanel from './ProjectsPanel';
import TechnicalSkillsPanel from './SkillsPanel';
import { SKILLS } from '../../data/Skills';
import { VISUAL_SKILLS } from '../../data/VisualSkills';
import Intro from '../../components/Intro';

import surf from '../../ressources/images/icons/surf.png';


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
            
            <Intro 
              title="Développeur Web & Mobile" 
              text={["Analyse, développement, conception & documentation.", "N'hésitez pas à me contacter pour parler ensemble de votre projet."]}
              picture={surf}
              mainClass="development-header"
              subClass="developer-title"
            />
            <TechnicalSkillsPanel title="Compétences techniques" skills={SKILLS}/>
            <TechnicalSkillsPanel title="Compétences visuelles" skills={VISUAL_SKILLS}/>
            <ProjectsPanel/>

            <Contact/>
            
        </>
    );
}

export default DevelopmentPanel;