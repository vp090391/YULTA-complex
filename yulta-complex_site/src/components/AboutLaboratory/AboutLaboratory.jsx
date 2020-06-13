import React from 'react';
import s from './AboutLaboratory.module.css'

const AboutLaboratory = (props) => {
    let state = props.aboutLaboratoryPage;

    return (
        <div>
            {state.message}
        </div>
    )
};

export default AboutLaboratory;