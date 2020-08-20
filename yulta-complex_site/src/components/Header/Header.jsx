import React from 'react';
import s from './Header.module.scss'
import phoneIcon from '../../assets/Header/Phone.svg'

const Header = (props) => {
    let state = props.header;

    //TODO ICONS

    return (
        <header className={s.header}>
            <div className={s.logo_wrapper}>
                <a className={s.logo}
                   href={state.logo.href}
                   title={state.logo.title}>
                   {state.logo.content}
                </a>
            </div>

            <div className={s.phoneImage_wrapper}>
                <a className={s.phoneImage}
                   href={state.phone.office.href}
                   title={state.phone.phoneImageTitle}>
                </a>

            </div>

            <div className={s.phoneNumbers_wrapper}>
                <ul className={s.phoneNumbers}>
                    <li><a href={state.phone.office.href} title={state.phone.office.title}>{state.phone.office.valueForPage}</a></li>
                    <li><a href={state.phone.director.href} title={state.phone.director.title}>{state.phone.director.valueForPage}</a></li>
                    <li><a href={state.phone.deputyDirector.href} title={state.phone.deputyDirector.title}>{state.phone.deputyDirector.valueForPage}</a></li>
                </ul>
            </div>

            <div className={s.mailImage_wrapper}>
                <a className={s.mailImage}
                   href={state.mail.href}
                   title={state.mail.imageTitle}>
                </a>
            </div>

            <div className={s.mail_wrapper}>
                <a className={s.mail}
                   href={state.mail.href}
                   title={state.mail.imageTitle}>{state.mail.valueForPage}
                </a>
            </div>

            <div className={s.coordinatesImage_wrapper}>
                <a className={s.coordinatesImage}
                   href={state.coordinates.href}
                   title={state.coordinates.imageTitle}>
                </a>
            </div>

            <div className={s.coordinates_wrapper}>
                <a className={s.coordinates}
                   href={state.coordinates.href}>{state.coordinates.valueForPage}</a>
            </div>
        </header>
    )
};

export default Header;