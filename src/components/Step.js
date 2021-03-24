import React from 'react';

const Step = ({step}) => {

    return(
        <div data-aos="zoom-in" data-aos-delay={step.delay} className="col-12 col-md-4 text-center mt-5">
            <img className="service-image" src={step.icon}/>
            <p className="mt-5"><b>Etape {step.id} : </b>{step.text}</p>
        </div>
    )
}

export default Step;