import accreditationCertificateImg from '../assets/Pages/1_AboutLaboratory/1_Accreditation certificate.jpg';
import registrationCertificateImg from '../assets/Pages/1_AboutLaboratory/2_Registration certificate.jpg';
import mls from '../assets/Pages/1_AboutLaboratory/MLS/1.jpg'

let initialState = {
    header: "О лаборатории",
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
        'Для того, чтобы провести испытания, а также узнать стоимость, Вам необходимо сформировать документы на проведение испытаний и отправить их на электронную почту info@yulta.by.',
        'Узнать более подробно, о том как подать заявку на испытания.',
        'Будем рады сотрудничеству!'
    ],
    mail: {
        imageTitle: 'Написать письмо',
        href: 'mailto:info@yulta.by',
    },
    images: {
        accreditationCertificate: {
            id: 'accreditationCertificate',
            alt: 'Accreditation certificate',
            src: accreditationCertificateImg,
        },
        registrationCertificate: {
            id: 'registrationCertificate',
            alt: 'Registration certificate',
            src: registrationCertificateImg,
        },
        mls: mls,
    }
};

const aboutLaboratoryReducer = (state = initialState) => {
    return state;
};

export default aboutLaboratoryReducer;