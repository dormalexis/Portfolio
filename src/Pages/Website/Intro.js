import {useEffect, React} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import me from '../../Images/me.png';
import Header from '../../Components/Header';


const Intro = () => {

    useEffect(() => {
        AOS.init({
          duration :500,
          delay:200,
          once:false
        });
      }, []);

    return (
        
        <>
            <div id="website-header">
                <Header/>
                <div className="row m-auto">
                    <div data-aos="fade-right" className="header-content col-md-7">
                        <h1 className="website-title">Création de sites & designs</h1>
                        <p>Site internet sur mesure de A à Z pour votre entreprise, gîtes, événements.</p>
                    </div>
                    <img data-aos="fade-up" src={me} className="col-md-3 m-auto"/>
                </div>
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 212"><path id="Forme_2" data-name="Forme 2" class="cls-1" d="M1923,0s-238.66-1-488,112C797.082,401.107,773-136-3,176l-1,40H1922Z"></path></svg>
               
            </div>
        </>
    );
}

export default Intro;