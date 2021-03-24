import React from 'react';
import Contact from '../../components/Contact';
import DevicesPanel from '../../components/DevicesPanel';
import Intro from '../../components/Intro';
import WebServices from './WebServices';
import me from '../../ressources/images/icons/me.png';

const WebsitePanel = () => {
    return (
        
        <>
            <Intro 
              title="Création de sites & designs" 
              text={["Site internet sur mesure de A à Z pour votre entreprise, gîtes, événements."]}
              picture={me}
              mainClass="website-header "
              subClass="website-title"
            />
            <WebServices/>
            <DevicesPanel/>
            <Contact/>            
        </>
    );
}

export default WebsitePanel;