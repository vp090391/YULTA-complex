import React from 'react';
import s from './Certification.module.scss'
import ModalImage from "react-modal-image";

import certificationCertificateImg from "./assets/Certification_certificate.jpg";
import certificationCertificateImg_small from "./assets/Certification_certificate_small.jpg";
import zayavlenieOBespristrastnostiImg from './assets/Zayavlenie_o_bespristrastnosti.jpg';
import zayavlenieOBespristrastnostiImg_small from './assets/Zayavlenie_o_bespristrastnosti_small.jpg';

const Certification = () => {
    return (
        <article className={s.article_wrapper}>

            <section className={s.section}>
                <h1>СЕРТИФИКАЦИЯ ПРОДУКЦИИ</h1>

                <p>Орган по сертификации продукции  (аттестат аккредитации  № BY/112 131.01 от 30.03.2022)  проводит работы по сертификации продукции:
                    <br/>- на соответствие требованиям&ensp;
                    <a href='https://stn.by/files/tr13i.pdf'
                       target='_blank'
                       rel="noopener noreferrer"
                       title='Посмотреть регламент'>ТР 2009/013/BY «Здания и сооружения, строительные материалы и изделия. Безопасность»,
                    </a>
                    <br/>-  добровольную сертификацию
                    <br/>в соответствии с&ensp;
                    <a href='https://bsca.by/ru/registry/view?id=6883'
                       target='_blank'
                       rel="noopener noreferrer"
                       title='Посмотреть область аккредитации'>областью аккредитации в Национальной системе подтверждения соответствия Республики Беларусь
                    </a>
                </p>

                <p>Сертификация продукции проводится в соответствии с&ensp;
                    <a href='https://pravo.by/upload/docs/op/H11600437_1477688400.pdf'
                       target='_blank'
                       rel="noopener noreferrer"
                       title='Посмотреть документ'> Законом Республики Беларусь от 24 октября 2016 г. № 437-З «Об оценке соответствия техническим требованиям и аккредитации органов по оценке соответствия»,&ensp;
                    </a>
                    <a href='https://pravo.by/document/?guid=3871&p0=W21732456'
                       target='_blank'
                       rel="noopener noreferrer"
                       title='Посмотреть документ'>«Правилами подтверждения соответствия Национальной системы подтверждения соответствия Республики Беларусь», утвержденными Постановлением Госстандарта Республики Беларусь от 25 июля 2017 г. № 61.&ensp;
                    </a>
                    В данных документах установлены схемы и процедуры подтверждения соответствия, действия органа по сертификации в отношении выданных сертификатов (приостановление, отмена), отказ в выдаче сертификата соответствия.
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

export default Certification;