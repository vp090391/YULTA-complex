import logo from "../assets/Header/Logo.png";
import phoneImage from "../assets/Header/Phone.png"
import mailImage from "../assets/Header/Mail.png"
import coordinatesImage from "../assets/Header/Geo.png"

let initialState = {
    logo: {
        href: 'http://yulta.by/',
        title: 'yulta.by - О лаборатории',
        content: 'Испытательная строительная лаборатория ЮЛТА-комплекс',
        imageUrl: `url(${logo})`,
    },
    phone: {
        phoneImage: `url(${phoneImage})`,
        phoneImageTitle: 'Позвонить',
        office: {
            href: 'tel:+375175076853',
            title: 'Офис (тел/факс)',
            valueForPage: '+375 (17) 507-68-53',
        },
        director: {
            href: 'tel:+375293235984',
            title: 'Директор',
            valueForPage: '+375 (29) 323-59-84',
        },
        deputyDirector: {
            href: 'tel:+375296113146',
            title: 'Заместитель директора',
            valueForPage: '+375 (29) 611-31-46',
        },
    },
    mail: {
        image: `url(${mailImage})`,
        imageTitle: 'Написать письмо',
        href: 'mailto:info@yulta.by',
        valueForPage: 'info@yulta.by',
    },
    coordinates: {
        image: `url(${coordinatesImage})`,
        imageTitle: 'Местоположение',
        href: 'geo:53.847473, 27.417095',
        valueForPage: "РБ, г. Минск \n Меньковский тракт 19 \n кабинет 106",
    },

};

const headerReducer = (state = initialState, action) => {
    return state;
};

export default headerReducer;