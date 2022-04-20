import React from 'react';
import s from './Accreditation.module.scss'
import accreditationPdf from './assets/Oblast akkreditacii_YULTA-complex_Full.pdf'
import ModalImage from "react-modal-image";
import SwiperComponent from './Swiper/Swiper';

import image1 from "./assets/Foto/1_Calipers.jpg";
import image1_small from "./assets/Foto/1_Calipers_small.jpg";
import image2 from "./assets/Foto/2_Test-tubes.jpg";
import image2_small from "./assets/Foto/2_Test-tubes_small.jpg";
import image3 from "./assets/Foto/3_Water-resistance.JPG";
import image3_small from "./assets/Foto/3_Water-resistance_small.jpg";
import image4 from "./assets/Foto/4_Soil-compaction.jpg";
import image4_small from "./assets/Foto/4_Soil-compaction_small.jpg";
import slideImg1 from "./assets/Foto/SliderImages/Large/1_Breakout-force.JPG";
import slideImg3 from "./assets/Foto/SliderImages/Large/3_Abrasion_of_laminate.jpg";
import slideImg4 from "./assets/Foto/SliderImages/Large/4_Stretching_slab_materials.JPG";
import slideImg6 from "./assets/Foto/SliderImages/Large/6_Staircase_testing.jpg";
import slideImg7 from "./assets/Foto/SliderImages/Large/7_Adhesive_test.jpg";
import slideImg8 from "./assets/Foto/SliderImages/Large/8_Ceramic_tile_test.jpg";
import slideImg9 from "./assets/Foto/SliderImages/Large/9_Water_absorption_of_thermal_insulation_materials.jpg";
import slideImg10 from "./assets/Foto/SliderImages/Large/10_Concrete_testing.jpg";
import slideImg11 from "./assets/Foto/SliderImages/Large/11_Geometric_dimensions_of_ceramic_tiles.jpg";
import slideImg12 from "./assets/Foto/SliderImages/Large/12_Pulling_fiberglass_reinforcement_out_of_concrete.jpg";
import slideImg13 from "./assets/Foto/SliderImages/Large/13_Tensile_testing_of_plastic_pipes.jpg";
import slideImg1_small from "./assets/Foto/SliderImages/Small/1_Breakout-force.JPG";
import slideImg3_small from "./assets/Foto/SliderImages/Small/3_Abrasion_of_laminate.jpg";
import slideImg4_small from "./assets/Foto/SliderImages/Small/4_Stretching_slab_materials.JPG";
import slideImg6_small from "./assets/Foto/SliderImages/Small/6_Staircase_testing.jpg";
import slideImg7_small from "./assets/Foto/SliderImages/Small/7_Adhesive_test.jpg";
import slideImg8_small from "./assets/Foto/SliderImages/Small/8_Ceramic_tile_test.jpg";
import slideImg9_small from "./assets/Foto/SliderImages/Small/9_Water_absorption_of_thermal_insulation_materials.jpg";
import slideImg10_small from "./assets/Foto/SliderImages/Small/10_Concrete_testing.jpg";
import slideImg11_small from "./assets/Foto/SliderImages/Small/11_Geometric_dimensions_of_ceramic_tiles.jpg";
import slideImg12_small from "./assets/Foto/SliderImages/Small/12_Pulling_fiberglass_reinforcement_out_of_concrete.jpg";
import slideImg13_small from "./assets/Foto/SliderImages/Small/13_Tensile_testing_of_plastic_pipes.jpg";

