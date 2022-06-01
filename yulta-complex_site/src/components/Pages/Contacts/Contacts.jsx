import React from 'react';
import s from './Contacts.module.scss'

const Contacts = () => {
    let state = {
        info: [
            ['Наименование организации:', 'Общество с ограниченной ответственностью «ЮЛТА-комплекс»'],
            ['Директор:', 'Сысоев Иван Евгеньевич'],
            ['УНП:', '691590738'],
            ['Юридический / почтовый адрес:', 'Республика Беларусь, 223021, Минская обл., Минский р-н, Щомыслицкий с/с, д. 114, пом. 106'],
            ['Адрес для навигатора:', 'Республика Беларусь, г. Минск, Меньковский тракт, 19\n' +
            'Координаты: 53.847483, 27.417078'],
            ['Контактные телефоны:', ''],
            ['Офис (тел/факс):', '+375 17 507-68-53'],
            ['Испытательная лаборатория:', '+375 29 335-74-90'],
            ['Орган по сертификации:', '+375 29 644-30-76'],
            ['E-mail:', 'info@yulta.by'],
            ['Сайт:', 'yulta.by'],
            ['Время работы:', 'Понедельник-пятница с 9-00 до 17-00'],
        ],
    };
    let keyForSectionListItem = 0;

    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <h1>Контактная информация</h1>

                <table className={s.table}>
                    <tbody>
                    {state.info.map((item) => (
                        <tr key={'tableRow-' + keyForSectionListItem++}>
                            <td className={s.table_left}>{item[0]}</td>
                            <td className={s.table_right}>{item[1]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className={s.map}>
                    <iframe title='Map' src='https://yandex.ru/map-widget/v1/?um=constructor%3A8ac6be1686f0b6c7bd42c3458c45c1e1de762a314d333558ba8f67bc1cb78354&amp;source=constructor'/>
                </div>

            </section>
        </article>
    )
};

export default Contacts;