import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import { cartActions } from '../../../store/cart-slice';

import CartDesktop from './CartDesktop';

import CartItem from './CartItem';
import CartMobile from './CartMobile';

const Cart = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const selectedItems = cartItems.filter((item) => item.selected);

  const [showCheckoutWarningModal, setShowCheckoutWarningModal] =
    useState(false);

  const [showDeleteAllConfirmationModal, setShowDeleteAllConfirmationModal] =
    useState(false);

  const isAllChecked = cartItems.length === selectedItems.length;

  console.log(isAllChecked);

  const allItemDeleteHandler = () => {
    dispatch(cartActions.deleteAllCartItem());
  };

  const addAllHandler = () => {
    dispatch(cartActions.selectAllItem());
  };

  const renderCartItems = cartItems.map((item) => {
    return (
      <CartItem
        key={item._id}
        _id={item._id}
        nama={item.nama}
        brand={item.brand}
        stok={item.stok}
        link_gambar={item.link_gambar}
        kuantitas={item.kuantitas}
        totalHarga={item.totalHarga}
        selected={item.selected}
      />
    );
  });

  const totalItems = useSelector((state) => {
    const totalCheckedItems = state.cart.items.filter(
      (item) => item.selected
    ).length;

    return totalCheckedItems;
  });

  const totalPrice = useSelector((state) =>
    state.cart.totalPrice.toLocaleString('id-ID')
  );

  const lanjutkanPesananBtnClickHandler = () => {
    if (totalItems === 0) {
      setShowCheckoutWarningModal(true);
      return;
    }

    navigate('/checkout');
  };

  const hideCheckoutWarningModalHandler = () => {
    setShowCheckoutWarningModal(false);
  };

  const hideDeleteAllConfirmationModalHandler = () => {
    setShowDeleteAllConfirmationModal(false);
  };

  const showDeleteAllConfirmationModalHandler = () => {
    setShowDeleteAllConfirmationModal(true);
  };

  const deleteDeleteAllConfirmationHandler = () => {
    allItemDeleteHandler();
    hideDeleteAllConfirmationModalHandler();
  };

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <CartMobile
          cartItems={cartItems}
          showCheckoutWarningModal={showCheckoutWarningModal}
          showDeleteAllConfirmationModal={showDeleteAllConfirmationModal}
          isAllChecked={isAllChecked}
          addAllHandler={addAllHandler}
          renderCartItems={renderCartItems}
          totalItems={totalItems}
          totalPrice={totalPrice}
          lanjutkanPesananBtnClickHandler={lanjutkanPesananBtnClickHandler}
          hideCheckoutWarningModalHandler={hideCheckoutWarningModalHandler}
          hideDeleteAllConfirmationModalHandler={
            hideDeleteAllConfirmationModalHandler
          }
          showDeleteAllConfirmationModalHandler={
            showDeleteAllConfirmationModalHandler
          }
          deleteDeleteAllConfirmationHandler={
            deleteDeleteAllConfirmationHandler
          }
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CartDesktop
        cartItems={cartItems}
        showCheckoutWarningModal={showCheckoutWarningModal}
        isAllChecked={isAllChecked}
        addAllHandler={addAllHandler}
        renderCartItems={renderCartItems}
        totalItems={totalItems}
        totalPrice={totalPrice}
        lanjutkanPesananBtnClickHandler={lanjutkanPesananBtnClickHandler}
        hideCheckoutWarningModalHandler={hideCheckoutWarningModalHandler}
      />
    </Fragment>
  );
};

export default Cart;
