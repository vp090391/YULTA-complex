import React from 'react';
import s from './Contacts.module.scss'

const Contacts = (props) => {
    let state = props.contactsPage;
    let keyForSectionListItem = 0;

    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <h1>{state.header}</h1>

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
                    <iframe
                        title='Map'
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8ac6be1686f0b6c7bd42c3458c45c1e1de762a314d333558ba8f67bc1cb78354&amp;source=constructor"
                    />
                </div>

            </section>
        </article>
    )
};

export default Contacts;