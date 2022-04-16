import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { XyzTransition } from '@animxyz/react';

const MarqueeBrandSection = ({ className = '' }) => {
  return (
    <div className={`container mx-auto w-full bg-secondary py-6 ${className}`}>
      <XyzTransition appearVisible xyz="fade down-3 ease-in-out-back">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={110}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="select-none cursor-grab active:cursor-grabbing"
        >
          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+1"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+2"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+3"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+4"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+5"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+6"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+7"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+8"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <img
              src="https://dummyimage.com/1280x1022/B62234/FFFFFF.png&text=Brand+9"
              alt="Brand"
              className="h-36 object-cover object-center rounded-10px"
            />
          </SwiperSlide>
        </Swiper>
      </XyzTransition>
    </div>
  );
};

export default MarqueeBrandSection;
