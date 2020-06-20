import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        header: state.header,
    }
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;