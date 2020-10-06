import React from 'react';
import s from './AboutLaboratory.module.scss'
import {NavLink} from 'react-router-dom';
import SwiperComponent from './Swiper/Swiper';
import ModalImage from "react-modal-image";

const AboutLaboratory = (props) => {
    let state = props.aboutLaboratoryPage;
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
                <p>{state.paragraphs[5].slice(0, -14)}
                    <a href={state.mail.href}
                       title={state.mail.imageTitle}>{state.paragraphs[5].slice(-14,)}
                    </a>
                </p>
                <NavLink to="/request">
                    {state.paragraphs[6]}
                </NavLink>
                <p>{state.paragraphs[7]}</p>
            </section>

            <aside className={s.aside}>
                <ModalImage
                    small={state.images.accreditationCertificate.src.small}
                    large={state.images.accreditationCertificate.src.large}
                    alt={state.images.accreditationCertificate.alt}
                    hideZoom={true}
                />
                <ModalImage
                    small={state.images.registrationCertificate.src.small}
                    large={state.images.registrationCertificate.src.large}
                    alt={state.images.registrationCertificate.alt}
                    hideZoom={true}
                />
            </aside>

            <aside className={s.swiper}>
                <SwiperComponent state={state}/>
            </aside>
        </article>
    )
};

export default AboutLaboratory;