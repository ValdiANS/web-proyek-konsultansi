import { Fragment } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import AppHeader from './component/Layout/AppHeader';
import AppFooter from './component/Layout/AppFooter';
import Navbar from './component/Nav/Navbar';
import Home from './component/Pages/Home/Home';
import Categories from './component/Pages/Categories/Categories';
import ProductDetail from './component/Pages/ProductDetail/ProductDetail';
import Cart from './component/Pages/Cart/Cart';

const App = () => {
  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>

      <Outlet />

      <AppFooter></AppFooter>
    </Fragment>
  );
};

export default App;
