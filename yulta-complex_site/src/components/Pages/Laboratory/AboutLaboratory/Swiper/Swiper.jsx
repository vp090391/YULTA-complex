import React from 'react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperComponent = (props) => {
    let images = props.images;

    let sliderCount = 0;
    let keyForSlide = 0;

    let slides = 6;
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

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={slides}
            navigation={sliderNavigationToggle}
            pagination={{clickable: true}}
            loop={true}
            autoplay
        >

            {images.mls.large.map((slide) => (
                <SwiperSlide key={'slide_' + keyForSlide++}>
                    <a href={slide} target='_blank' rel="noopener noreferrer"><img src={images.mls.small[sliderCount++]} alt={images.mls.alt}/></a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;