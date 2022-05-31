import { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import CheckoutItem from './CheckoutItem';
import ShippingInfoModal from '../../Modal/ShippingInfoModal';
import AppHeader from '../../Layout/AppHeader';
import Navbar from '../../Nav/Navbar';
import MobileNavbar from '../../Nav/MobileNavbar';
import AppFooter from '../../Layout/AppFooter';
import useWindowSize from '../../../hooks/useWindowSize';
import config, { screenConfig } from '../../../script/config/config';

import { useDispatch, useSelector } from 'react-redux';

const CheckoutDesktop = ({
  isShowModal = false,
  orderBtnClickHandler = () => {},
  hideModalHandler = () => {},
  checkoutItems = [],
  totalPrice = '',
  totalCheckoutItems = 0,
}) => {
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
              {checkoutItems.map((item) => (
                <CheckoutItem
                  key={item._id}
                  _id={item._id}
                  thumbnailUrl={item.link_gambar}
                  price={item.harga}
                  name={item.nama}
                  brand={item.brand}
                  amount={item.kuantitas}
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
                    <h3>Harga</h3>
                    <small className="text-[#909090]">
                      ({totalCheckoutItems} Barang)
                    </small>
                  </div>
                  <div>Rp {totalPrice}</div>
                </div>

                {/* <div className="flex flex-row justify-between mt-2">
                  <div className="flex flex-col -gap-y-1">
                    <h3>Diskon Produk</h3>
                    <small className="text-[#909090]">(0 Barang)</small>
                  </div>
                  <div className="font-bold text-red-600">-Rp. 0</div>
                </div> */}

                <div className="flex flex-row justify-between mt-8">
                  <h3>Total Harga</h3>
                  <div className="font-bold">Rp {totalPrice}</div>
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

const CheckoutMobile = ({
  isShowModal = false,
  orderBtnClickHandler = () => {},
  hideModalHandler = () => {},
  checkoutItems = [],
  totalPrice = '',
  totalCheckoutItems = 0,
}) => {
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
            {checkoutItems.map((item) => (
              <CheckoutItem
                key={item._id}
                _id={item._id}
                thumbnailUrl={item.link_gambar}
                price={item.harga}
                name={item.nama}
                brand={item.brand}
                amount={item.kuantitas}
              />
            ))}
          </div>

          <div className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.25)] py-8 px-4 mt-6 w-full space-y-2">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="text-lg">Subtotal</h3>
                <small className="text-sm text-[#909090]">
                  ({totalCheckoutItems} Barang)
                </small>
              </div>

              <div className="text-lg font-bold">Rp {totalPrice}</div>
            </div>

            {/* <div className="flex flex-row justify-between">
              <h3 className="text-lg">Biaya Kemasan</h3>

              <div className="text-lg font-bold">
                Rp {(5000).toLocaleString('id-ID')}
              </div>
            </div> */}

            {/* <div className="flex flex-row justify-between">
              <h3 className="text-lg">Diskon</h3>

              <div className="text-lg font-bold text-[#D80000]">
                Rp {(0).toLocaleString('id-ID')}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full shadow-[0px_-2px_10px_rgba(0,0,0,0.25)] p-4 space-y-4 bg-white">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg">Total</h3>

          <div className="text-lg font-bold">Rp {totalPrice}</div>
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

  const dispatch = useDispatch();

  const isUserLogin = useSelector((state) => state.login.isLogin);
  const userId = useSelector((state) => state.login.userId);

  const [isShowModal, setIsShowModal] = useState(false);

  const checkoutItems = useSelector((state) => state.checkout.items);
  const totalCheckoutItems = checkoutItems.length;
  const totalPrice = useSelector((state) =>
    state.checkout.totalPrice.toLocaleString('id-ID')
  );

  const totalCheckoutPrice = useSelector((state) => state.checkout.totalPrice);

  const orderBtnClickHandler = async () => {
    // alert('Submitted: Order Sekarang');

    if (!isUserLogin) {
      setIsShowModal(true);
      return;
    }

    try {
      const userResponse = await fetch(config.apiUrl.user(userId));

      if (!userResponse.ok) {
        throw new Error('Could not fetch user data!');
        return;
      }

      const userResponseJson = await userResponse.json();

      let whatsappMessage = `Nama: ${userResponseJson.data.nama}%0aNo. Whatsapp: ${userResponseJson.data.no_telp} %0aAlamat: ${userResponseJson.data.alamat} %0a%0a----------%0a%0a`;

      checkoutItems.forEach((item) => {
        whatsappMessage += `${item.nama} | ${item.kuantitas}x | Rp${item.harga} %0a | Total: ${item.totalHarga} %0a`;
      });

      whatsappMessage += `%0a----------%0aTotal: Rp${totalCheckoutPrice}`;

      window.open(
        config.chatToWhatsappLink(config.whatsappNumber, whatsappMessage)
      );

      navigate('/');
    } catch (error) {
      console.log('Failed fetch user data!');
      console.log('Checkout Error');
      console.log(error.message);
    }
  };

  const hideModalHandler = () => {
    setIsShowModal(false);
  };

  if (totalCheckoutItems === 0) {
    return <Navigate to="/" replace={true} />;
  }

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <CheckoutMobile
          isShowModal={isShowModal}
          orderBtnClickHandler={orderBtnClickHandler}
          hideModalHandler={hideModalHandler}
          checkoutItems={checkoutItems}
          totalPrice={totalPrice}
          totalCheckoutItems={totalCheckoutItems}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CheckoutDesktop
        isShowModal={isShowModal}
        orderBtnClickHandler={orderBtnClickHandler}
        hideModalHandler={hideModalHandler}
        checkoutItems={checkoutItems}
        totalPrice={totalPrice}
        totalCheckoutItems={totalCheckoutItems}
      />
    </Fragment>
  );
};

export default Checkout;
