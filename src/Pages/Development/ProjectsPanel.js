import {useEffect, React} from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import php from '../../Images/skills/php.png'

const ProjectsPanel = () => {

    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

    return (
        <>
            <div className="project">
                <h1 data-aos="fade-down" className="title-bg-light text-center mb-5">Portfolio</h1>
                <div className="row m-auto">
                    <div className="m-auto">
                        <Link className="d-block" to="/projects/formation-academy/details" style={{ background:"white", borderRadius:"8px", padding:"5px", boxShadow:"0 3px 6px 0 rgb(0 0 0 / 16%)"}}>
                            <img className="m-1" style={{background:"black", width:"250px", borderRadius:"8px"}} src={php}/>
                            <p className="text-center m-1">Formation Academy</p>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default ProjectsPanel;