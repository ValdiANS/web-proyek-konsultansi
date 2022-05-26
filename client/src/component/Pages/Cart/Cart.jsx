import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import Navbar from '../../Nav/Navbar';
import CartDesktop from './CartDesktop';

import CartItem from './CartItem';
import CartMobile from './CartMobile';

const dummyCartItems = [
  {
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+1',
    name: 'Indomie Goreng 1',
    brand: 'Indofood',
    price: 3500,
    amount: 1,
    inStock: true,
  },

  {
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+2',
    name: 'Indomie Goreng 2',
    brand: 'Indofood',
    price: 3500,
    amount: 1,
    inStock: true,
  },

  {
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+3',
    name: 'Indomie Goreng 3',
    brand: 'Indofood',
    price: 3500,
    amount: 1,
    inStock: true,
  },
];

const Cart = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([...dummyCartItems]);
  const [checkedItems, setCheckedItems] = useState([...dummyCartItems]);

  const [showCheckoutWarningModal, setShowCheckoutWarningModal] =
    useState(false);

  const [showDeleteAllConfirmationModal, setShowDeleteAllConfirmationModal] =
    useState(false);

  const isAllChecked = checkedItems.length === cartItems.length;

  console.log(isAllChecked);

  const itemCheckHandler = (item) => {
    const itemCheckedIdx = checkedItems.findIndex(
      (checkedItem) => checkedItem.name === item.name
    );

    // Hapus item jika sudah dicentang
    if (itemCheckedIdx > -1) {
      setCheckedItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.name !== item.name)
      );

      return;
    }

    setCheckedItems((prevItems) => [...prevItems, item]);
  };

  const itemDeleteHandler = (name) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((prevCartItem) => prevCartItem.name !== name)
    );
  };

  const allItemDeleteHandler = () => {
    setCartItems([]);
  };

  const addAllHandler = () => {
    setCheckedItems([]);

    if (checkedItems.length === cartItems.length) {
      return;
    }

    setCheckedItems([...cartItems]);
  };

  const renderCartItems = cartItems.map((item, index) => {
    const isChecked = checkedItems.find(
      (checkedItem) => checkedItem.name === item.name
    );

    return (
      <CartItem
        key={index + 1}
        onCheck={itemCheckHandler}
        onDelete={itemDeleteHandler}
        thumbnailUrl={item.thumbnailUrl}
        name={item.name}
        brand={item.brand}
        price={item.price}
        amount={item.amount}
        inStock={item.inStock}
        checked={isChecked}
      />
    );
  });

  const totalItems = checkedItems.length;

  const totalPrice = checkedItems
    .reduce((prev, current) => prev + current.price, 0)
    .toLocaleString('id-ID');

  const lanjutkanPesananBtnClickHandler = () => {
    if (checkedItems.length === 0) {
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
        checkedItems={checkedItems}
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

/*
selectedList = [...];

passed function to props:
func((selectedList) => isThisItem in selectedList ? checked : unchecked);
*/
