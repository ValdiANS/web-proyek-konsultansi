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

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <CartMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CartDesktop />
    </Fragment>
  );
};

export default Cart;

/*
selectedList = [...];

passed function to props:
func((selectedList) => isThisItem in selectedList ? checked : unchecked);
*/
