import { Fragment, useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './component/Pages/Home/Home';
import Categories from './component/Pages/Categories/Categories';
import ProductDetail from './component/Pages/ProductDetail/ProductDetail';
import Cart from './component/Pages/Cart/Cart';
import Login from './component/Pages/Login/Login';
import ForgetPassword from './component/Pages/ForgetPassword/ForgetPassword';
import Register from './component/Pages/Register/Register';
import Search from './component/Pages/Search/Search';
import Checkout from './component/Pages/Checkout/Checkout';
import { getLoginInfoFromLocalStorage } from './store/login-slice';
import {
  getCartItemFromAccount,
  getCartItemsFromSessionStorage,
} from './store/cart-slice';
import AdminLogin from './component/Pages/AdminLogin/AdminLogin';
import Dashboard from './component/Pages/Dashboard/Dashboard';

const App = () => {
  const dispatch = useDispatch();

  const isUserLoginLocalStorage = localStorage.getItem('isLogin') || '';

  dispatch(getLoginInfoFromLocalStorage());

  const isUserLogin = useSelector((state) => state.login.isLogin);
  const userId = useSelector((state) => state.login.userId);
  const userCartId = useSelector((state) => state.login.userCartId);

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (isUserLogin && userCartId !== '') {
      console.log(userCartId);
      dispatch(getCartItemFromAccount(userCartId));

      return;
    }
  }, [isUserLogin, userCartId]);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!isUserLoginLocalStorage) {
      if (!isFirstRender) {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        return;
      }

      dispatch(getCartItemsFromSessionStorage());
      setIsFirstRender(false);
    }
  }, [cartItems]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>

      <Outlet />
    </Fragment>
  );
};

export default App;
