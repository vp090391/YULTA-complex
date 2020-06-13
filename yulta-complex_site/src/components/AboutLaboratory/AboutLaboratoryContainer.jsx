import React from 'react';
import s from './AboutLaboratory.module.css'
import AboutLaboratory from "./AboutLaboratory";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        aboutLaboratoryPage: state.aboutLaboratoryPage,
    }
};

const AboutLaboratoryContainer = connect(mapStateToProps)(AboutLaboratory);

export default AboutLaboratoryContainer;