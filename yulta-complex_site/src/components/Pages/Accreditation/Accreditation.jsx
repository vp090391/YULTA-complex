import React from 'react';
import s from './Accreditation.module.scss'
import accreditationPdf from '../../../assets/Pages/3_Accreditation/Oblast akkreditacii_YULTA-complex_Full.pdf'
import ModalImage from "react-modal-image";
import SwiperComponent from './Swiper/Swiper';

const Accreditation = (props) => {
    let state = props.accreditationPage;
    let keyForSectionListItem = 0;

    return (
        <article className={s.article_wrapper}>
            <section className={s.section_1}>
                <h1>{state.header}</h1>

                <p>
                    <a href={state.links.goTo.href}
                       title={state.links.goTo.title}
                       target="_blank">
                        {state.links.goTo.content}
                    </a>
                </p>
                <p>
                    <a href={accreditationPdf}
                       title={state.links.download.title}
                       download='ЮЛТА-комплекс_Область аккредитации'>
                        {state.links.download.content}
                    </a>
                </p>

                <h2>{state.article.section_1.header}</h2>
                <ul>
                    {state.article.section_1.listItems.map((item) => (
                        <li key={'section_1-' + keyForSectionListItem++}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <aside className={s.aside_1}>
                <ModalImage
                    small={state.article.section_1.images["1"].src.small}
                    large={state.article.section_1.images["1"].src.large}
                    alt={state.article.section_1.images["1"].alt}
                    hideZoom={true}
                />
                <ModalImage
                    small={state.article.section_1.images["2"].src.small}
                    large={state.article.section_1.images["2"].src.large}
                    alt={state.article.section_1.images["2"].alt}
                    hideZoom={true}
                />
            </aside>

            <section className={s.section_2}>
                <h2>{state.article.section_2.header}</h2>

                <ul>
                    {state.article.section_2.listItems.map((item) => (
                        <li key={'section_2-' + keyForSectionListItem++}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <aside className={s.aside_2}>
                <ModalImage
                    small={state.article.section_2.image.src.small}
                    large={state.article.section_2.image.src.large}
                    alt={state.article.section_2.image.alt}
                    hideZoom={true}
                />
            </aside>

            <section className={s.section_3}>
                <h2>{state.article.section_3.header}</h2>

                <ul>
                    {state.article.section_3.listItems.map((item) => (
                        <li key={'section_3-' + keyForSectionListItem++}>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <aside className={s.aside_3}>
                <ModalImage
                    small={state.article.section_3.image.src.small}
                    large={state.article.section_3.image.src.large}
                    alt={state.article.section_3.image.alt}
                    hideZoom={true}
                />
            </aside>

            <aside className={s.swiper}>
                <SwiperComponent state={state}/>
            </aside>
        </article>
    )
};

export default Accreditation;