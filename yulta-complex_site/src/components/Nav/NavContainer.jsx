import {connect} from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state) => {
    return {
        nav: state.nav,
    }
};

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;