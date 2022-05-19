import { XyzTransition } from '@animxyz/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import FeaturedCard from './FeaturedCard';

const FeaturedSection = ({ className = '' }) => {
  return (
    <section className={`featured-brand container mx-auto ${className}`}>
      <h1 className="font-light text-4xl mb-7">
        Featured <strong className="font-bold">Brand</strong>
      </h1>

      <div className="brand-card-container">
        <XyzTransition appearVisible xyz="fade left-100% ease-ease">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={24}
            className="cursor-grab active:cursor-grabbing"
          >
            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl="https://dummyimage.com/1280x507/e5e5e5/FFFFFF.png&text=Placeholder+Brand+1"
                brand="Wings Food"
                productName="Indomie"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl="https://dummyimage.com/1280x768/e5e5e5/FFFFFF.png&text=Placeholder+Brand+2"
                brand="Wings Food"
                productName="Kapal Api"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl="https://dummyimage.com/1280x507/e5e5e5/FFFFFF.png&text=Placeholder+Brand+3"
                brand="Wings Food"
                productName="Indomie"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl="https://dummyimage.com/1280x768/e5e5e5/FFFFFF.png&text=Placeholder+Brand+4"
                brand="Wings Food"
                productName="Kapal Api"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl="https://dummyimage.com/1280x507/e5e5e5/FFFFFF.png&text=Placeholder+Brand+5"
                brand="Wings Food"
                productName="Indomie"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl="https://dummyimage.com/1280x768/e5e5e5/FFFFFF.png&text=Placeholder+Brand+6"
                brand="Wings Food"
                productName="Kapal Api"
              />
            </SwiperSlide>
          </Swiper>
        </XyzTransition>
      </div>
    </section>
  );
};

export default FeaturedSection;
