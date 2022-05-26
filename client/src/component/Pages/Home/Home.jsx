import { Fragment, useState } from 'react';
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';

import 'swiper/css';

import Logo from '../../../asset/logo-mitra.png';

import Hero from './Hero/Hero';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import NeedsSection from './NeedsSection/NeedsSection';
import BestSellerSection from './BestSellerSection';
import RecommendationsSection from './RecommendationsSection';
import MarqueeBrandSection from './MarqueeBrandSection';
import AppHeader from '../../Layout/AppHeader';
import Navbar from '../../Nav/Navbar';
import AppFooter from '../../Layout/AppFooter';

import { screenConfig } from '../../../script/config/config';
import useWindowSize from '../../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../SVG/SearchIcon';

const HomeDesktop = () => {
  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      <div className="w-full">
        <Hero />

        <CategoriesSection className="mt-16 mb-7 px-4 sm:px-0" />

        <FeaturedSection className="my-7 px-4 sm:px-0" />

        <section className="divider flex flex-row justify-center items-center gap-x-20 bg-primary p-5">
          <div className="img-container">
            <a href="/" className="logo">
              <img src={Logo} alt="Logo Hijrah" className="w-20" />
            </a>
          </div>

          <h1 className="font-semibold text-5xl text-white">
            Mari Hijrah Bersama
          </h1>
        </section>

        <div className="bg-corak pt-4 pb-16">
          <NeedsSection className="px-4 sm:px-0" />

          <BestSellerSection className="mt-12 px-4 sm:px-0" />

          <RecommendationsSection className="mt-12 px-4 sm:px-0" />
        </div>

        <MarqueeBrandSection />
      </div>

      <AppFooter />
    </Fragment>
  );
};

const HomeMobile = ({
  navigate,
  enteredSearch = '',
  setEnteredSearch = (val) => {},
  isSearchInputValid = false,
  searchFormSubmitHandler = (e) => {},
  searchChangeHandler = (e) => {},
  resetSearchHandler = () => {},
}) => {
  return (
    <Fragment>
      <AppHeader>
        <Navbar hideSearchBar />
      </AppHeader>
      <div className="w-full">
        {/* Search Bar */}
        <div className="w-full flex flex-row justify-center px-4 mt-4">
          <form
            onSubmit={searchFormSubmitHandler}
            className="search-bar bg-primary rounded-10px flex flex-rows items-center w-full max-w-md overflow-hidden"
          >
            <div className="relative w-full flex flex-row items-center">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white pl-8 pr-10 py-2 rounded-10px w-full border-2 border-solid border-primary border-r-0 focus:outline-none"
                value={enteredSearch}
                onChange={searchChangeHandler}
                required
              />

              <XyzTransition xyz="fade-100% in-up-100% out-down-100% ease-in-out-back duration-3">
                {isSearchInputValid && (
                  <button
                    type="reset"
                    className="absolute right-3 text-2xl"
                    onClick={resetSearchHandler}
                  >
                    &#10006;
                  </button>
                )}
              </XyzTransition>
            </div>

            <button type="submit" className="w-7 mx-5">
              <SearchIcon className="w-full h-full" />
            </button>
          </form>
        </div>

        <Hero />

        <CategoriesSection className="mt-5 mb-6 px-4" />

        <FeaturedSection className="mt-6 mb-5 px-4" />

        <section className="divider flex flex-row justify-center items-center gap-x-10 bg-primary p-5">
          <div className="img-container">
            <a href="/" className="logo">
              <img src={Logo} alt="Logo Hijrah" className="w-8" />
            </a>
          </div>

          <h1 className="font-semibold text-xl text-white">
            Mari Hijrah Bersama
          </h1>
        </section>

        <div className="bg-corak pt-9 pb-16">
          <NeedsSection className="px-4 sm:px-0" />

          <BestSellerSection className="mt-7 px-4" />

          <RecommendationsSection className="mt-7 px-4" />
        </div>

        <MarqueeBrandSection />
      </div>

      <AppFooter />
    </Fragment>
  );
};

const Home = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  const navigate = useNavigate();

  const [enteredSearch, setEnteredSearch] = useState('');

  const isSearchInputValid = enteredSearch.trim().length > 0;

  const searchFormSubmitHandler = (e) => {
    e.preventDefault();

    console.log(enteredSearch);

    alert(`Submitted: ${enteredSearch}`);

    navigate(`/search?q=${enteredSearch.trim()}`);
  };

  const searchChangeHandler = (e) => {
    setEnteredSearch(e.target.value);
  };

  const resetSearchHandler = () => {
    setEnteredSearch('');
  };

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <HomeMobile
          navigate={navigate}
          enteredSearch={enteredSearch}
          setEnteredSearch={setEnteredSearch}
          isSearchInputValid={isSearchInputValid}
          searchFormSubmitHandler={searchFormSubmitHandler}
          searchChangeHandler={searchChangeHandler}
          resetSearchHandler={resetSearchHandler}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <HomeDesktop />
    </Fragment>
  );
};

export default Home;
