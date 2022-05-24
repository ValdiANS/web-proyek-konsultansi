import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import CheckoutItem from './CheckoutItem';
import ShippingInfoModal from '../../Modal/ShippingInfoModal';
import AppHeader from '../../Layout/AppHeader';
import Navbar from '../../Nav/Navbar';
import AppFooter from '../../Layout/AppFooter';

const Checkout = () => {
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

          <div className="w-full flex flex-row gap-x-8">
            <div className="cart-item-container w-full flex flex-col gap-y-5">
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

            <div className="w-full max-w-xs">
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

export default Checkout;
