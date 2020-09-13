import aktOtbora from '../assets/Pages/2_Request/Akt otbora.docx'
import programma from '../assets/Pages/2_Request/Programma ispitanii.docx'

let initialState = {
    header: "Подать заявку на проведение испытаний",
    paragraf: 'Для того, чтобы провести испытания продукции в ИЛ ООО «ЮЛТА-комплекс», осуществить контроль строительно-монтажных работ или же просто узнать стоимость испытаний, Вам необходимо сформировать документы на проведение испытаний и отправить их на электронную почту info@yulta.by',
    emailHref: 'mailto:info@yulta.by',
    docsList: {
        header: 'Перечень документов для проведения испытаний:',
        list: {
            1: {
                header: '1. Заявка',
                paragraf: 'Документ оформляется на фирменном бланке организации-Заявителе, в котором должно быть указано следующее:\n' +
                    '- виды испытаний, которые Вы бы хотели провести\n' +
                    '- наименование продукции и изготовитель\n' +
                    '- контактный телефон и электронная почта'
            },
            2: {
                header: '2. Акт отбора образцов (скачать образец документа в формате .doc)',
                example: aktOtbora,
                paragraf: {
                    1: 'В акте отбора должно быть указано:\n' +
                        '- где, когда и кем отбирались образцы\n' +
                        '- полное наименование образцов продукции\n' +
                        '- количество образцов (согласно ТНПА на продукцию)\n' +
                        '- изготовитель продукции\n' +
                        '- для тары и упаковки обязательно указать:',
                    2: '• максимальную массу (объём) упаковываемой продукции\n' +
                        '• высоту штабелирования (в случае если продукция укладывается в штабель)\n' +
                        '• указать воспринимает ли продукция нагрузку штабеля\n' +
                        '• в случае, если продукция из картона и хранится в условиях с влажностью больше 70%, указать это',
                },
            },
            3: {
                header: '3. Программа испытаний (скачать образец документа в формате .doc)',
                example: programma,
                paragraf: 'В программе испытаний указывается по каким конкретным показателям необходимо испытать продукцию, методы испытаний. Также необходимо указать ТНПА, на соответствие которому испытывается продукция, или же указать, что для получения фактических значений.'
            },
        }
    }

};

const makeRequestReducer = (state = initialState) => {
    return state;
};

export default makeRequestReducer;