import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.logo_wrapper}>
                <a className={s.logo}
                   href='http://yulta.by/'
                   title='yulta.by'>
                </a>
            </div>

            <div className={s.phoneImage_wrapper}>
                <a className={s.phoneImage}
                   href='tel:+375175076853'
                   title='Позвонить'>
                </a>
            </div>

            <div className={s.phoneNumbers_wrapper}>
                <ul className={s.phoneNumbers}>
                    <li>
                        <a href='tel:+375175076853'
                           title='Офис (тел/факс)'>
                            +375 (17) 507-68-53
                        </a>
                    </li>
                    <li>
                        <a href='tel:+375293235984'
                           title='Директор'>
                            +375 (29) 323-59-84
                        </a>
                    </li>
                    <li>
                        <a href='tel:+375296113146'
                           title='Заместитель директора'>
                            +375 (29) 611-31-46
                        </a>
                    </li>
                </ul>
            </div>

            <div className={s.mailImage_wrapper}>
                <a className={s.mailImage}
                   href='mailto:info@yulta.by?subject=Заявка_на_испытания'
                   title='Написать письмо'>
                </a>
            </div>

            <div className={s.mail_wrapper}>
                <a className={s.mail}
                   href='mailto:info@yulta.by?subject=Заявка_на_испытания'
                   title='Написать письмо'>
                    info@yulta.by
                </a>
            </div>

            <div className={s.coordinatesImage_wrapper}>
                <a className={s.coordinatesImage}
                   href={'geo:53.847473,27.417095'}
                   title='Местоположение'>
                </a>
            </div>

            <div className={s.coordinates_wrapper}>
                <a className={s.coordinates}
                   href={'geo:53.847473,27.417095'}>
                    РБ, г. Минск <br/> Меньковский тракт 19 <br/> кабинет 106
                </a>
            </div>
        </footer>
    )
};

export default Footer;