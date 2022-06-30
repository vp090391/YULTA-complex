import React from 'react';
import s from './AboutLaboratory.module.scss'
import {NavLink} from 'react-router-dom';
import SwiperComponent from './Swiper/Swiper';
import ModalImage from "react-modal-image";

import accreditationCertificateImg from "./assets/Аттестат Лаборатория.jpg";
import accreditationCertificateImg_small from "./assets/Аттестат Лаборатория_small.jpg";
import mls12 from "./assets/MLS/Large/12.jpg";
import mls11 from "./assets/MLS/Large/11.jpg";
import mls10 from "./assets/MLS/Large/10.jpg";
import mls9 from "./assets/MLS/Large/9.jpg";
import mls8 from "./assets/MLS/Large/8.jpg";
import mls7 from "./assets/MLS/Large/7.jpg";
import mls6 from "./assets/MLS/Large/6.jpg";
import mls5 from "./assets/MLS/Large/5.jpg";
import mls4 from "./assets/MLS/Large/4.jpg";
import mls3 from "./assets/MLS/Large/3.jpg";
import mls2 from "./assets/MLS/Large/2.jpg";
import mls12_small from "./assets/MLS/Small/12.jpg";
import mls11_small from "./assets/MLS/Small/11.jpg";
import mls10_small from "./assets/MLS/Small/10.jpg";
import mls9_small from "./assets/MLS/Small/9.jpg";
import mls8_small from "./assets/MLS/Small/8.jpg";
import mls7_small from "./assets/MLS/Small/7.jpg";
import mls6_small from "./assets/MLS/Small/6.jpg";
import mls5_small from "./assets/MLS/Small/5.jpg";
import mls4_small from "./assets/MLS/Small/4.jpg";
import mls3_small from "./assets/MLS/Small/3.jpg";
import mls2_small from "./assets/MLS/Small/2.jpg";

const AboutLaboratory = () => {
    let state = {
        images: {
            accreditationCertificate: {
                alt: 'Аттестат аккредитации',
                src:
                    {large: accreditationCertificateImg,
                        small: accreditationCertificateImg_small},
            },
            mls: {
                alt: ['Сертификат участника проверки квалификации'],
                large: [mls12, mls11, mls10, mls9, mls8, mls7, mls6, mls5, mls4, mls3, mls2],
                small: [mls12_small, mls11_small, mls10_small, mls9_small, mls8_small, mls7_small, mls6_small, mls5_small, mls4_small, mls3_small, mls2_small],
            }
        }
    };

    return (
        <article className={s.article_wrapper}>

            <aside className={s.promo}>
                <NavLink to="/laboratory/request"
                         title='Подать заявку'
                         className={s.delivery}>
                    <p>Мы привезём Ваши образцы к нам в лабораторию!</p>
                </NavLink>

                <a href='https://www.instagram.com/yultacomplex/'
                   className={s.instagram}
                   target="_blank"
                   rel="noopener noreferrer"
                   title='Перейти в Instagram'>
                    <p>У нас в Instagram очень интересно!</p>
                </a>
            </aside>

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
                    small={state.images.accreditationCertificate.src.small}
                    large={state.images.accreditationCertificate.src.large}
                    alt={state.images.accreditationCertificate.alt}
                    hideZoom={true}
                />
            </aside>

            <aside className={s.swiper}>
                <SwiperComponent images={state.images}/>
            </aside>
        </article>
    )
};

export default AboutLaboratory;