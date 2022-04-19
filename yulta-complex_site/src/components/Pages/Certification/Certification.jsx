import React from 'react';
import s from './Sertification.module.scss'
import {NavLink} from 'react-router-dom';
import ModalImage from "react-modal-image";

import certificationCertificateImg from "./assets/Certification_certificate.jpg";
import certificationCertificateImg_small from "./assets/Certification_certificate_small.jpg";

const AboutLaboratory = () => {

    return (
        <article className={s.article_wrapper}>

            <section className={s.section}>
                <h1>О лаборатории</h1>
                <p>Испытательная лаборатория ООО «ЮЛТА-комплекс» аккредитована на соответствие СТБ ИСО/МЭК 17025-2007 (ISO/IEC 17025:2005, IDT).
                    <br/>Аттестат аккредитации №BY/112 1.1744 от 24.02.2014 г. выдан Белорусским государственным центром аккредитации.</p>
                <p>Основными направлениями деятельности ИЛ ООО «ЮЛТА-комплекс» являются:
                    <br/>- проведение испытаний строительной продукции,
                    <br/>- контроль качества строительно-монтажных работ,
                    <br/>- проведение испытаний тары и упаковки.</p>
                <NavLink to="/laboratory/accreditation">
                    Ознакомиться с областью аккредитации лаборатории.
                </NavLink>
                <p>Для того, чтобы провести испытания, а также узнать стоимость, Вам необходимо сформировать документы на проведение испытаний и отправить их на электронную почту
                    <a href='mailto:info@yulta.by'
                       title='Написать письмо'> info@yulta.by
                    </a>
                </p>
                <NavLink to="/laboratory/request">
                    Узнать более подробно, о том как подать заявку на испытания.
                </NavLink>
                <p>Будем рады сотрудничеству!</p>
            </section>

            <aside className={s.aside}>
                <ModalImage
                    small={certificationCertificateImg_small}
                    large={certificationCertificateImg}
                    alt='Аттестат аккредитации'
                    hideZoom={true}
                />
            </aside>

        </article>
    )
};

export default AboutLaboratory;