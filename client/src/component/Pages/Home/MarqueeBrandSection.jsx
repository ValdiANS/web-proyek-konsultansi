import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { XyzTransition } from '@animxyz/react';

import indomieGorengAyamPopImage from '../../../asset/indomie-goreng-ayam-pop.png';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';

const MarqueeBrandSection = ({ className = '' }) => {
  const [screenWidth, screenHeight] = useWindowSize();

  return (
    <div className="bg-secondary">
      <div className={`container mx-auto w-full py-6 ${className}`}>
        <XyzTransition appearVisible xyz="fade down-3 ease-in-out-back">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={screenWidth >= screenConfig.sm ? 64 : 24}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay]}
            className="select-none cursor-grab active:cursor-grabbing"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
              <SwiperSlide key={val} className="w-fit-important">
                <img
                  src={indomieGorengAyamPopImage}
                  alt="Brand"
                  className="h-36 object-cover object-center rounded-10px"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </XyzTransition>
      </div>
    </div>
  );
};

export default MarqueeBrandSection;
