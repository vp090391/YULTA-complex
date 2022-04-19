import React from 'react';
import s from './MakeRequest.module.scss'
import {NavLink} from "react-router-dom";

import zayavka from './assets/Заявка на проведение испытаний.docx';
import actOtbora from './assets/Акт отбора.docx';
import programma from './assets/Программа испытаний.docx';

const MakeRequest = () => {
    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <h1>Подать заявку на проведение испытаний</h1>
                <section className={s.section_1}>
                    <p>Для того, чтобы провести испытания продукции в ИЛ ООО «ЮЛТА-комплекс», осуществить контроль строительно-монтажных работ или же просто узнать стоимость испытаний, Вам необходимо сформировать документы на проведение испытаний и отправить их на электронную почту
                        <a href='mailto:info@yulta.by'
                           title='Написать письмо'> info@yulta.by
                        </a>
                    </p>
                    <p>После этого наши специалисты свяжутся с Вами.</p>
                    <p>Также, Вам необходимо будет подготовить образцы согласно ТНПА на продукцию и привезти их в нашу лабораторию.
                        <br/> Со схемой проезда можно ознакомиться в разделе
                        <NavLink to="/contacts">
                            «Контактная информация».
                        </NavLink>
                    </p>
                </section>

                <section>
                    <h2>Перечень документов для проведения испытаний:</h2>

                    <section>
                        <h3>1. Заявка
                            <a href={zayavka}
                               download='Заявка на проведение испытаний'
                               title='Скачать'> (скачать образец документа в формате .doc)
                            </a>
                        </h3>
                        <p>Документ оформляется на фирменном бланке организации-Заявителе в свободной форме. В документе должна быть указана следующая информация:
                            <br/>- виды испытаний, которые Вы бы хотели провести
                            <br/>- наименование продукции и изготовитель
                            <br/>- контактный телефон и электронная почта</p>
                    </section>

                    <section>
                        <h3>2. Акт отбора образцов
                            <a href={actOtbora}
                               download='Акт отбора'
                               title='Скачать'> (скачать образец документа в формате .doc)
                            </a>
                        </h3>
                        <p>
                            В акте отбора должно быть указано:
                            <br/>- где, когда и кем отбирались образцы
                            <br/>- полное наименование образцов продукции
                            <br/>- количество образцов (согласно ТНПА на продукцию)
                            <br/>- изготовитель продукции
                            <br/>- для тары и упаковки обязательно указать:
                        </p>
                        <p>
                            • максимальную массу (объём) упаковываемой продукции
                            <br/>• высоту штабелирования (в случае если продукция укладывается в штабель)
                            <br/>• указать воспринимает ли продукция нагрузку штабеля
                            <br/>• в случае, если продукция из картона и хранится в условиях с влажностью больше 70%, указать это
                        </p>
                    </section>

                    <section>
                        <h3>3. Программа испытаний
                            <a href={programma}
                               download='Программа испытаний'
                               title='Скачать'> (скачать образец документа в формате .doc)
                            </a>
                        </h3>
                        <p>
                            В программе испытаний указывается по каким конкретным показателям необходимо испытать продукцию, методы испытаний. Также необходимо указать ТНПА, на соответствие которому испытывается продукция, или же указать, что для получения фактических значений.
                        </p>
                    </section>

                </section>
            </section>

            <aside className={s.aside}>
                <div>
                    <iframe title='Form' src='https://forms.yandex.ru/u/5f719d65f41873759faedbfd/?iframe=1'/>
                </div>
            </aside>

        </article>
    )
};

export default MakeRequest;