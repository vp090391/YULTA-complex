import {connect} from "react-redux";
import AboutLaboratory from "./AboutLaboratory";

const mapStateToProps = (state) => {
    return {
        aboutLaboratoryPage: state.aboutLaboratoryPage,
    }
};

const AboutLaboratoryContainer = connect(mapStateToProps)(AboutLaboratory);

export default AboutLaboratoryContainer;