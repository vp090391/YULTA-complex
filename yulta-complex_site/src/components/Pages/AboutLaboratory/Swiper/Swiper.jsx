import React from 'react';
import s from './Swiper.module.scss';
import SwiperCore, {Navigation, A11y, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ModalImage from "react-modal-image";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

const SwiperComponent = (props) => {

    let state = props.state;

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
    if (bodyWidth >= 412) {
        slides = 3;
        sliderNavigationToggle = false
    }
    if (bodyWidth >= 684) {
        slides = 4;
        sliderNavigationToggle = true
    }
    if (bodyWidth >= 767) {
        slides = 5;
        sliderNavigationToggle = true
    }
    if (bodyWidth >= 900) {
        slides = 6;
        sliderNavigationToggle = true
    }

    let keyForSlide = 0;

    //TODO ModalImage

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={slides}
            navigation={sliderNavigationToggle}
            pagination={{clickable: true}}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {state.images.mls.src.reverse().map((slide) => (
                <SwiperSlide key={'slide_' + keyForSlide++} zoom={true}>
                    {/*<ModalImage
                        small={slide}
                        large={slide}
                        alt={state.images.mls.alt}
                        hideZoom = {true}
                    />*/}

                    <img src={slide} alt={state.images.mls.alt}/>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;