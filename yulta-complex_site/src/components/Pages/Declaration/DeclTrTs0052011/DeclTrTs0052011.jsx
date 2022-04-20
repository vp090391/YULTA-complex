import React from 'react';
import s from './DeclTrTs0052011.module.scss';
import zayavkaNaDeclaraciy from './assets/Заявление на регистрацию декларации ТР ТС 005 2011.docx';
import formaDeclaracii from './assets/Форма декларации о соответствии ТР ТС 005 2011.docx';

const DeclTrTs0052011 = () => {
    return (
        <article className={s.article_wrapper}>
            <section className={s.section}>
                <section>
                    <h1>ТР 005/2011 «О безопасности упаковки»</h1>
                    <a href='http://www.eurasiancommission.org/ru/act/texnreg/deptexreg/tr/Documents/TR%20TS%20Upakovka.pdf '
                       target='_blank'
                       rel="noopener noreferrer"
                       title='Посмотреть документ'>Ссылка на регламент
                    </a>

                    <p>Орган по сертификации продукции (аттестат аккредитации  BY/112 131.01 от 30.03.2022) проводит работы по декларированию соответствия в соответствии с&ensp;
                        <a href='https://bsca.by/ru/registry/view?id=6883'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть область аккредитации'>областью аккредитации&ensp;
                        </a>
                        на соответствие требованиям технического регламента Евразийского экономического союза (Таможенного союза)&ensp;
                        <a href='http://www.eurasiancommission.org/ru/act/texnreg/deptexreg/tr/Documents/TR%20TS%20Upakovka.pdf'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>«ТР ТС 005/2011.
                        </a>
                    </p>
                </section>

                <section>
                    <h2>Для регистрации декларации о соответствии заявитель подаёт в орган по сертификации:</h2>

                    <section>
                        <h3>- заявление о регистрации декларации о соответствии (на ТР ЕАЭС / ТР ТС)&ensp;
                            <a href={zayavkaNaDeclaraciy}
                               download='Заявление на регистрацию декларации ТР ТС 005 2011'
                               title='Скачать'> (скачать)
                            </a>
                        </h3>
                        <h3>-  декларацию о соответствии требованиям технического регламента ЕАЭС (ТС)&ensp;
                            <a href={formaDeclaracii}
                               download='Декларация о соответствии ТР ТС 005/2011'
                               title='Скачать'> (скачать)
                            </a>
                        </h3>
                    </section>
                </section>

                <section>
                    <p>
                        <a href='http://media.belgim.by/%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B8%20%D0%B4%D0%B5%D0%BA%D0%BB%D0%B0%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/Pravoformlen-DS-TR-EAESRes-Kollegii-EEK-No154022019.pdf'
                           target='_blank'
                           rel="noopener noreferrer"
                           title='Посмотреть документ'>Правила оформления декларации о соответствии требованиям технического регламента  ЕАЭС (ТС)- доказательственные материалы
                        </a>
                    </p>
                </section>

                <section>
                    <h2>Доказательственные материалы</h2>
                    <p>
                        При декларировании соответствия изготовитель (уполномоченное изготовителем лицо), импортер самостоятельно формирует доказательственные материалы в целях подтверждения соответствия упаковки (укупорочных средств) требованиям настоящего технического регламента.
                    </p>
                    <p>Доказательственные материалы для принятия декларации о соответствии должны включать в себя:</p>
                    <p>- протокол (протоколы) испытаний, проведенных изготовителем (уполномоченным изготовителем лицом), импортером и (или) аккредитованной испытательной лабораторией (центром), включенной в Единый реестр органов по сертификации и испытательных лабораторий (центров) Таможенного союза, подтверждающий соответствие декларируемым требованиям (при условии, что с момента оформления протокола (протоколов) прошло не более одного года);</p>
                    <p>- перечень стандартов, требованиям которых должна соответствовать упаковка (укупорочные средства), из Перечня стандартов, указанных в пункте 2 статьи 4 ТР ТС 005/2011;</p>
                    <p>- описание принятых технических решений, подтверждающих выполнение требований ТР ТС 005/2011, если стандарты, указанные в пункте 2 статьи 4, отсутствуют или не применялись;</p>
                    <p>- другие документы, подтверждающие соответствие упаковки (укупорочных средств) требованиям ТР ТС 005/2011, в том числе сертификат соответствия на систему менеджмента или акт (протокол) оценки системы менеджмента (при наличии), сертификат (сертификаты) соответствия на конкретный тип упаковки (укупорочных средств) (при наличии), сертификат (сертификаты) соответствия или протоколы испытаний на материалы (при наличии).</p>
                    <p>- свидетельство о государственной регистрации юридического лица или физического лица в качестве индивидуального предпринимателя</p>
                    <p>- договор с изготовителем (в том числе иностранным изготовителем), предусматривающий обеспечение соответствия поставляемой продукции техническим требованиям и ответственность за несоответствие такой продукции указанным требованиям (для уполномоченного изготовителем лица)</p>
                </section>

                <section><p className={s.bolded}>Документы, прилагаемые к заявке на проведение работ по декларированию соответствия, ДОЛЖНЫ БЫТЬ ЗАВЕРЕНЫ подписью и печатью (при наличии) Заявителя.
                    <br/>Заявитель несёт ответственность за достоверность представленных документов.
                </p></section>
            </section>
        </article>
    )
};

export default DeclTrTs0052011;