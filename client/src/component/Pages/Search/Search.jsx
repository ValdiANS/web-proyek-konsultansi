import { Fragment } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import MobileNavbar from '../../Nav/MobileNavbar';
import Navbar from '../../Nav/Navbar';

import ProductItemCard from '../../ProductItemCard/ProductItemCard';
import SearchNotFound from './SearchNotFound';

const SearchDesktop = ({ searchParams, setSearchParams, searchQuery }) => {
  if (!searchQuery || searchQuery === '' || searchQuery.length === 0) {
    return <Navigate to="/" replace={true} />;
  }

  // Test (nanti hapus)
  if (searchQuery === 'Sapu') {
    return (
      <Fragment>
        <SearchNotFound keyword={searchQuery} />
      </Fragment>
    );
  }

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
          <h1 className="text-3xl mb-4">
            <span className="font-light">Hasil Cari Untuk :</span>{' '}
            <strong>{searchQuery}</strong>
          </h1>

          <div className="products-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8 lg:gap-x-24">
            {Array(1, 2, 3, 4, 5, 6, 7, 8).map((val) => {
              return (
                <ProductItemCard
                  key={val}
                  id={1}
                  productName="Indomie Goreng"
                  thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                  price={3500}
                />
              );
            })}
          </div>
        </div>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const SearchMobile = ({ searchParams, setSearchParams, searchQuery }) => {
  if (!searchQuery || searchQuery === '' || searchQuery.length === 0) {
    return <Navigate to="/" replace={true} />;
  }

  // Test (nanti hapus)
  if (searchQuery === 'Sapu') {
    return (
      <Fragment>
        <SearchNotFound keyword={searchQuery} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <AppHeader>
        <MobileNavbar
          hideSearchBar
          hideLoginBtn
          titleText={`Cari untuk : ${searchQuery}`}
        />
      </AppHeader>

      <div className="container mx-auto mt-3 mb-24 px-4">
        <div className="mb-4">
          <small className="text-borderSecondary">20 produk ditemukan</small>
        </div>

        <div>
          <div className="products-card-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between gap-2 sm:gap-8 lg:gap-x-24">
            {Array(1, 2, 3, 4, 5, 6, 7, 8).map((val) => {
              return (
                <ProductItemCard
                  key={val}
                  id={1}
                  productName="Indomie Goreng"
                  thumbnailUrl="https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Placeholder+Terlaris+1"
                  price={3500}
                />
              );
            })}
          </div>
        </div>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const Search = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('q');

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <SearchMobile
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchQuery={searchQuery}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <SearchDesktop
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
      />
    </Fragment>
  );
};
export default Search;
