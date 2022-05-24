import { Fragment, useState } from 'react';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import SlideControllerButton from './SlideControllerButton';

import 'swiper/css';
import 'swiper/css/pagination';
import useWindowSize from '../../../../hooks/useWindowSize';
import { screenConfig } from '../../../../script/config/config';

const imgList = [
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+1',
    altText: 'Hero Image 1',
  },
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+2',
    altText: 'Hero Image 2',
  },
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+3',
    altText: 'Hero Image 3',
  },
  {
    url: 'https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+4',
    altText: 'Hero Image 4',
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
              className="w-full mx-auto object-cover object-center"
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
      >
        {imgList.map(({ url, altText }, index) => (
          <SwiperSlide key={index + 1}>
            <img
              src={url}
              alt={altText}
              className="w-full mx-auto object-cover object-center"
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
