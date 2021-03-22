import { Link } from "react-router-dom";
import logo from '../Images/Logo.png';

const Header = () => {

    return (
           <nav className="navbar navbar-expand-md">
			   	<img id="brand" className="navbar-brand img-fluid" src={logo}/>
                
                <button id="menu" className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"><svg className="img-fluid" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 73.168 73.168" fill="white"><path d="M4.242,14.425h64.684c2.344,0,4.242-1.933,4.242-4.324c0-2.385-1.898-4.325-4.242-4.325H4.242 C1.898,5.776,0,7.716,0,10.101C0,12.493,1.898,14.425,4.242,14.425z M68.926,32.259H4.242C1.898,32.259,0,34.2,0,36.584 c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.933,4.242-4.325C73.168,34.2,71.27,32.259,68.926,32.259z M68.926,58.742H4.242C1.898,58.742,0,60.683,0,63.067c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.935,4.242-4.325 C73.168,60.683,71.27,58.742,68.926,58.742z"></path></svg></button>
				<div className="navbar-collapse collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto text-center">
						<li className="nav-item">
							<Link to="/" className="nav-link">Accueil</Link>
						</li>
						<li className="nav-item">
							<Link to="/creation-site-internet-et-design" className="nav-link">Création site web & design</Link>
						</li>
						<li className="nav-item">
							<Link to="/developpeur-web-et-mobile" className="nav-link">Développeur Web & Mobile</Link>
						</li>
						<li>
							Ca fonctionne hehe !
						</li>
					</ul>
				</div>
		    </nav>
    );
}

export default Header;