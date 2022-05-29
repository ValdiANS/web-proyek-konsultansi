import { Fragment, useEffect, useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import config, { screenConfig } from '../../../script/config/config';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import MobileNavbar from '../../Nav/MobileNavbar';
import Navbar from '../../Nav/Navbar';

import ProductItemCard from '../../ProductItemCard/ProductItemCard';
import SearchNotFound from './SearchNotFound';

const SearchDesktop = ({
  searchQuery,
  productList = [],
  isLoading = false,
}) => {
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
            {productList.map((product) => {
              return (
                <ProductItemCard
                  key={product._id}
                  product={product}
                  amount={1}
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

const SearchMobile = ({ searchQuery, productList = [], isLoading = false }) => {
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
          <small className="text-borderSecondary">
            {productList.length} produk ditemukan
          </small>
        </div>

        <div>
          <div className="products-card-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between gap-2 sm:gap-8 lg:gap-x-24">
            {productList.map((product) => {
              return (
                <ProductItemCard
                  key={product._id}
                  product={product}
                  amount={1}
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

  const [searchedProductList, setSearchedProductList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  useEffect(() => {
    const fetchSearchedProducts = async () => {
      const response = await fetch(config.apiUrl.products);

      if (!response.ok) {
        throw new Error('Could not fetch searched products data!');
      }

      const respData = await response.json();

      const filteredProducts = (respData.data || []).filter((product) =>
        product.nama.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchedProductList(filteredProducts);

      setIsLoading(false);
    };

    setIsLoading(true);

    try {
      fetchSearchedProducts();
    } catch (error) {
      console.log('Error');
      console.log(error);

      alert(error.message);
    }
  }, [searchQuery]);

  if (!searchQuery || searchQuery === '' || searchQuery.length === 0) {
    return <Navigate to="/" replace={true} />;
  }

  if (searchedProductList.length === 0) {
    return (
      <Fragment>
        {!isLoading && <SearchNotFound keyword={searchQuery} />}
      </Fragment>
    );
  }

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <SearchMobile
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchQuery={searchQuery}
          productList={searchedProductList}
          isLoading={isLoading}
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
        productList={searchedProductList}
        isLoading={isLoading}
      />
    </Fragment>
  );
};
export default Search;
