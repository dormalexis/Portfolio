import {useEffect, React} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { PROJECTS } from '../data/Projects';
import { useHistory } from "react-router-dom";

import web from '../ressources/images/project-details/web.svg';
import rocket from '../ressources/images/project-details/rocket.svg';
import tool from '../ressources/images/project-details/tool.svg';

import backArrow from '../ressources/images/icons/arrowLeft.svg';


import Contact from './Contact';
import Header from './Header';

const ProjectDetails = (props) => {

    let project = PROJECTS.find(x => x.id == props.match.params.id);
    let history = useHistory();

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);


    return (
      <>
        <div className="development-header" style={{boxShadow:"0px 3px 6px 0 rgb(0 0 0 / 25%)"}}>
          <Header/>
        </div>
        
        <div style={{margin:"5% 7%"}}>
            
            <div className="d-flex align-items-center mb-3">
              <img src={backArrow} onClick={() => history.goBack()} style={{width:"30px", marginRight:"20px"}}/>
              <h1>{project.name}</h1>
            </div>
            
            <p><b>{project.date}</b></p>


            <p>{project.descriptionText}</p>

            

            <p>{project.work}</p>

            <div className="d-flex align-items-center mb-3">
              <img src={web} style={{width:"40px", marginRight:"20px"}}/>
              <a target="_blank" href={project.website}>{project.website}</a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <img src={rocket} style={{width:"40px", marginRight:"20px"}}/>
              <p><b>Description du projet</b></p>
            </div>

            <ul className="details-list">
              {project.descriptionSkills.map(skill => <li>{skill}</li>)}
            </ul>
            
            <div className="d-flex align-items-center mb-3">
              <img src={tool} style={{width:"40px", marginRight:"20px"}}/>
              <p><b>Technologies</b></p>
            </div>

            <ul className="details-list">
              {project.tools.map(tool => <li>{tool}</li>)}
            </ul>


        </div>
        <Contact/>
      </>
    );
}

export default ProjectDetails;