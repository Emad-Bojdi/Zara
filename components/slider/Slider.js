import React, { useRef, useState } from 'react';
// Import Swiper React components

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './styles.module.css';

// import required modules
import { Navigation ,Autoplay, Pagination ,Scrollbar } from 'swiper/modules';
import next from 'next';



export default function App() {


  return (
    <div className={styles.mySwiper}>
      <Swiper centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl:'.swiper-button-prev',
          
        }}
        modules={[Autoplay, Pagination, Navigation]} className={styles.mySwiper}>
          {/* <div className="button-attr">
            <div className="button-swiper">
              <div className="swiper-button-prev swiper-button-disabled"></div>
              <div className="swiper-button-next swiper-button-disabled"></div>
            </div>
          </div> */}
        <SwiperSlide>
          <div className="flex flex-col justify-center">
            <img src='./Frame 18.svg' />
            <div className="flex flex-row my-5 justify-between">
              <p className="">X Trench Coat</p>
              <p className="">$59</p>
            </div>
            <img src='Line 13.svg' />
          </div>
        </SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center">
          <img src='./Frame 19.svg' />
          <div className="flex flex-row my-5 justify-between">
            <p className="">Golden Coat With Jacket</p>
            <p className="">$99</p>
          </div>
          <img src='Line 13.svg' />
        </div></SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center">
          <img src='./Frame 20.svg' />
          <div className="flex flex-row my-5 justify-between">
            <p className="">Neo White Jacket</p>
            <p className="">$49</p>
          </div>
          <img src='Line 13.svg' />
        </div></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}
