import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import AddToCartSuccessHandler from '../../../component/Modal/AddToCartSuccessHandler';
import SlideControllerButton from '../Home/Hero/SlideControllerButton';

import Card from '../../UI/Card';

import 'swiper/css';
import 'swiper/css/pagination';

import WhatsappImg from '../../../asset/image/whatsapp-icon.png';
import AppHeader from '../../Layout/AppHeader';
import Navbar from '../../Nav/Navbar';
import AppFooter from '../../Layout/AppFooter';
import config from '../../../script/config/config';

const ProductDetailDesktop = ({
  imgList = [],
  showAddToCartSuccessHandler = false,
  name = '',
  brand = '',
  category = '',
  weight = '',
  itemAmount = 1,
  price = 0,
  localPrice,
  addAmountHandler = () => {},
  subtractAmountHandler = () => {},
  addToCartHandler = () => {},
  hideSuccesModalHandler = () => {},
}) => {
  // UI
  const [activeImage, setActiveImage] = useState(0);

  const pagination = {
    clickable: true,
    type: 'custom',

    renderCustom: (swiper, current, total) => {
      setActiveImage(current);
    },
  };

  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      {showAddToCartSuccessHandler && (
        <AddToCartSuccessHandler onHide={hideSuccesModalHandler} />
      )}

      <div className="bg-secondary pt-3 pb-8">
        <div className="container mx-auto">
          <div className="breadcumb-container">
            <Link to="/" className="text-borderSecondary">
              Home
            </Link>
          </div>

          <div className="product-container mt-8 p-8 h-full bg-white max-w-screen-lg mx-auto">
            <div>
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={16}
                pagination={pagination}
                modules={[Pagination]}
                className="relative w-full max-w-md"
              >
                {imgList.map(({ url, altText }, index) => (
                  <SwiperSlide key={index + 1}>
                    <img
                      src={url}
                      alt={altText}
                      className="w-full mx-auto object-contain object-center h-[400px]"
                    />
                  </SwiperSlide>
                ))}

                <div className="swiper-custom-pagination flex flex-row gap-x-5 justify-center mt-8">
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

            <div className="mt-16 flex flex-row gap-x-10">
              <section className="w-full">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{name}</h1>
                  <div className="text-base font-semibold text-[#5E5E5E]">
                    {itemAmount} pcs
                  </div>
                </div>

                <div className="mt-16">
                  <h2 className="text-base font-semibold mb-5">
                    Deskripsi Produk
                  </h2>

                  <table>
                    <tbody>
                      <tr>
                        <td className="pb-4 text-[#5E5E5E]">Brand</td>

                        <td className="pb-4 pl-8 text-[#2B77EE]">{brand}</td>
                      </tr>

                      <tr>
                        <td className="pb-4 text-[#5E5E5E]">Kategori</td>

                        <td className="pb-4 pl-8 text-[#ED8C1D]">{category}</td>
                      </tr>

                      <tr>
                        <td className="pb-4 text-[#5E5E5E]">Berat/Ukuran</td>

                        <td className="pb-4 pl-8 text-textSecondary">
                          {weight} gr
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="w-full">
                <div>
                  <span className="block text-center text-3xl font-bold text-[#5E5E5E] mb-4">
                    Rp{localPrice}
                  </span>

                  <Card className="flex flex-row justify-around items-center border border-solid border-borderSecondary">
                    <button
                      onClick={subtractAmountHandler}
                      className="w-8 h-8 rounded-full bg-primary text-white"
                    >
                      -
                    </button>
                    <span>{itemAmount}</span>
                    <button
                      onClick={addAmountHandler}
                      className="w-8 h-8 rounded-full bg-primary text-white"
                    >
                      +
                    </button>
                  </Card>

                  <Card className="overflow-hidden mt-4">
                    <button
                      onClick={addToCartHandler}
                      className="w-full bg-darkOrange py-2 font-semibold text-center"
                    >
                      Add to Cart
                    </button>
                  </Card>

                  <div className="flex flex-row gap-x-2 justify-center items-center mt-8">
                    <img src={WhatsappImg} alt="Whatsapp Icon" />

                    <span className="text-3xl text-[#5E5E5E] font-bold">
                      {config.whatsappNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </Fragment>
  );
};

export default ProductDetailDesktop;
