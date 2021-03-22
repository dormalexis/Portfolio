import {React, useEffect} from 'react';

import drone from '../Images/Drone.jpg';
import camera from '../Images/D5300.png';
import osmo from '../Images/Osmo.png';
import waterproof from '../Images/Waterproof.png';
import arrowLeft from '../Images/arrowLeft.svg';
import arrowRight from '../Images/arrowRight.svg';


import AOS from 'aos';
import "aos/dist/aos.css";
import popper from 'react-popper/dist/index.umd';

const DevicesPanel = () => {


    useEffect(() => {
        AOS.init({
          duration : 500,
          delay:200,
          once:true
        });
      }, []);

    let active = 0;
    let angle = 0;

    let next = () => {
                
        
        let children = document.getElementById("parent").children;

        let nbChildren = children.length;

        if(active == 4)
            active = 0;
        
        children[active].classList.replace("active", "inactive");
        children[active == nbChildren - 1 ? 0 : active + 1].classList.replace("inactive", "active");

        children[active+3 < 4 ? active+3 : active-1].classList.replace("inactive", "invisible");
        children[active+2 < 4 ? active+2 : active-2].classList.replace("invisible", "inactive");

        angle += 90;        
        document.getElementById("parent").style.transform = 'rotate(-' + angle + 'deg)';
    
        let classChildren = document.getElementsByClassName("children");

        
        for(let i = 0; i < nbChildren; i++)
        {
            classChildren[i].style.transform = 'rotate(' + angle + 'deg)';
        }

        active++; 
    };

    let previous = () =>  {
        let children = document.getElementById("caroussel").children;
        let nbChildren = children.length;
    }

    return (
        <>

            <div className="devicesWrapper">
                <h1 data-aos="fade-down" className="title">Souriez, vous êtes filmés.</h1>
                <p data-aos="fade-up" className="title website-title">Découvrez l'équipement pour couvrir vos besoins en photos & vidéos.</p>
                <div data-aos="zoom-in" data-aos-duration="2000" id="devices" style={{background:"#000000"}}>
                    <img className="control" src={arrowLeft} />
                    <div class="main" id="parent" >
                        <img id="child1" className="children active drone" src={drone}/>
                        <img id="child2" className="children inactive" src={camera}/>
                        <img id="child3" className="children invisible" src={osmo}/>
                        <img id="child4" className="children inactive" src={waterproof}/>
                    </div>

                    <img className="control" onClick={next} src={arrowRight}/>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="black" stroke="black" fill-opacity="1" d="M0,128L60,106.7C120,85,240,43,360,42.7C480,43,600,85,720,128C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </>
    );
}

export default DevicesPanel;