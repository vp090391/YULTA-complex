import React from 'react';
import s from './AboutLaboratory.module.scss'

const AboutLaboratory = (props) => {
    let state = props.aboutLaboratoryPage;

    return (
        <div>
            {state.message}
        </div>
    )
};

export default AboutLaboratory;