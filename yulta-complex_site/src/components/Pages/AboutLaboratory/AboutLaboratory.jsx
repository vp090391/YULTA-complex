import React from 'react';
import s from './AboutLaboratory.module.scss'
import {NavLink} from 'react-router-dom';
import Swiper from './Swiper/Swiper'

const AboutLaboratory = (props) => {
    let state = props.aboutLaboratoryPage;

    let onClickImage = () => {
        document.addEventListener('click', (event) => {
            if (event.target.id) {console.log(event.target.id)}
        });
    };

    //TODO react-lazy-load-image-component
    // TODO react-onclickoutside

    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <h1>{state.header}</h1>
                <p>{state.paragraphs[0]}</p>
                <p>{state.paragraphs[1]}</p>
                <p>{state.paragraphs[2]}</p>
                <NavLink to="/accreditation">
                    {state.paragraphs[3]}
                </NavLink>
                <p>{state.paragraphs[4]}</p>
                <p>{state.paragraphs[5].slice(0,-14)}
                    <a href={state.mail.href}
                       title={state.mail.imageTitle}>{state.paragraphs[5].slice(-14,)}
                    </a>
                </p>
                <NavLink to="/request">
                    {state.paragraphs[6]}
                </NavLink>
                <p>{state.paragraphs[7]}</p>
            </section>

            <aside className={s.aside} onClick={onClickImage()}>
                <img id={state.images.accreditationCertificate.id} alt={state.images.accreditationCertificate.alt} src={state.images.accreditationCertificate.src}/>
                <img id={state.images.registrationCertificate.id} alt={state.images.registrationCertificate.alt} src={state.images.registrationCertificate.src}/>
            </aside>

            <aside className={s.swiper}>
                <Swiper state={state}/>
            </aside>
        </article>
    )
};

export default AboutLaboratory;