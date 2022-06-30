import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo_wrapper}>
                <a className={s.logo}
                   href='http://yulta.by/'
                   title='yulta.by'>
                </a>
            </div>

            <div className={s.phoneImage_wrapper}>
                <a className={s.phoneImage}
                   href='tel:+88002225460'
                   title='Позвонить'>
                </a>
            </div>

            <div className={s.phoneNumbers_wrapper}>
                <ul className={s.phoneNumbers}>
                    <li>
                        <a href='tel:+375175076853'
                           title='Позвонить'>
                            Офис (тел/факс): +375 17 507-68-53
                        </a>
                    </li>
                    <li>
                        <a href='tel:+375293357490'
                           title='Позвонить'>
                            Испытательная лаборатория: +375 29 335-74-90
                        </a>
                    </li>
                    <li>
                        <a href='tel:+375296443076'
                           title='Позвонить'>
                            Орган по сертификации: +375 29 644-30-76
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
                <ul className={s.mail}>
                    <li>e-mail:</li>
                    <li>
                        <a href='mailto:info@yulta.by?subject=Заявка_на_испытания'
                           title='Написать письмо'>
                            info@yulta.by
                        </a>
                    </li>
                    <li>
                        <a href='mailto:sert@yulta.by?subject=Заявка_на_сертификацию'
                           title='Написать письмо'>
                            sert@yulta.by
                        </a>
                    </li>
                </ul>
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
                    РБ, Минский р-н,<br/>Щомыслицкий с/с,<br/>д. 114, пом. 106<br/>
                    <span>(Меньковский тракт 19)</span>
                </a>
            </div>
        </header>
    )
};

export default Header;