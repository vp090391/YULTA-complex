import {connect} from "react-redux";
import Footer from "./Footer";

const mapStateToProps = (state) => {
    return {
        footer: state.footer,
    }
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;