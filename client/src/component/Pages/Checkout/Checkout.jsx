import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import CheckoutItem from './CheckoutItem';
import ShippingInfoModal from '../../Modal/ShippingInfoModal';
import AppHeader from '../../Layout/AppHeader';
import Navbar from '../../Nav/Navbar';
import MobileNavbar from '../../Nav/MobileNavbar';
import AppFooter from '../../Layout/AppFooter';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import CheckoutItemMobile from './CheckoutItemMobile';

const CheckoutDesktop = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const orderBtnClickHandler = () => {
    alert('Submitted: Order Sekarang');

    setIsShowModal(true);
  };

  const hideModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      {isShowModal && <ShippingInfoModal onHide={hideModalHandler} />}

      <div className="container mx-auto mb-16">
        <div className="breadcumb-container mb-5">
          <Link to="/" className="text-borderSecondary">
            Home
          </Link>
        </div>

        <section>
          <h1 className="font-bold text-4xl mb-5">Checkout</h1>

          <div className="w-full flex sm:flex-col md:flex-row gap-x-8 gap-y-8">
            <div className="checkout-item-container w-full flex flex-col gap-y-5">
              {Array(1, 2, 3, 4).map((val) => (
                <CheckoutItem
                  key={val}
                  thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                  price={3500}
                  name="Indomie Goreng"
                  brand="Indofood"
                  amount={val}
                />
              ))}
            </div>

            <div className="w-full md:max-w-xs">
              <div className="sticky top-8 px-8 py-12 shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
                <h2 className="font-semibold text-lg mb-2">
                  Ringkasan Pembelanjaan
                </h2>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-col -gap-y-1">
                    <h3>Harga Normal</h3>
                    <small className="text-[#909090]">({1} Barang)</small>
                  </div>
                  <div>Rp {'10.500'}</div>
                </div>

                <div className="flex flex-row justify-between mt-2">
                  <div className="flex flex-col -gap-y-1">
                    <h3>Diskon Produk</h3>
                    <small className="text-[#909090]">(0 Barang)</small>
                  </div>
                  <div className="font-bold text-red-600">-Rp. 0</div>
                </div>

                <div className="flex flex-row justify-between mt-8">
                  <h3>Total Harga</h3>
                  <div className="font-bold">Rp {'10.500'}</div>
                </div>

                <button
                  onClick={orderBtnClickHandler}
                  className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
                >
                  Order Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const CheckoutMobile = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const orderBtnClickHandler = () => {
    alert('Submitted: Order Sekarang');

    setIsShowModal(true);
  };

  const hideModalHandler = () => {
    setIsShowModal(false);
  };

  return (
    <Fragment>
      <AppHeader>
        <MobileNavbar
          hideSearchBar
          hideLoginBtn
          hideCartBtn
          titleText="Checkout"
        />
      </AppHeader>

      {isShowModal && <ShippingInfoModal onHide={hideModalHandler} />}

      <div className="container mx-auto mb-16">
        <div>
          <div className="checkout-item-container w-full flex flex-col gap-y-2 bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.25)] py-8 mt-4">
            {Array(1, 2, 3, 4).map((val) => (
              <CheckoutItemMobile
                key={val}
                thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                price={3500}
                name="Indomie Goreng"
                brand="Indofood"
                amount={val}
              />
            ))}
          </div>

          <div className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.25)] py-8 px-4 mt-6 w-full space-y-2">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="text-lg">Subtotal</h3>
                <small className="text-sm text-[#909090]">({4} Barang)</small>
              </div>

              <div className="text-lg font-bold">
                Rp {(10500).toLocaleString('id-ID')}
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <h3 className="text-lg">Biaya Kemasan</h3>

              <div className="text-lg font-bold">
                Rp {(5000).toLocaleString('id-ID')}
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <h3 className="text-lg">Diskon</h3>

              <div className="text-lg font-bold text-[#D80000]">
                Rp {(5000).toLocaleString('id-ID')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full shadow-[0px_-2px_10px_rgba(0,0,0,0.25)] p-4 space-y-4 bg-white">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg">Total</h3>

          <div className="text-lg font-bold">
            Rp {(5000).toLocaleString('id-ID')}
          </div>
        </div>

        <button
          onClick={orderBtnClickHandler}
          className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
        >
          Order Sekarang
        </button>
      </div>

      {/* Placeholder */}
      <div className="invisible  w-full shadow-[0px_-2px_10px_rgba(0,0,0,0.25)] p-4 space-y-4">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg">Total</h3>

          <div className="text-lg font-bold">
            Rp {(5000).toLocaleString('id-ID')}
          </div>
        </div>

        <button
          onClick={orderBtnClickHandler}
          className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
        >
          Order Sekarang
        </button>
      </div>
    </Fragment>
  );
};

const Checkout = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <CheckoutMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CheckoutDesktop />
    </Fragment>
  );
};

export default Checkout;
