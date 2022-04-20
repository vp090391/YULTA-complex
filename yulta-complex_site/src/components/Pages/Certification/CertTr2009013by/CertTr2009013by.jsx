import React from 'react';
import s from './CertTr2009013by.module.scss';
import zayavkaNaCerteficaciy from './assets/Заявка на сертификацию продукции.docx';
import zayavkaNaIzgotovlenieKopii from './assets/Заявка на изготовление копий сертификатов.doc';
import zayavkaNaOtborObrazcov from './assets/Заявка на изготовление копий сертификатов.doc';

const CertTr2009013by = () => {
    const state = {
        listItems: [
            'Арматура, арматурные изделия.',
            'Арматура трубопроводная для устройства трубопроводов наружных сетей и внутренних систем газоснабжения, водоснабжения, канализации, водоотведения, отопления: смесители, полотенцесушители и др.',
            'Заполнители для бетонов и растворов: гравий, щебень, песок, керамзит и др.',
            'Элементы зенитных фонарей.',
            'Изделия бетонные и железобетонные: ограждения и плиты балконов и лоджий, сваи, колонны, блоки, панели, балки и др.',
            'Изделия для заполнения проемов: окна, блоки дверные, элементы остекления балконов и лоджий, витражи, ворота.',
            'Изделия для наружных систем сбора и отвода дождевых вод.',
            'Изделия для устройства стен, покрытий, перекрытий и перегородок: блоки бетонные, плиты гипсовые и др.',
            'Изделия профильные погонажные из полимерных материалов для внутренней и наружной отделки зданий, профили поливинилхлоридные для окон и дверей и др.',
            'Материалы лакокрасочные фасадные, а также материалы (грунтовки) для защиты от коррозии.',
            'Материалы и изделия кровельные и гидроизоляционные: черепица, плитки и материалы рулонные кровельные, мастики кровельные, профили стальные для кровель и др.',
            'Материалы вяжущие: цемент, портландцемент, известь, гипсовые вяжущие и др.',
            'Материалы и изделия из древесины и древесных материалов: детали профильные, изделия паркетные, плиты, стойки, балки, изделия и конструкции деревянные и др.',
            'Материалы и изделия изоляционные, звукоизоляционные, теплоизоляционные, герметизирующие и уплотняющие.',
            'Материалы и изделия отделочные и облицовочные для внутренней и наружной отделки сооружений: плиты и плитки облицовочные, штукатурки, шпатлёвки, грунтовки, материалы лакокрасочные (эмали), камни стеновые, листы гипсокартонные и др.',
            'Материалы и изделия для устройства покрытия пола: линолеум, покрытия для полов рулонные и штучные и др.',
            'Металлические изделия и конструкции: лестничные марши, ограждения, площадки, профили стальные, конструкции стальные, конвекторы, радиаторы, воздуховоды, дымовые трубы и др.',
            'Панели стен, покрытий, перекрытий и перегородок.',
            'Смеси и добавки для бетонов и растворов: смеси растворные и растворы строительные, смеси бетонные, составы полиминеральные, бетоны напрягающие и др.',
            'Стекло строительное и изделия строительного назначения из него: стеклопакеты, стекло: листовое, закаленное, окрашенное в массе, многослойное, защитное, с покрытиями и др.',
            'Трубы и фасонные части к ним для устройства трубопроводов наружных сетей и внутренних систем газоснабжения, водоснабжения, канализации, водоотведения, отопления: трубы и фасонные части полимерные, металлополимерные, полиэтиленовые, стальные, чугунные и др.',
            'Штучные стеновые материалы: камни, плиты, блоки, кирпичи и др.'
        ]
    };

    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <section>
                    <h1>ТР 2009/013/ВY «Здания и сооружения, строительные материалы и изделия. Безопасность»</h1>

                    <p>
                        Обязательной сертификации подлежат строительные материалы и изделия указанные в ПЕРЕЧНЕ строительных материалов и изделий, подлежащих подтверждению соответствия существенным требованиям безопасности технического регламента Республики Беларусь&ensp;
                        <a href='https://stn.by/files/tr13i.pdf'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>ТР 2009/013/ВY «Здания и сооружения, строительные материалы и изделия. Безопасность».
                        </a>
                    </p>

                    <p>Номенклатура показателей, контролируемых при проведении обязательной сертификации строительной продукции, установлена в&ensp;
                        <a href='https://stn.by/files/pvs_20161104.pdf'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>Перечне технических нормативных правовых актов, взаимосвязанных с ТР 2009/013/BY.
                        </a>
                    </p>

                    <p>Добровольная сертификация проводится по инициативе производителя (поставщика) в отношении продукции, не указанной в ПЕРЕЧНЕ строительных материалов и изделий, подлежащих подтверждению соответствия существенным требованиям безопасности технического регламента Республики Беларусь&ensp;
                        <a href='https://stn.by/files/tr13i.pdf'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>ТР 2009/013/ВY «Здания и сооружения, строительные материалы и изделия. Безопасность».
                        </a>
                    </p>

                    <p>При добровольной сертификации строительных материалов и изделий изготовитель (поставщик) самостоятельно выбирает государственные стандарты (ГОСТ, СТБ и др.) и номенклатуру показателей для проведения сертификации.
                    </p>
                </section>

                <section>
                    <h2>Перечень документов для проведения сертификации:</h2>

                    <section>
                        <h3>1. Заявка на сертификацию продукции&ensp;
                            <a href={zayavkaNaCerteficaciy}
                               download='Заявка на сертификацию продукции'
                               title='Скачать'> (скачать)
                            </a>
                        </h3>

                        <h3>2. Заявка на изготовление копий сертификата соответствия&ensp;
                            <a href={zayavkaNaIzgotovlenieKopii}
                               download='Заявка на изготовление копий сертификата соответствия'
                               title='Скачать'> (скачать)
                            </a>
                        </h3>

                        <h3>3. Заявка на проведение отбора образцов&ensp;
                            <a href={zayavkaNaOtborObrazcov}
                               download='Заявка на проведение отбора образцов'
                               title='Скачать'> (скачать)
                            </a>
                        </h3>

                        <p className={s.bolded}>Документы, прилагаемые к заявке на проведение работ по подтверждению соответствия, ДОЛЖНЫ БЫТЬ ЗАВЕРЕНЫ подписью и печатью (при наличии) заявителя.
                            <br/>Заявитель несёт ответственность за достоверность представленных документов.
                        </p>
                    </section>

                    <section>
                        <h2>Мы проводим работы по сертификации следующих видов продукции:</h2>

                        <ul>
                            {state.listItems.map((item, index) => (
                                <li key={index}>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </section>
        </article>
    )
};

export default CertTr2009013by;