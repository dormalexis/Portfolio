import {useEffect, React} from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import Skill from '../../components/Skill';

const SkillsPanel = ({skills, title}) => {

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

    return (
        <>
            <div id="hard-skills">
              <h1 data-aos="fade-down" className="text-center">{title}</h1>
              <div className="row mt-5 d-flex justify-content-center">
                {skills.map(s => <Skill key={s.id} skill={s}/>)}
              </div>
                
            </div>
            
        </>
    );
}

export default SkillsPanel;