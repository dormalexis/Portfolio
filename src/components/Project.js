
import { React } from 'react';
import { Link } from 'react-router-dom';

export const Project = ({project}) => {

    return (
        <div className="col-md-4 col-lg-3 m-2" data-aos="fade-down  ">
            <Link className="d-block" to={"projects/" + project.url + "/details"} style={{ background:"white", borderRadius:"8px", padding:"8px", boxShadow:"0 3px 6px 0 rgb(0 0 0 / 16%)"}}>
                <img className="img-fluid" style={{background:project.background, borderRadius:"8px", width:"100%", height:"200px", padding:"20px"}} src={project.picture}/>
                <p className="text-center m-2">{project.name}</p>
            </Link>                        
        </div>
    )
}

export default Project;