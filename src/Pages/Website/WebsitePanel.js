import React from 'react';
import Contact from '../../Components/Contact';
import DevicesPanel from '../../Components/DevicesPanel';
import Intro from './Intro';
import WebServices from './WebServices';

const WebsitePanel = () => {
    return (
        
        <>
            <Intro/>
            <WebServices/>
            <DevicesPanel/>
            <Contact/>            
        </>
    );
}

export default WebsitePanel;