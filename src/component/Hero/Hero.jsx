import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';

const Hero = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} opacity-100"></div>`;
    },
  };

  return (
    <div className="w-full bg-corak bg-repeat bg-contain py-16">
      <Swiper
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={32}
        pagination={pagination}
        modules={[Pagination]}
        className="relative"
      >
        <SwiperSlide>
          <img
            src="https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+1"
            alt="Hero Image 1"
            className="w-full mx-auto object-cover object-center"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+2"
            alt="Hero Image 2"
            className="w-full mx-auto"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+3"
            alt="Hero Image 3"
            className="w-full mx-auto"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://dummyimage.com/1200x674/e5e5e5/FFFFFF.png&text=Placeholder+image+4"
            alt="Hero Image 4"
            className="w-full mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
