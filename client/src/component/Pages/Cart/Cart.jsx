import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import {
  cartActions,
  deleteAllCartItemAndInDb,
} from '../../../store/cart-slice';
import { checkoutActions } from '../../../store/checkout-slice';

import CartDesktop from './CartDesktop';

import CartItem from './CartItem';
import CartMobile from './CartMobile';

const Cart = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isUserLogin = useSelector((state) => state.login.isLogin);
  const cartItems = useSelector((state) => state.cart.items);
  const selectedItems = cartItems.filter((item) => item.selected);

  const [showCheckoutWarningModal, setShowCheckoutWarningModal] =
    useState(false);

  const [showDeleteAllConfirmationModal, setShowDeleteAllConfirmationModal] =
    useState(false);

  const isAllChecked = cartItems.length === selectedItems.length;

  console.log(isAllChecked);

  const allItemDeleteHandler = () => {
    if (isUserLogin) {
      dispatch(deleteAllCartItemAndInDb(cartItems));

      return;
    }

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
        detailCartId={item.detailCartId}
      />
    );
  });

  const totalItems = useSelector((state) => {
    const totalCheckedItems = state.cart.items.filter(
      (item) => item.selected
    ).length;

    return totalCheckedItems;
  });

  const totalSelectedQuantity = selectedItems.reduce(
    (prevVal, currentVal) => prevVal + currentVal.kuantitas,
    0
  );

  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const localTotalPrice = totalPrice.toLocaleString('id-ID');

  const lanjutkanPesananBtnClickHandler = () => {
    if (totalItems === 0) {
      setShowCheckoutWarningModal(true);
      return;
    }

    dispatch(
      checkoutActions.replaceCheckoutState({
        items: selectedItems,
        totalQuantity: totalSelectedQuantity,
        totalPrice: totalPrice,
      })
    );

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
          totalPrice={localTotalPrice}
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
        totalPrice={localTotalPrice}
        lanjutkanPesananBtnClickHandler={lanjutkanPesananBtnClickHandler}
        hideCheckoutWarningModalHandler={hideCheckoutWarningModalHandler}
      />
    </Fragment>
  );
};

export default Cart;
