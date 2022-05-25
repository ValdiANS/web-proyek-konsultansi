import { XyzTransitionGroup } from '@animxyz/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '../../../../hooks/useWindowSize';
import { screenConfig } from '../../../../script/config/config';

import NeedCard from './NeedCard';

const NeedsSection = ({ className }) => {
  const [screenWidth, screenHeight] = useWindowSize();

  const needsCardContainerDesktop = (
    <div className="needs-card-container">
      <XyzTransitionGroup
        appearVisible
        xyz="fade up-100% stagger-1 ease-out-back"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-20 gap-y-8"
      >
        <div>
          <NeedCard
            thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+1"
            link="#"
            title="Makanan 1"
            className="w-full h-full bg-white"
          />
        </div>

        <div>
          <NeedCard
            thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+2"
            link="#"
            title="Makanan 2"
            className="w-full h-full bg-white"
          />
        </div>

        <div>
          <NeedCard
            thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+3"
            link="#"
            title="Makanan 3"
            className="w-full h-full bg-white"
          />
        </div>

        <div>
          <NeedCard
            thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+4"
            link="#"
            title="Makanan 4"
            className="w-full h-full bg-white"
          />
        </div>
      </XyzTransitionGroup>
    </div>
  );

  const needsCardContainerMobile = (
    <div className="needs-card-container">
      <XyzTransitionGroup
        appearVisible
        xyz="fade up-100% stagger-1 ease-out-back"
      >
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={24}
          centeredSlides={screenWidth <= screenConfig.sm}
          className="cursor-grab active:cursor-grabbing w-full h-36"
          style={{
            overflowY: 'visible',
          }}
        >
          <SwiperSlide className="w-fit-important">
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+1"
              link="#"
              title="Makanan 1"
              className="w-full h-full bg-white"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+2"
              link="#"
              title="Makanan 2"
              className="w-full h-full bg-white"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+3"
              link="#"
              title="Makanan 3"
              className="w-full h-full bg-white"
            />
          </SwiperSlide>

          <SwiperSlide className="w-fit-important">
            <NeedCard
              thumbnailUrl="https://dummyimage.com/720x720/e5e5e5/FFFFFF.png&text=Placeholder+Needs+4"
              link="#"
              title="Makanan 4"
              className="w-full h-full bg-white"
            />
          </SwiperSlide>
        </Swiper>
      </XyzTransitionGroup>
    </div>
  );

  return (
    <section className={`container mx-auto ${className}`}>
      <h1 className="font-light text-xl sm:text-4xl mb-7">
        Sort by <strong className="font-bold">Needs</strong>
      </h1>

      {screenWidth <= screenConfig.sm
        ? needsCardContainerMobile
        : needsCardContainerDesktop}
    </section>
  );
};

export default NeedsSection;
