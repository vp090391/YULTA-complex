import React from 'react';
import s from './MakeRequest.module.scss'

const MakeRequest = (props) => {
    let state = props.makeRequestPage;

    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <h1>{state.header}</h1>
                <p>{state.paragraf.slice(0, -14)}
                    <a href={state.emailHref}
                       title='Написать письмо'>{state.paragraf.slice(-14,)}
                    </a>
                </p>
                <section>
                    <h2>{state.docsList.header}</h2>
                    <section>
                        <h3>{state.docsList.list["1"].header}</h3>
                        <p>{state.docsList.list["1"].paragraf}</p>
                    </section>

                    <section>
                        <h3>{state.docsList.list["2"].header.slice(0, -42)}
                            <a href={state.docsList.list["2"].example}
                               download='Акт_отбора'
                               title='Скачать'>{state.docsList.list["2"].header.slice(-42,)}
                            </a>
                        </h3>
                        <p>{state.docsList.list["2"].paragraf["1"]}</p>
                        <p>{state.docsList.list["2"].paragraf["2"]}</p>
                    </section>

                    <section>
                        <h3>{state.docsList.list["3"].header.slice(0, -42)}
                            <a href={state.docsList.list["3"].example}
                               download='Программа_испытаний'
                               title='Скачать'>{state.docsList.list["3"].header.slice(-42,)}
                            </a>
                        </h3>
                        <p>{state.docsList.list["3"].paragraf}</p>
                    </section>

                </section>
            </section>

            <aside className={s.aside}>

            </aside>
        </article>
    )
};

export default MakeRequest;