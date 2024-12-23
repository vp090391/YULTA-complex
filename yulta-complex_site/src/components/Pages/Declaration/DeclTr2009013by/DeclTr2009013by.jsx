import React from 'react';
import s from './DeclTr2009013by.module.scss';
import zayavkaNaDeclaraciy from './assets/Заявление на регистрацию декларации ТР 2009 013 BY.docx';
import formaDeclaracii from './assets/Форма декларации о соответствии ТР 2009 013 ВY.docx';

const DeclTr2009013by = () => {
    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <section>
                    <h1>ТР 2009/013/ВY «Здания и сооружения, строительные материалы и изделия. Безопасность»</h1>
                    <a href='https://stn.by/files/tr13i.pdf'
                       target='_blank'
                       rel="noopener noreferrer"
                       title='Посмотреть документ'>Ссылка на регламент
                    </a>

                    <p>Декларирование соответствия проводится в соответствии с&ensp;
                        <a href='https://pravo.by/upload/docs/op/H11600437_1477688400.pdf'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>Законом Республики Беларусь от 24 октября 2016 г. № 437-З «Об оценке соответствия техническим требованиям и аккредитации органов по оценке соответствия»,
                        </a>
                        <a href='https://pravo.by/document/?guid=3871&p0=W21732456'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>«Правилами подтверждения соответствия Национальной системы подтверждения соответствия Республики Беларусь», утвержденными Постановлением Госстандарта Республики Беларусь от 25 июля 2017 г. № 61.
                        </a>
                    </p>
                </section>

                <section>
                    <h2>Для проведения регистрации декларации о соответствии заявитель подаёт в орган по сертификации: </h2>

                    <section>
                        <h3>- заявление на регистрацию декларации о соответствии (НСПС Республики Беларусь)&ensp;
                            <a href={zayavkaNaDeclaraciy}
                               download='Заявление на регистрацию декларации ТР 2009 013 ВY'
                               title='Скачать'> (скачать)
                            </a>
                        </h3>
                        <h3>- декларацию о соответствии (НСПС Республики Беларусь)&ensp;
                            <a href={formaDeclaracii}
                               download='Декларация о соответствии ТР 2009 013 ВY'
                               title='Скачать'> (скачать)
                            </a>
                        </h3>
                        <h3>- протоколы испытаний образцов продукции (типовых образцов продукции)</h3>
                        <h3>- копию технического свидетельства на бланках копий технического свидетельства </h3>
                        <h3>- сертификат соответствия на систему менеджмента качества, выданный в рамках Национальной Системы подтверждения соответствия Республики Беларусь (если предусмотрено схемой декларирования соответствия)</h3>
                        <h3>- свидетельство о государственной регистрации юридического лица или индивидуального предпринимателя в Республике Беларусь</h3>
                        <h3>- договор (контракт), накладная и другие товаросопроводительные документов (для продавца (поставщика))</h3>
                        <h3>- договор с изготовителем, в том числе иностранным изготовителем, на осуществление действия от имени этого изготовителя при оценке соответствия и выпуске в обращение продукции, а также ответственности за несоответствие продукции установленным требованиям (для уполномоченного изготовителем лица).</h3>

                        <p className={s.bolded}>Документы, прилагаемые к заявке на проведение работ по декларированию соответствия, ДОЛЖНЫ БЫТЬ ЗАВЕРЕНЫ подписью и печатью (при наличии) Заявителя.
                            <br/>Заявитель несёт ответственность за достоверность представленных документов.
                        </p>
                    </section>
                </section>

                <section>
                    <p>
                        <a href='https://pravo.by/document/?guid=12551&p0=C21700383&p1=1&p5=0'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>Постановление Совета Министров Республики Беларусь от 24.05.2017 № 383 «Об описании и порядке применения знака соответствия техническому регламенту Республики Беларусь и признании утратившим силу постановления Совета Министров Республики Беларусь от 21 июня 2011 г. № 810»
                        </a>
                    </p>
                </section>
            </section>
        </article>
    )
};

export default DeclTr2009013by;