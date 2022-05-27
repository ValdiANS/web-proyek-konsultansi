import { XyzTransition } from '@animxyz/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '../../../../hooks/useWindowSize';
import { screenConfig } from '../../../../script/config/config';

import FeaturedCard from './FeaturedCard';
import featuredIndomieImage from '../../../../asset/featured-indomie.png';
import featuredKapalApiImage from '../../../../asset/hero/hero-kapal-api.png';

const FeaturedSection = ({ className = '' }) => {
  const [screenWidth, screenHeight] = useWindowSize();

  return (
    <section className={`featured-brand container mx-auto ${className}`}>
      <h1 className="font-light text-xl sm:text-4xl mb-7">
        Featured <strong className="font-bold">Brand</strong>
      </h1>

      <div className="brand-card-container">
        <XyzTransition appearVisible xyz="fade left-100% ease-ease">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={screenWidth <= screenConfig.sm}
            spaceBetween={24}
            className="cursor-grab active:cursor-grabbing"
          >
            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl={featuredIndomieImage}
                brand="Wings Food"
                productName="Indomie"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl={featuredKapalApiImage}
                brand="Wings Food"
                productName="Kapal Api"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl={featuredIndomieImage}
                brand="Wings Food"
                productName="Indomie"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl={featuredKapalApiImage}
                brand="Wings Food"
                productName="Kapal Api"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl={featuredIndomieImage}
                brand="Wings Food"
                productName="Indomie"
              />
            </SwiperSlide>

            <SwiperSlide className="w-fit-important">
              <FeaturedCard
                link="#"
                thumbnailUrl={featuredKapalApiImage}
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
