import {useEffect, React} from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";

import PROJECTS_LIST from '../../data/ProjectsList';
import Project from '../../components/Project';

const ProjectsPanel = () => {

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

    return (
            <div id="hard-skills">
              <h1 data-aos="fade-down" className="text-center">Expériences</h1>
              <div className="row mt-5 d-flex justify-content-center">
                {PROJECTS_LIST.map(project => 
                  <Project key={project.id} project={project}/>
                )}
              </div>
            </div>

    );
}

export default ProjectsPanel;