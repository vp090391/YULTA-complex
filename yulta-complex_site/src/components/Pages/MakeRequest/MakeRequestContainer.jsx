import {connect} from "react-redux";
import MakeRequest from "./MakeRequest";

const mapStateToProps = (state) => {
    return {
        makeRequestPage: state.makeRequestPage,
    }
};

const MakeRequestContainer = connect(mapStateToProps)(MakeRequest);

export default MakeRequestContainer;