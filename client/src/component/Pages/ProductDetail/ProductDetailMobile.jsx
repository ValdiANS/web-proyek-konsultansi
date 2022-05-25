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
import MobileNavbar from '../../Nav/MobileNavbar';
import AppFooter from '../../Layout/AppFooter';

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

const ProductDetailMobile = () => {
  const [showAddToCartSuccessHandler, setShowAddToCartSuccessHandler] =
    useState(false);

  const [itemAmount, setItemAmount] = useState(1);

  const price = 3500 * itemAmount;
  const localPrice = price.toLocaleString('id-ID');

  const addAmountHandler = () => {
    setItemAmount((prevVal) => prevVal + 1);

    console.log(`Add ${productName} amount`);
  };

  const subtractAmountHandler = () => {
    setItemAmount((prevVal) => (prevVal === 1 ? prevVal : prevVal - 1));

    console.log(`Subtract ${productName} amount`);
  };

  const addToCartHandler = () => {
    setShowAddToCartSuccessHandler(true);
  };

  const hideSuccesModalHandler = () => {
    setShowAddToCartSuccessHandler(false);
  };

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
        <MobileNavbar hideLoginBtn />
      </AppHeader>

      {showAddToCartSuccessHandler && (
        <AddToCartSuccessHandler onHide={hideSuccesModalHandler} />
      )}

      <div className="bg-secondary pb-28">
        <div className="container mx-auto">
          <div className="product-container h-full bg-white max-w-screen-lg mx-auto">
            <div className="pt-9 pb-4 px-4 shadow-[0px_2px_10px_rgba(0,0,0,0.2)]">
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
                        className="w-full mx-auto object-cover object-center"
                      />
                    </SwiperSlide>
                  ))}

                  <div className="swiper-custom-pagination flex flex-row gap-x-1 justify-center mt-8">
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

              <section className="mt-5">
                <h1 className="text-xl font-bold">Indomie Goreng</h1>
                <div className="text-[#5E5E5E] text-base font-semibold">
                  1 pcs
                </div>

                <div className="text-[#5E5E5E] text-2xl font-bold mt-4">
                  Rp3.500
                </div>
              </section>
            </div>

            <section className="w-full mt-4 pt-2 py-4 px-4 shadow-[0px_2px_10px_rgba(0,0,0,0.25)]">
              <h1 className="text-lg font-semibold">Deskripsi Produk</h1>

              <table className="mt-3">
                <tbody>
                  <tr>
                    <td className="text-sm pb-2 text-[#5E5E5E]">Brand</td>

                    <td className="text-sm pb-2 pl-8 text-[#2B77EE]">
                      Indofood
                    </td>
                  </tr>

                  <tr>
                    <td className="text-sm pb-2 text-[#5E5E5E]">Kategori</td>

                    <td className="text-sm pb-2 pl-8 text-[#ED8C1D]">
                      Makanan
                    </td>
                  </tr>

                  <tr>
                    <td className="text-sm pb-2 text-[#5E5E5E]">
                      Berat/Ukuran
                    </td>

                    <td className="text-sm pb-2 pl-8 text-textSecondary">
                      85 gr
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex flex-row items-center py-4 gap-x-3 px-4 bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
        <div className="h-full flex flex-row items-center justify-between gap-x-3">
          <button
            onClick={subtractAmountHandler}
            className="rounded-10px bg-white w-8 h-8 text-xl border border-solid border-black grid place-items-center"
          >
            -
          </button>

          <div>{itemAmount}</div>

          <button
            onClick={addAmountHandler}
            className="rounded-10px bg-white w-8 h-8 text-xl border border-solid border-black grid place-items-center"
          >
            +
          </button>
        </div>

        <Card className="overflow-hidden w-full h-full">
          <button
            onClick={addToCartHandler}
            className="w-full text-sm bg-darkOrange py-2 font-semibold text-center"
          >
            Add to Cart
          </button>
        </Card>
      </div>
    </Fragment>
  );
};

export default ProductDetailMobile;
