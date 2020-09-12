let initialState = {
    logo: {
        href: 'http://yulta.by/',
        title: 'yulta.by - О лаборатории',
        content: 'Испытательная строительная лаборатория ЮЛТА-комплекс',
    },
    phone: {
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
        imageTitle: 'Написать письмо',
        href: 'mailto:info@yulta.by?subject=Заявка_на_испытания',
        valueForPage: 'info@yulta.by',
    },
    coordinates: {
        imageTitle: 'Местоположение',
        href: 'geo:53.847473,27.417095',
        valueForPage: "РБ, г. Минск \n Меньковский тракт 19 \n кабинет 106",
    },

};

const headerReducer = (state = initialState) => {
    return state;
};

export default headerReducer;