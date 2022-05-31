import { Fragment, useState } from 'react';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import SlideControllerButton from './SlideControllerButton';

import 'swiper/css';
import 'swiper/css/pagination';
import useWindowSize from '../../../../hooks/useWindowSize';
import { screenConfig } from '../../../../script/config/config';

import heroIndomie from '../../../../asset/hero/hero-indomie.png';
import heroKapalApi from '../../../../asset/hero/hero-kapal-api.png';

const imgList = [
  {
    url: heroIndomie,
    altText: 'Indomie Mie Goreng Ayam Pop',
  },
  {
    url: heroKapalApi,
    altText: 'Kapal Api',
  },
  {
    url: heroIndomie,
    altText: 'Indomie Mie Goreng Ayam Pop',
  },
  {
    url: heroKapalApi,
    altText: 'Kapal Api',
  },
];

const Hero = () => {
  const [screenWidth, screenHeight] = useWindowSize();
  const [activeImage, setActiveImage] = useState(0);

  const swiper = useSwiper();

  const pagination = {
    clickable: true,
    type: 'custom',

    renderCustom: (swiper, current, total) => {
      setActiveImage(current);
    },
  };

  const HeroDesktopElement = (
    <div className="w-full bg-repeat bg-contain pt-16 pb-10">
      <Swiper
        slidesPerView={1.4}
        centeredSlides={true}
        spaceBetween={32}
        pagination={pagination}
        modules={[Pagination]}
        className="relative"
      >
        {imgList.map(({ url, altText }, index) => (
          <SwiperSlide key={index + 1}>
            <img
              src={url}
              alt={altText}
              className="w-full mx-auto object-cover object-center max-h-[600px] aspect-[2.09/1]"
            />
          </SwiperSlide>
        ))}

        <div className="swiper-custom-pagination flex flex-row gap-x-5 justify-center mt-12">
          {imgList.map((imgData, index) => {
            const isActive = index + 1 === activeImage;

            return (
              <SlideControllerButton
                key={index + 1}
                idx={index}
                isActive={isActive}
              />
            );
          })}
        </div>
      </Swiper>
    </div>
  );

  const HeroMobileElement = (
    <div className="w-full bg-repeat bg-contain pt-6 pb-4 px-4">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={32}
        pagination={pagination}
        modules={[Pagination]}
        className="relative"
        style={{
          zIndex: -1,
        }}
      >
        {imgList.map(({ url, altText }, index) => (
          <SwiperSlide key={index + 1}>
            <img
              src={url}
              alt={altText}
              className="w-full mx-auto object-cover object-center h-full max-h-[300px] aspect-[2.09/1]"
            />
          </SwiperSlide>
        ))}

        <div className="swiper-custom-pagination flex flex-row gap-x-5 justify-center mt-12">
          {imgList.map((imgData, index) => {
            const isActive = index + 1 === activeImage;

            return (
              <SlideControllerButton
                key={index + 1}
                idx={index}
                isActive={isActive}
              />
            );
          })}
        </div>
      </Swiper>
    </div>
  );

  if (screenWidth <= screenConfig.sm) {
    return <Fragment>{HeroMobileElement}</Fragment>;
  }

  return <Fragment>{HeroDesktopElement}</Fragment>;
};

export default Hero;
