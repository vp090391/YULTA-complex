import React, {Component} from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            selectedPage: null,
            links: {
                laboratory: {
                    title: 'Проведение \n испытаний',
                    sublinks: {
                        request: 'Подать заявку на испытания',
                        accreditation: 'Область аккредитации'
                    }
                },
                certification: {
                    title: 'Сертификация \n продукции',
                    sublinks: {
                        tr_2009_013_by: 'ТР 2009/013/ВY',
                        marks_of_conformity_and_accreditation: 'Применение знаков соответствия, \n' +
                            'знаков аккредитации',
                        complaints_and_appeals: 'Порядок рассмотрения жалоб и апелляций'
                    }
                },
                declaration: {
                    title: 'Декларирование \n соответствия',
                    sublinks: {
                        tr_2009_013_by: 'ТР 2009/013/ВY',
                        tr_ts_005_2011: 'ТР ТС 005/2011',
                        marks_of_conformity_and_accreditation: 'Применение знаков соответствия, \n' +
                            'знаков аккредитации',
                        complaints_and_appeals: 'Порядок рассмотрения жалоб и апелляций'
                    }
                },
                comments: {
                    title:  'Отзывы \n и предложения'
                },
                contacts: {
                    title:  'Контактная \n информация'
                },
            }
        }
    }

    observer = new MutationObserver(() => this.comparePathNames(window.location.pathname.slice(1)));

    componentDidMount() {
        let pathname = window.location.pathname.slice(1);
        this.setState({
            selectedPage: pathname ? pathname : ''
        });

        this.observer.observe(document, {subtree: true, childList: true});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.selectedPage !== this.state.selectedPage) {
            let pathname = window.location.pathname.slice(1);
            this.setState({
                selectedPage: pathname ? pathname : ''
            });
        }
    }

    componentWillUnmount() {
        this.observer.disconnect()
    }

    comparePathNames = (path) => {
        let lastPathName = this.state.selectedPage;
        if (lastPathName !== path ) {
            this.setState({
                selectedPage: path ? path : ''
            });
        }
    };


    render() {
        const { selectedPage,
            links } = this.state;
        return (
            <nav className={s.nav}>
                <div className={s.mainLinks}>
                    {Object.entries(links).map(( link, index ) => {
                        let clazz = {};
                        if (selectedPage && selectedPage.split('/')[0] === link[0]) {
                            clazz = {
                                background: 'rgba(91, 146, 229, 0.85)',
                                color: 'white',
                                border: '1px solid rgba(91, 146, 229, 0.6)',
                                boxShadow: '0 0 8px 1px rgba(91, 146, 229, 0.85)'
                            }
                        }
                        return (
                            <NavLink exact to={`/${link[0]}`}
                                     style={clazz}
                                     onClick={() => this.comparePathNames(link[0])}
                                     key={index}>
                                <h2>{link[1].title}</h2>
                            </NavLink>
                        )
                    })}
                </div>

                <div className={s.subLinks}>
                    { selectedPage ?
                        Object.entries(links).map(( link) => {
                            if (selectedPage.split('/')[0] === link[0] && link[1].sublinks) {
                                return (
                                    Object.entries(link[1].sublinks).map((sublink, index ) => {
                                        return (
                                            <NavLink exact to={`/${link[0]}/${sublink[0]}`}
                                                     activeClassName={s.activeLink}
                                                     onClick={() => this.comparePathNames(sublink[0])}
                                                     key={index}>
                                                <h3>{sublink[1]}</h3>
                                            </NavLink>
                                        )
                                    })
                                )
                            }
                            return null
                        })
                        : null  }
                </div>
            </nav>
        )
    }
}

/*const Nav = () => {

};*/

export default Nav;