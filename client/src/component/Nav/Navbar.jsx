import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';

import Logo from '../../asset/logo-mitra.png';
import CartIcon from '../SVG/CartIcon';
import UserIcon from '../SVG/UserIcon';
import SearchIcon from '../SVG/SearchIcon';

const Navbar = ({ hideSearchBar = false }) => {
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

  return (
    <div className="py-3 px-4 sticky top-0 sm:px-0">
      <nav className="container mx-auto flex flex-row items-center justify-between gap-x-4">
        <XyzTransition appear xyz="fade-100% left-100% ease-in-out-back">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo Hijrah" className="w-16 lg:h-16" />
          </a>
        </XyzTransition>

        <div className="w-full flex flex-row items-center justify-end gap-x-7">
          {!hideSearchBar && (
            <XyzTransition appear xyz="fade-100% up-100% ease-in-out-back">
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
            </XyzTransition>
          )}

          <div className="widget-group">
            <XyzTransitionGroup
              className="flex flex-row"
              appear
              xyz="fade-100% right-100% ease-in-out-back stagger-1"
            >
              <Link
                to="/cart"
                className="cart flex flex-row items-center gap-x-4 px-2 py-2 rounded-lg duration-200 hover:bg-gray-100 active:brightness-90 sm:px-4"
              >
                <div className="cart-icon">
                  <CartIcon className="w-10" />
                </div>
                <div className="cart__content text-textPrimary text-sm hidden sm:block">
                  <div>Keranjang</div>
                  <div className="cart__content__price text-textSecondary">
                    Rp. 0
                  </div>
                </div>
              </Link>

              <Link
                to="/login"
                className="user flex flex-row items-center gap-x-2 px-2 py-2 rounded-lg duration-200 hover:bg-gray-100 active:brightness-90 sm:px-4"
              >
                <div className="user-icon">
                  <UserIcon className="w-10" />
                </div>
                <div className="user-name text-lg font-medium hidden sm:block">
                  Login
                </div>
              </Link>
            </XyzTransitionGroup>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
