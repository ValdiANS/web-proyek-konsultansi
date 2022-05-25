import { Fragment } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import AppHeader from './component/Layout/AppHeader';
import AppFooter from './component/Layout/AppFooter';
import Navbar from './component/Nav/Navbar';
import Home from './component/Pages/Home/Home';
import Categories from './component/Pages/Categories/Categories';
import ProductDetail from './component/Pages/ProductDetail/ProductDetail';
import Cart from './component/Pages/Cart/Cart';
import Login from './component/Pages/Login/Login';
import ForgetPassword from './component/Pages/ForgetPassword/ForgetPassword';
import Register from './component/Pages/Register/Register';
import Search from './component/Pages/Search/Search';
import Checkout from './component/Pages/Checkout/Checkout';

const App = () => {
  return (
    <Fragment>
      {/* <AppHeader>
        <Navbar />
      </AppHeader> */}

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
      </Routes>

      <Outlet />

      {/* <AppFooter /> */}
    </Fragment>
  );
};

export default App;
