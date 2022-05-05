import React from 'react';
import s from './Declaration.module.scss'
import ModalImage from "react-modal-image";

import certificationCertificateImg from "../../Certification/Certification/assets/Аттестат Орган.jpg";
import certificationCertificateImg_small from "../../Certification/Certification/assets/Аттестат Орган_small.jpg";
import zayavlenieOBespristrastnostiImg from '../../Certification/Certification/assets/Заявление о беспристрастности.jpg';
import zayavlenieOBespristrastnostiImg_small from '../../Certification/Certification/assets/Заявление о беспристрастности_small.jpg';

const Declaration = () => {
    return (
        <article className={s.article_wrapper}>

            <section className={s.section}>
                <h1>ДЕКЛАРИРОВАНИЕ СООТВЕТСТВИЯ</h1>

                <p>Орган по сертификации продукции  (аттестат аккредитации  № BY/112 131.01 от 30.03.2022)  проводит работы по декларированию соответствия в соответствии с&ensp;
                    <a href='https://bsca.by/ru/registry/view?id=6883'
                       target='_blank'
                       rel="noopener noreferrer"
                       title='Посмотреть область аккредитации'>областью аккредитации:
                    </a>

                    <br/>- в Национальной системе подтверждения соответствия (НСПС) Республики Беларусь
                    <br/><a href='https://stn.by/files/tr13i.pdf'
                            target='_blank'
                            rel="noopener noreferrer"
                            title='Посмотреть регламент'>ТР 2009/013/BY
                    </a>


                    <br/>- на соответствие требованиям технического регламента Евразийского экономического союза (Таможенного союза)
                    <br/><a href='http://www.eurasiancommission.org/ru/act/texnreg/deptexreg/tr/Documents/TR%20TS%20Upakovka.pdf'
                            target='_blank'
                            rel="noopener noreferrer"
                            title='Посмотреть регламент'>ТР ТС 005/2011
                    </a>
                </p>

                <p>Общество с ограниченной ответственностью «ЮЛТА-комплекс», в лице высшего руководства, заявляет о том, что понимает важность соблюдения принципа беспристрастности при проведении подтверждения соответствия продукции и несет ответственность за обеспечение беспристрастности.
                </p>
            </section>

            <aside className={s.aside}>
                <ModalImage
                    small={certificationCertificateImg_small}
                    large={certificationCertificateImg}
                    alt='Аттестат аккредитации'
                    hideZoom={true}
                />
                <ModalImage
                    small={zayavlenieOBespristrastnostiImg_small}
                    large={zayavlenieOBespristrastnostiImg}
                    alt='Заяявление о беспристрастности'
                    hideZoom={true}
                />
            </aside>

        </article>
    )
};

export default Declaration;