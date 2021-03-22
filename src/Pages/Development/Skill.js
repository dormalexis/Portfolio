import {useEffect, React} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { ProgressBar } from 'react-bootstrap';

const Skill = ({skill}) => {

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

    return (
        <div className="col-md-4 col-lg-3 m-2" data-aos="fade-down" data-aos-delay="800" style={{ background:"white", borderRadius:"8px", padding:"5px", boxShadow:"0 3px 6px 0 rgb(0 0 0 / 16%)"}}>
          <div className="d-flex align-items-center m-2">
            <img className="skills-icons" src={skill.picture} style={{borderRadius:"8px"}}/>
            <ProgressBar className="ml-3" variant={skill.color} now={skill.level} style={{width:"100%"}} />
          </div>
          <p className="text-center">{skill.name}</p>
        </div>        
    );
}

export default Skill;