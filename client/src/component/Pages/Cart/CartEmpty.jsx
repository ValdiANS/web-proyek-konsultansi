import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import MobileNavbar from '../../Nav/MobileNavbar';
import Navbar from '../../Nav/Navbar';
import BestSellerSection from '../Home/BestSellerSection';
import RecommendationSection from '../Home/RecommendationsSection';

const CartEmptyDesktop = () => {
  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      <div className="container mx-auto mt-3 mb-24">
        <div className="breadcumb-container mb-4">
          <Link to="/" className="text-borderSecondary">
            Home
          </Link>
        </div>

        <div>
          <h1 className="text-3xl mb-4 font-bold">Keranjang Saya</h1>

          <div className="font-semibold text-center py-8">
            <p>
              Keranjang anda kosong <br /> Pilih produk lalu tambahkan ke
              keranjang
            </p>

            <br />

            <Link to="/" className="underline">
              Kembali Ke Home
            </Link>
          </div>
        </div>

        <RecommendationSection />

        <BestSellerSection className="mt-8" />
      </div>

      <AppFooter />
    </Fragment>
  );
};

const CartEmptyMobile = () => {
  return (
    <Fragment>
      <AppHeader>
        <MobileNavbar
          hideSearchBar
          hideLoginBtn
          hideCartBtn
          titleText="Keranjang"
        />
      </AppHeader>

      <div className="container mx-auto mt-3 mb-24 px-4">
        <div>
          <div className="font-semibold text-center py-16">
            <p>
              Keranjang anda kosong <br /> Pilih produk lalu tambahkan ke
              keranjang
            </p>

            <br />

            <Link to="/" className="underline">
              Kembali Ke Home
            </Link>
          </div>
        </div>

        <RecommendationSection />

        <BestSellerSection className="mt-8" />
      </div>

      <AppFooter />
    </Fragment>
  );
};

const CartEmpty = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <CartEmptyMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CartEmptyDesktop />
    </Fragment>
  );
};

export default CartEmpty;
