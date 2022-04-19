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
                        request: 'Подать заявку \n на испытания',
                        accreditation: 'Область \n аккредитации'
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
                        tr_ts_005_2011: 'ТР 2009/013/ВY',
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

    componentDidMount() {
        let pathname = window.location.pathname.slice(1);
        this.setState({
            selectedPage: pathname ? pathname : ''
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.selectedPage !== this.state.selectedPage) {
            let pathname = window.location.pathname.slice(1);
            this.setState({
                selectedPage: pathname ? pathname : ''
            });
        }
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
                                color: 'white'
                            }
                        }
                        return (
                            <NavLink exact to={`/${link[0]}`}
                                     className={`${clazz}`}
                                     style={clazz}
                                     activeClassName={s.activeLink}
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