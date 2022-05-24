import { useSwiper } from 'swiper/react';

const SlideControllerButton = ({ idx, isActive = false }) => {
  const swiper = useSwiper();

  const btnClass = `w-12 h-[5px] cursor-pointer rounded-none duration-500 ${
    isActive ? 'bg-black/25' : 'bg-primary'
  }`;

  const clickHandler = () => {
    swiper.slideTo(idx);
  };

  return <button onClick={clickHandler} className={btnClass}></button>;
};

export default SlideControllerButton;
