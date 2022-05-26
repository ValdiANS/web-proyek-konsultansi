import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import MobileNavbar from '../../Nav/MobileNavbar';
import CheckoutWarningModal from '../../Modal/CheckoutWarningModal';

import CartItem from './CartItem';
import CartEmpty from './CartEmpty';
import DeleteAllConfirmationModal from '../../Modal/DeleteAllConfirmationModal';

const CartMobile = ({
  cartItems = [],
  showCheckoutWarningModal = false,
  showDeleteAllConfirmationModal = false,
  isAllChecked = false,
  addAllHandler = () => {},
  renderCartItems = [],
  totalItems = 0,
  totalPrice = '',
  lanjutkanPesananBtnClickHandler = () => {},
  hideCheckoutWarningModalHandler = () => {},
  hideDeleteAllConfirmationModalHandler = () => {},
  showDeleteAllConfirmationModalHandler = () => {},
  deleteDeleteAllConfirmationHandler = () => {},
}) => {
  return (
    <Fragment>
      {showCheckoutWarningModal && (
        <CheckoutWarningModal onHide={hideCheckoutWarningModalHandler} />
      )}

      {showDeleteAllConfirmationModal && (
        <DeleteAllConfirmationModal
          onHide={hideDeleteAllConfirmationModalHandler}
          onDeleteAll={deleteDeleteAllConfirmationHandler}
        />
      )}

      {cartItems.length === 0 && <CartEmpty />}

      {cartItems.length > 0 && (
        <Fragment>
          <AppHeader>
            <MobileNavbar
              hideCartBtn
              hideLoginBtn
              hideSearchBar
              titleText="Keranjang"
            />
          </AppHeader>

          <div className="container mx-auto mt-4 mb-16 px-4">
            <div className="flex flex-row gap-x-8">
              <div className="w-full">
                <div className="mb-5 flex flex-row justify-between">
                  <div className="flex flex-row gap-x-4 items-center">
                    <input
                      type="checkbox"
                      name="check-all"
                      id="checkAll"
                      className="w-5 h-5"
                      onChange={addAllHandler}
                      checked={isAllChecked}
                    />
                    <label htmlFor="checkAll" className="text-base">
                      Pilih Semua
                    </label>
                  </div>

                  <button
                    onClick={showDeleteAllConfirmationModalHandler}
                    className="text-[#D80000]"
                  >
                    Hapus Semua
                  </button>
                </div>

                <div className="cart-item-container flex flex-col gap-y-3">
                  {renderCartItems}
                </div>
              </div>
            </div>
          </div>

          <div className="invisible w-full bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            <div className="flex flex-row justify-between">
              <div>
                <h3>Subtotal</h3>
                <small className="text-[#909090]">({totalItems} Barang)</small>
              </div>

              <div className="font-semibold">Rp {totalPrice}</div>
            </div>

            <button
              onClick={lanjutkanPesananBtnClickHandler}
              className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
            >
              Lanjutkan Pesanan
            </button>
          </div>

          <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            <div className="flex flex-row justify-between">
              <div>
                <h3>Subtotal</h3>
                <small className="text-[#909090]">({totalItems} Barang)</small>
              </div>

              <div className="font-semibold">Rp {totalPrice}</div>
            </div>

            <button
              onClick={lanjutkanPesananBtnClickHandler}
              className="w-full p-2 mt-4 rounded-10px bg-black font-bold text-center border-2 border-solid border-transparent text-white transition-all duration-200 hover:bg-transparent hover:border-black hover:text-inherit"
            >
              Lanjutkan Pesanan
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CartMobile;
