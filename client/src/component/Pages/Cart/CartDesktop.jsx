import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import CheckoutWarningModal from '../../Modal/CheckoutWarningModal';
import Navbar from '../../Nav/Navbar';
import CartEmpty from './CartEmpty';

import CartItem from './CartItem';

const CartDesktop = ({
  cartItems = [],
  checkedItems = [],
  showCheckoutWarningModal = false,
  isAllChecked = false,
  addAllHandler = () => {},
  renderCartItems = [],
  totalItems = 0,
  totalPrice = '',
  lanjutkanPesananBtnClickHandler = () => {},
  hideCheckoutWarningModalHandler = () => {},
}) => {
  return (
    <Fragment>
      {showCheckoutWarningModal && (
        <CheckoutWarningModal onHide={hideCheckoutWarningModalHandler} />
      )}

      {cartItems.length === 0 && <CartEmpty />}

      {cartItems.length > 0 && (
        <Fragment>
          <AppHeader>
            <Navbar />
          </AppHeader>

          <div className="container mx-auto mb-16">
            <div className="breadcumb-container mb-5">
              <Link to="/" className="text-borderSecondary">
                Home
              </Link>
            </div>

            <section>
              <h1 className="font-bold text-4xl mb-5">Keranjang Saya</h1>

              <div className="flex sm:flex-col md:flex-row gap-x-8 gap-y-8">
                <div className="w-full">
                  <div className="flex flex-row gap-x-4 items-center mb-5">
                    <input
                      type="checkbox"
                      name="check-all"
                      id="checkAll"
                      className="w-5 h-5"
                      onChange={addAllHandler}
                      checked={isAllChecked}
                    />
                    <label htmlFor="checkAll" className="text-lg">
                      Pilih Semua
                    </label>
                  </div>

                  <div className="cart-item-container flex flex-col gap-y-5">
                    {renderCartItems}
                  </div>
                </div>

                <div className="w-full md:max-w-xs">
                  <div className="sticky top-8 px-8 py-12 shadow-[0px_4px_20px_rgba(0,0,0,0.25)]">
                    <h2 className="font-semibold text-lg mb-2">
                      Ringkasan Pembelanjaan
                    </h2>

                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col -gap-y-1">
                        <h3>Harga Normal</h3>
                        <small className="text-[#909090]">
                          ({totalItems} Barang)
                        </small>
                      </div>
                      <div>Rp {totalPrice}</div>
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
                      <div className="font-bold">Rp {totalPrice}</div>
                    </div>

                    <button
                      onClick={lanjutkanPesananBtnClickHandler}
                      className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
                    >
                      Lanjutkan Pesanan
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <AppFooter></AppFooter>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CartDesktop;
