import React from 'react';
import AboutLaboratory from "./AboutLaboratory";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        aboutLaboratoryPage: state.aboutLaboratoryPage,
    }
};

const AboutLaboratoryContainer = connect(mapStateToProps)(AboutLaboratory);

export default AboutLaboratoryContainer;