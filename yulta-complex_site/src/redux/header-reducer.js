import logo from "../assets/Header/Logo.png";

let initialState = {
    logo: {
        href: 'http://yulta.by/',
        title: 'yulta.by - О лаборатории',
        content: 'Испытательная строительная лаборатория ЮЛТА-комплекс',
        imageUrl: `url(${logo})`,
    },
    phoneNumbers: {
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
    }
};

const headerReducer = (state = initialState, action) => {
    return state;
};

export default headerReducer;