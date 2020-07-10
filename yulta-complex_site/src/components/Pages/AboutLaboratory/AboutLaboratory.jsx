import React from 'react';
import s from './AboutLaboratory.module.scss'

const AboutLaboratory = (props) => {
    let state = props.aboutLaboratoryPage;

    return (
        <article className={s.article_wrapper}>
            <aside className={s.aside}>
                Aside
            </aside>

            <section className={s.section}>
                {state.message}
            </section>

            <aside className={s.slider}>
                Slider
            </aside>
        </article>
    )
};

export default AboutLaboratory;