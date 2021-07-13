import accreditationCertificateImg from '../assets/Pages/1_AboutLaboratory/1_Accreditation certificate.jpg';
import accreditationCertificateImg_small from '../assets/Pages/1_AboutLaboratory/1_Accreditation certificate_small.jpg';
import registrationCertificateImg from '../assets/Pages/1_AboutLaboratory/2_Registration certificate.jpg';
import registrationCertificateImg_small from '../assets/Pages/1_AboutLaboratory/2_Registration certificate_small.jpg';

import mls1 from '../assets/Pages/1_AboutLaboratory/MLS/Large/1.jpg';
import mls1_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/1.jpg';
import mls2 from '../assets/Pages/1_AboutLaboratory/MLS/Large/2.jpg';
import mls2_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/2.jpg';
import mls3 from '../assets/Pages/1_AboutLaboratory/MLS/Large/3.jpg';
import mls3_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/3.jpg';
import mls4 from '../assets/Pages/1_AboutLaboratory/MLS/Large/4.jpg';
import mls4_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/4.jpg';
import mls5 from '../assets/Pages/1_AboutLaboratory/MLS/Large/5.jpg';
import mls5_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/5.jpg';
import mls6 from '../assets/Pages/1_AboutLaboratory/MLS/Large/6.jpg';
import mls6_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/6.jpg';
import mls7 from '../assets/Pages/1_AboutLaboratory/MLS/Large/7.jpg';
import mls7_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/7.jpg';
import mls8 from '../assets/Pages/1_AboutLaboratory/MLS/Large/8.jpg';
import mls8_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/8.jpg';
import mls9 from '../assets/Pages/1_AboutLaboratory/MLS/Large/9.jpg';
import mls9_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/9.jpg';
import mls10 from '../assets/Pages/1_AboutLaboratory/MLS/Large/10.jpg';
import mls10_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/10.jpg';
import mls11 from '../assets/Pages/1_AboutLaboratory/MLS/Large/11.jpg';
import mls11_small from '../assets/Pages/1_AboutLaboratory/MLS/Small/11.jpg';

let initialState = {
    header: "О лаборатории",
    promo: {
        delivery: {
            title: 'Подать заявку',
            text: 'Мы привезём Ваши образцы к нам в лабораторию!',
        },
        instagram: {
            title: 'Перейти в Instagram',
            text: 'У нас в Instagram очень интересно!',
            href: 'https://www.instagram.com/yultacomplex/',
        }
    },
    paragraphs: [
        'Испытательная лаборатория Общество с ограниченной ответственностью «ЮЛТА-комплекс» основана 26 августа 2013  года с целью создания независимой лаборатории для оказания услуг по проведению испытаний на территории Республики Беларусь и Евразийского экономического союза.',
        'Испытательная лаборатория ООО «ЮЛТА-комплекс» аккредитована на соответствие СТБ ИСО/МЭК 17025-2007 (ISO/IEC 17025:2005, IDT).\n' +
        'Аттестат аккредитации №BY/112 1.1744 от 24.02.2014 г. выдан Белорусским государственным центром аккредитации.',
        'Основными направлениями деятельности ИЛ ООО «ЮЛТА-комплекс» являются:\n' +
        '- проведение испытаний строительной продукции,\n' +
        '- контроль качества строительно-монтажных работ,\n' +
        '- проведение испытаний тары и упаковки.',
        'Ознакомиться с областью аккредитации лаборатории.',
        'Сотрудники лаборатории «ЮЛТА-комплекс» обладают большим опытом в сфере испытаний, постоянно совершенствуют свои знания, посещая конференции и семинары, а также подтверждают свою компетентность участием в межлабораторных сличениях.',
        'Для того, чтобы провести испытания, а также узнать стоимость, Вам необходимо сформировать документы на проведение испытаний и отправить их на электронную почту info@yulta.by',
        'Узнать более подробно, о том как подать заявку на испытания.',
        'Будем рады сотрудничеству!'
    ],
    mail: {
        imageTitle: 'Написать письмо',
        href: 'mailto:info@yulta.by',
    },
    images: {
        accreditationCertificate: {
            alt: 'Аттестат аккредитации',
            src:
                {large: accreditationCertificateImg,
                 small: accreditationCertificateImg_small},
        },
        registrationCertificate: {
            alt: 'Свидетельство о государственной регистрации коммерческой деятельности',
            src: {large: registrationCertificateImg,
                 small: registrationCertificateImg_small},
        },
        mls: {
            alt: ['Сертификат участника проверки квалификации'],
            large: [mls11, mls10, mls9, mls8, mls7, mls6, mls5, mls4, mls3, mls2, mls1],
            small: [mls11_small, mls10_small, mls9_small, mls8_small, mls7_small, mls6_small, mls5_small, mls4_small, mls3_small, mls2_small, mls1_small],
        }
    }
};

const aboutLaboratoryReducer = (state = initialState) => {
    return state;
};

export default aboutLaboratoryReducer;