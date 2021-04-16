import React from 'react';
import SwiperCore, {Navigation, A11y, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import s from '../Accreditation.module.scss'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const SwiperComponent = (props) => {

    let state = props.state;
    let swiperImageAltCounter = state.swiperImages.large.length - 1;
    let swiperImageH3Counter = state.swiperImages.large.length - 1;
    let imgArrayLength = state.swiperImages.large.length - 1;

    let keyForSlide = 0;
    let slides;
    let bodyWidth = document.body.clientWidth;
    let sliderNavigationToggle = true;
    if (bodyWidth < 320) {
        slides = 1;
        sliderNavigationToggle = false
    }
    if (bodyWidth >= 320) {
        slides = 2;
        sliderNavigationToggle = false
    }
    if (bodyWidth >= 560) {
        slides = 3;
        sliderNavigationToggle = true
    }

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={slides}
            navigation={sliderNavigationToggle}
            pagination={{clickable: true}}
            loop={true}
            autoplay
        >
            {state.swiperImages.large.reverse().map((slide) => (
                <SwiperSlide key={'slide_' + keyForSlide++}>
                    <a href={slide} target='_blank' rel="noopener noreferrer">
                        <div className={s.img_container}>
                            <img src={state.swiperImages.small[imgArrayLength--]} alt={state.swiperImages.alt[swiperImageAltCounter--]}/>
                            <h3>{state.swiperImages.alt[swiperImageH3Counter--]}</h3>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;