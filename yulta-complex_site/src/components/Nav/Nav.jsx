import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import aboutLaboratoryImg from '../../assets/Nav/AboutLaboratory.png'
import requestImg from '../../assets/Nav/Request.png'
import accreditationImg from '../../assets/Nav/Accreditation.png'
import infoImg from '../../assets/Nav/Info.png'
import contactsImg from '../../assets/Nav/Contacts.png'
import commentsImg from '../../assets/Nav/Comments.png'

const Nav = (props) => {
    let state = props.nav;
    return (
        <nav className={s.nav}>
            <NavLink exact to="/" activeClassName={s.activeLink}>
                <h2>{state.pages[0]}</h2>
                <img src={aboutLaboratoryImg} alt='Home'/>
            </NavLink>

            <NavLink to="/request" activeClassName={s.activeLink}>
                <h2>{state.pages[1]}</h2>
                <img src={requestImg} alt='List'/>
            </NavLink>

            <NavLink to="/accreditation" activeClassName={s.activeLink}>
                <h2>{state.pages[2]}</h2>
                <img src={accreditationImg} alt='Presentation of opportunities'/>
            </NavLink>

{/*            <NavLink to="/info" activeClassName={s.activeLink}>
                <h2>{state.pages[3]}</h2>
                <img src={infoImg} alt='Infornation'/>
            </NavLink>*/}

            <NavLink to="/comments" activeClassName={s.activeLink}>
                <h2>{state.pages[5]}</h2>
                <img src={commentsImg} alt='Comment'/>
            </NavLink>

            <NavLink to="/contacts" activeClassName={s.activeLink}>
                <h2>{state.pages[4]}</h2>
                <img src={contactsImg} alt='Phone mail geolocation'/>
            </NavLink>

        </nav>
    )
};

export default Nav;