import {useEffect, React} from 'react';
import Header from './Header';


const Intro = ({title, text, picture, mainClass, subClass}) => {
    
    return (
        <div class={mainClass}>
            <Header/>
            <div className="row m-auto">
                <div data-aos="fade-right" id="header-dev" className="col-md-7">
                    <h1 className={subClass}>{title}</h1>
                    {text.map(line => <p>{line}</p>)}
                </div>
                <img data-aos="fade-up" className="col-md-3 m-auto" src={picture} style={{width:"300px"}}/>
            </div>

            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 212"><path data-name="Forme 2" class="cls-1" d="M1923,0s-238.66-1-488,112C797.082,401.107,773-136-3,176l-1,40H1922Z"></path></svg>
        </div>
    )
}

export default Intro;

