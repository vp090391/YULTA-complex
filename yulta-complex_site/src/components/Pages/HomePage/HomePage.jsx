import React from 'react';
import s from './HomePage.module.scss'
import {NavLink} from "react-router-dom";
import ModalImage from "react-modal-image";

import laboratoryCertificateImg from '../Laboratory/Laboratory/assets/Аттестат Лаборатория.jpg';
import laboratoryCertificateImg_small from '../Laboratory/Laboratory/assets/Аттестат Лаборатория_small.jpg';
import certificationCertificateImg from "../Certification/Certification/assets/Аттестат Орган.jpg";
import certificationCertificateImg_small from "../Certification/Certification/assets/Аттестат Орган_small.jpg";

const HomePage = () => {
    return (
        <article className={s.article_wrapper}>

            <section className={s.section}>
                <h1>ООО «ЮЛТА-комплекс»</h1>

                <p>Общество с ограниченной ответственностью «ЮЛТА-комплекс» основано 26 августа 2013  года с целью создания независимой лаборатории для оказания услуг по проведению испытаний продукции и услуг на территории Республики Беларусь и Евразийского экономического союза.
                </p>
                <p>С тех пор компания постоянно работает над расширением сферы своей деятельности и спектром оказываемых услуг.
                </p>

                <p>Основными направлениями деятельности ООО «ЮЛТА-комплекс» являются:
                    <br/><NavLink exact to='/laboratory'>
                        - проведение испытаний
                    </NavLink>
                    <br/><NavLink exact to='/certification'>
                        - сертификация продукции
                    </NavLink>
                    <br/><NavLink exact to='/declaration'>
                        - декларирование соответствия
                    </NavLink>
                </p>

                <p>Сотрудники «ЮЛТА-комплекс» обладают большим опытом в индустрии, постоянно совершенствуют знания, посещая конференции и семинары, а также, при необходимости, подтверждают  свою компетентность.
                </p>

                <p>Будем рады сотрудничеству!</p>

{/*                <section>
                    <h2>Новости</h2>

                    <p>
                        05 мая 2022 г.
                        <br/>Новость об изменениях в некоторых технический регламентах
                    </p>
                </section>*/}

            </section>

            <aside className={s.aside}>
                <ModalImage
                    small={laboratoryCertificateImg_small}
                    large={laboratoryCertificateImg}
                    alt='Аттестат аккредитации Испытательной лаборатории'
                    hideZoom={true}
                />
                <ModalImage
                    small={certificationCertificateImg_small}
                    large={certificationCertificateImg}
                    alt='Аттестат аккредитации Органа по сертификации продукции'
                    hideZoom={true}
                />
            </aside>

        </article>
    )
};

export default HomePage;