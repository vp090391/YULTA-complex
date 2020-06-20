import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    let state = props.header;
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <a href={state.logo.href}
                   title={state.logo.title}
                   style={{backgroundImage: `${state.logo.imageUrl}`}}>
                   {state.logo.content}
                </a>
            </div>

            <div className={s.phone}>
                <ul>
                    <li><a href={state.phoneNumbers.office.href} title={state.phoneNumbers.office.title}>{state.phoneNumbers.office.valueForPage}</a></li>
                    <li><a href={state.phoneNumbers.director.href} title={state.phoneNumbers.director.title}>{state.phoneNumbers.director.valueForPage}</a></li>
                    <li><a href={state.phoneNumbers.deputyDirector.href} title={state.phoneNumbers.deputyDirector.title}>{state.phoneNumbers.deputyDirector.valueForPage}</a></li>
                </ul>
            </div>
        </header>
    )
};

export default Header;