const Accreditation = () => {
    const state = {
        article: {
            section_1: {
                header: 'ИЛ ООО «ЮЛТА-комплекс» испытывает строительные материалы и продукцию \n' +
                    '(ТР 2009/013/BY, ТР ТС 010/2011, ТР ТС 032/2013, ТНПА на продукцию):',
                listItems: [
                    'Изделия паркетные, паркет, фанера, плиты ДСП, ДВП',
                    'Покрытия напольные ламинированные',
                    'Древесина, детали и изделия из древесины',
                    'Сталь арматурная, арматурные изделия и закладные детали',
                    'Арматура стеклопластиковая',
                    'Линолеум',
                    'Прокат тонколистовой и профили стальные и алюминиевые',
                    'Черепица керамическая, из термопласткомпозитов, цементно песчаная',
                    'Плитки кровельные битумные, битумно полимерные',
                    'Материалы рулонные кровельные и гидроизоляционные',
                    'Болты, винты, шпильки, заклепки',
                    'Плитки керамические',
                    'Материалы и изделия строительные теплоизоляционные',
                    'Листы и изделия асбестоцементные',
                    'Материалы геосинтетические',
                    'Фонари зенитные аэрационные и светоаэрационные металлические и их элементы',
                    'Фермы стропильные стальные для производственных зданий',
                    'Лестничные марши, площадки и ограждения лестниц, балконов и крыш стальные',
                    'Трубы полимерные, фасонные части, соединительные узлы и детали к ним',
                    'Трубы и фасонные части из пластифицированного поливинилхлорида',
                    'Трубы из полиэтилена для газопроводов',
                    'Трубы полиэтиленовые гофрированные дренажные',
                    'Трубы стальные',
                    'Трубы чугунные и фасонные части к ним',
                    'Трубы стеклянные и фасонные части к ним',
                    'Трубы медные, латунные, алюминиевые и из алюминиевых сплавов',
                    'Трубы и изделия стальные предварительно термоизолированные пенополиуретаном',
                    'Трубы оболочки из полиэтилена для пи труб и изделий к ним',
                    'Трубы и муфты хризотилцементные',
                    'Трубы керамические',
                    'Соединения трубопроводов',
                    'Затворы, клапаны, задвижки, краны, регуляторы',
                    'Арматура санитарно техническая водоразборная (смесители) и водосливная',
                    'Приборы отопительные',
                    'Воздуховоды металлические',
                    'Конструкции стальные строительные',
                    'Материалы и изделия стальные металлические для кровель и наружной облицовки фасадов',
                    'Профили стальные для строительных конструкций',
                    'Материалы и изделия из пластических масс',
                    'Смеси и растворы строительные, бетонные',
                    'Композиции (Составы) защитно-отделочные: минеральные, полимерные и полимер-минеральные, клеевые, штукатурные, шпаклевочные, ремонтные и другие',
                    'Клеи. Герметики. Мастики клеящие и герметизирующие',
                    'Смеси бетонные, растворы строительные',
                    'Материалы лакокрасочные'
                ],
                images: {
                    1: {
                        alt: '',
                        src:
                            {
                                large: image1,
                                small: image1_small
                            },
                    },
                    2: {
                        alt: '',
                        src: {
                            large: image2,
                            small: image2_small
                        },
                    },
                },
            },
            section_2: {
                header: 'Упаковка, средства укупорочные (ТР ТС 005/2011 «О безопасности упаковки»):',
                listItems: [
                    'Тара стеклянная',
                    'Тара потребительская полимерная',
                    'Упаковка полимерная и комбинированная',
                    'Тара транспортная металлическая',
                    'Банки металлические, алюминиевые',
                    'Тара и упаковка из картона и бумаги',
                    'Тара и упаковка деревянная',
                    'Средства укупорочные',
                ],
                image: {
                    alt: 'Водостойкость стеклянной тары',
                    src:
                        {
                            large: image3,
                            small: image3_small
                        },
                }
            },
            section_3: {
                header: 'Контроль качества выполнения строительно-монтажных работ:',
                listItems: [
                    'Отделочные работы',
                    'Заполнение оконных и дверных проемов',
                    'Устройство полов',
                    'Устройство дорожных покрытий пешеходных зон из тротуарных плит',
                    'Устройство антикоррозийных покрытий',
                    'Изоляционные работы',
                    'Устройство тепловой изоляции наружных ограждающих конструкций зданий и сооружений',
                    'Вырыв крепежных элементов их основания',
                    'Устройство кровель',
                    'Монтаж систем внутренних инженерных систем зданий и сооружений',
                    'Монтаж легких ограждающих конструкций',
                    'Монтаж деревянных конструкций',
                    'Монтаж стальных конструкций',
                    'Монтаж сборных бетонных и железобетонных конструкций',
                    'Возведение монолитных бетонных и железобетонных конструкций',
                    'Монтаж каменных и армокаменных конструкций',
                    'Устройство оснований, фундаментов зданий и сооружений',
                    'Коэффициент уплотнения основания',
                    'Монтаж наружных сетей и сооружений, водоснабжения и канализации',
                    'Монтаж тепловых сетей',
                ],
                image: {
                    alt: 'Контроль уплотнения основания',
                    src:
                        {
                            large: image4,
                            small: image4_small
                        },
                }
            }
        },
        swiperImages: {
            alt: [
                'Вырыв крепежных элементов из основания',
                /*
                            'Стойкость труб и фасонных частей в условиях «вода в воде»',
                */
                'Истираемость ламината',
                'Предел прочности при растяжении плитных материалов',
                /*
                            'Испытание стеклопластиковой арматуры на растяжение',
                */
                'Испытание лестниц',
                'Испытание клеевых соединений',
                'Водопоглощение керамической плитки',
                'Водопоглощение теплоизоляционных материалов',
                'Испытание бетонов',
                'Измерение размеров керамической плитки',
                'Вырыв стеклопластиковой арматуры из бетона',
                'Испытание полимерных труб на растяжение',
            ],
            large: [slideImg1, /*slideImg2,*/ slideImg3, slideImg4, /*slideImg5,*/ slideImg6, slideImg7, slideImg8, slideImg9,slideImg10, slideImg11, slideImg12, slideImg13],
            small: [slideImg1_small, /*slideImg2_small,*/ slideImg3_small, slideImg4_small, /*slideImg5_small,*/ slideImg6_small, slideImg7_small, slideImg8_small, slideImg9_small,slideImg10_small, slideImg11_small, slideImg12_small, slideImg13_small],
        },
    };

    let keyForSectionListItem = 0;

    return (
        <article className={s.article_wrapper}>
            <section className={s.section_1}>
                <h1>Область аккредитации</h1>

                <p>
                    <a href='https://bsca.by/ru/registry-testlab/view?id=5726'
                       title='Перейти на сайт БГЦА'
                       target="_blank"
                       rel="noopener noreferrer">
                        Ознакомиться с полной областью аккредитации лаборатории Вы можете на сайте Государственного предприятия «БГЦА».
                    </a>
                </p>
                <p>
                    <a href={accreditationPdf}
                       title='Скачать'
                       download='ЮЛТА-комплекс_Область аккредитации'>
                        Скачать область аккредитации с нашего сайта (PDF файл)
                    </a>
                </p>

                <h2>
                    ИЛ ООО «ЮЛТА-комплекс» испытывает строительные материалы и изделия
                    <br/> (ТР 2009/013/BY, ТР ТС 010/2011, ТР ТС 032/2013, ТР ТС 005/2011, ТНПА на продукцию):
                </h2>
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
                <h2>Упаковка, средства укупорочные (ТР ТС 005/2011 «О безопасности упаковки»):</h2>

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
                <h2>Контроль качества выполнения строительно-монтажных работ:</h2>

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