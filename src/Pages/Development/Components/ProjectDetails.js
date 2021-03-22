import {useEffect, React} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { PROJECTS } from '../../../Data/Projects';

const ProjectDetails = (props) => {

    let project = PROJECTS.find(x => x.id == props.match.params.id)

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

    return (
        <>
            <h1>{project.name}</h1>
            <p>{project.date}</p>
            <a target="_blank" href={project.website}>{project.website}</a>

            <p>{project.descriptionText}</p>

            <p>{project.work}</p>

            <p>Description du projet</p>
            <ul>
              {project.descriptionSkills.map(skill => <li>{skill}</li>)}
            </ul>
            
        </>
    );
}

export default ProjectDetails;