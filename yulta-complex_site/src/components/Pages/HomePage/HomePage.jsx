import React from 'react';
import s from './HomePage.module.scss'
import {NavLink} from "react-router-dom";
import ModalImage from "react-modal-image";

import laboratoryCertificateImg from '../Laboratory/Laboratory/assets/Аттестат Лаборатория.jpg';
import laboratoryCertificateImg_small from '../Laboratory/Laboratory/assets/Аттестат Лаборатория_small.jpg';
import certificationCertificateImg from "../Certification/Certification/assets/Аттестат Орган.jpg";
import certificationCertificateImg_small from "../Certification/Certification/assets/Аттестат Орган_small.jpg";
import newsFoto_1 from './News/newsFoto_1_Heater.jpg';

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

                <article className={s.news}>
                    <h2>Новости</h2>
                    <hr/>
                    <div>
                        <img src={newsFoto_1} alt='Heaters'/>
                        <h3>ВНИМАНИЮ ИЗГОТОВИТЕЛЕЙ И ПОСТАВЩИКОВ ПРОДУКЦИИ</h3>
                        <p>На территории Республики Беларусь с 01.01.2023 введен в действие ГОСТ 31311-2022 «Приборы отопительные. Общие технические условия». Действие ГОСТ 31311-2005 «Приборы отопительные. Общие технические условия» отменяется с 01.05.2023.</p>
                        <p>С 01.05.2023 с целью получения сертификатов соответствия на приборы отопительные (конвекторы, радиаторы) необходимо провести испытания или предоставить протоколы испытаний на соответствие требованиям ГОСТ 31311-2022 «Приборы отопительные. Общие технические условия».</p>
                        <p>Для проведения испытаний и сертификации приборов отопительных на соответствие ГОСТ 31311-2022 Вы можете обратиться в ООО «ЮЛТА-комплекс».</p>
                    </div>
                    <hr className={s.lastLine}/>
                </article>

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