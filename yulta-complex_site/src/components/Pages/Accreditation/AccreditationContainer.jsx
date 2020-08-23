import {connect} from "react-redux";
import Accreditation from "./Accreditation";

const mapStateToProps = (state) => {
    return {
        accreditationPage: state.accreditationPage,
    }
};

const AccreditationContainer = connect(mapStateToProps)(Accreditation);

export default AccreditationContainer;