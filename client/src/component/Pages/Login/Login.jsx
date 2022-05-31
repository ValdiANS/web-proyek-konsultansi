import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import config, { screenConfig } from '../../../script/config/config';
import { getCartItemFromAccount } from '../../../store/cart-slice';
import { setLoginAndStoreLoginInfo } from '../../../store/login-slice';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import LoginFailedModal from '../../Modal/LoginFailedModal';
import LoginSuccessModal from '../../Modal/LoginSuccessModal';
import MobileNavbar from '../../Nav/MobileNavbar';
import Navbar from '../../Nav/Navbar';

const LoginDesktop = ({
  showLoginSuccessModal = false,
  showLoginFailedModal = false,
  loginFailedMessage = '',
  emailValue = '',
  passwordValue = '',
  emailChangeHandler = (e) => {},
  passwordChangeHandler = (e) => {},
  loginSubmitHandler = (e) => {},
  hideLoginSuccessModalHandler = () => {},
  hideLoginFailedModalHandler = () => {},
}) => {
  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      {showLoginSuccessModal && (
        <LoginSuccessModal
          onHide={hideLoginSuccessModalHandler}
          username={emailValue}
        />
      )}

      {showLoginFailedModal && (
        <LoginFailedModal
          onHide={hideLoginFailedModalHandler}
          message={loginFailedMessage}
        />
      )}

      <div className="container mx-auto mb-16">
        <div className="breadcumb-container mb-5">
          <Link to="/" className="text-borderSecondary">
            Home
          </Link>
        </div>

        <div className="w-full flex flex-row justify-center gap-x-32">
          <section className="w-full">
            <h1 className="text-3xl font-semibold mb-8">MASUK</h1>

            <form onSubmit={loginSubmitHandler}>
              <div className="space-y-4">
                <div className="input flex flex-col">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    className="border-b border-b-solid border-b-black"
                  />
                </div>

                <div className="input flex flex-col">
                  <label htmlFor="password" className="text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={passwordValue}
                    onChange={passwordChangeHandler}
                    className="border-b border-b-solid border-b-black"
                  />
                </div>
              </div>

              <Link
                to="/forget-password"
                className="text-lg my-3 block underline underline-offset-4 w-fit"
              >
                Apa anda lupa dengan password?
              </Link>

              <button
                type="submit"
                className="w-full max-w-[350px] bg-primary px-4 py-2 text-white"
              >
                MASUK
              </button>
            </form>
          </section>

          <section className="w-full">
            <h1 className="text-3xl font-semibold mb-8">DAFTAR</h1>

            <p className="text-lg mb-10 font-light">
              Jika anda belum mempunyai akun untuk berbelanja di Toko Hijrah,
              maka pilih opsi ini untuk mendaftar
            </p>

            <div className="flex flex-row justify-start">
              <Link
                to="/register"
                className="w-full max-w-[350px] bg-primary px-4 py-2 text-white block text-center"
              >
                DAFTAR
              </Link>
            </div>
          </section>
        </div>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const LoginMobile = ({
  showLoginSuccessModal = false,
  showLoginFailedModal = false,
  loginFailedMessage = '',
  emailValue = '',
  passwordValue = '',
  emailChangeHandler = (e) => {},
  passwordChangeHandler = (e) => {},
  loginSubmitHandler = (e) => {},
  hideLoginSuccessModalHandler = () => {},
  hideLoginFailedModalHandler = () => {},
}) => {
  return (
    <Fragment>
      <AppHeader>
        <MobileNavbar
          hideSearchBar
          hideLoginBtn
          hideCartBtn
          titleText="Masuk"
        />
      </AppHeader>

      {showLoginSuccessModal && (
        <LoginSuccessModal
          onHide={hideLoginSuccessModalHandler}
          username={emailValue}
        />
      )}

      {showLoginFailedModal && (
        <LoginFailedModal
          onHide={hideLoginFailedModalHandler}
          message={loginFailedMessage}
        />
      )}

      <div className="container mx-auto mb-16">
        <section className="px-4 pt-20">
          <h1 className="text-2xl font-semibold mb-5">Masuk</h1>

          <p className="font-light text-lg">
            Masuk untuk berbelanja dengan akun yang sudah terdaftar
          </p>

          <form
            onSubmit={loginSubmitHandler}
            className="mt-8 flex flex-col gap-y-4"
          >
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="font-light text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={emailValue}
                onChange={emailChangeHandler}
                className="border-b border-b-solid border-b-black text-lg"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="font-light text-xl">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={passwordValue}
                onChange={passwordChangeHandler}
                className="border-b border-b-solid border-b-black text-lg"
              />
            </div>

            <Link
              to="/forget-password"
              className="text-lg block underline underline-offset-4 w-fit"
            >
              Apa anda lupa dengan password?
            </Link>

            <div className="mt-4 flex flex-col gap-y-4">
              <button
                type="submit"
                className="w-full bg-primary px-4 py-2 text-white rounded-10px font-bold"
              >
                MASUK
              </button>

              <span className="block text-center">Atau</span>

              <Link
                to="/register"
                className="w-full bg-white border border-solid border-black px-4 py-2 text-black block text-center font-bold rounded-10px"
              >
                DAFTAR
              </Link>
            </div>
          </form>

          <p className="px-8 mt-4 text-center">
            Jika anda belum mempunyai akun untuk berbelanja di Toko Hijrah, maka
            pilih opsi ini untuk mendaftar
          </p>
        </section>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const Login = () => {
  const [screenWidth, screenHeight] = useWindowSize();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);
  const [showLoginFailedModal, setShowLoginFailedModal] = useState(false);
  const [loginFailedMessage, setLoginFailedMessage] =
    useState('Akun tidak ada');

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const isUserLogin = useSelector((state) => state.login.isLogin);
  const userId = useSelector((state) => state.login.userId);
  const userCartId = useSelector((state) => state.login.userCartId);

  useEffect(() => {
    if (isUserLogin && userCartId !== '') {
      console.log(userCartId);
      dispatch(getCartItemFromAccount(userCartId));

      return;
    }
  }, [isUserLogin, userCartId]);

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    // alert('Login submitted!');

    try {
      const usersResponse = await fetch(config.apiUrl.users);

      if (!usersResponse.ok) {
        throw new Error(
          'Could not process login! Try again or refresh browser!'
        );
      }

      const usersResponseJson = await usersResponse.json();
      const users = usersResponseJson.data;

      const userInfo = users.find(({ email }) => {
        return email === emailValue;
      });

      if (userInfo) {
        if (userInfo.password === passwordValue) {
          dispatch(setLoginAndStoreLoginInfo({ id: userInfo._id }));
          setShowLoginSuccessModal(true);

          return;
        }

        setLoginFailedMessage('Password salah!');
        setShowLoginFailedModal(true);
        return;
      }

      setLoginFailedMessage('Akun tidak ada!');
      setShowLoginFailedModal(true);
    } catch (error) {
      console.log('Login error:');
      console.log(error);

      alert(error.message);
    }
  };

  const hideLoginSuccessModalHandler = () => {
    setShowLoginSuccessModal(false);
    navigate('/');
  };

  const hideLoginFailedModalHandler = () => {
    setShowLoginFailedModal(false);
  };

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <LoginMobile
          showLoginSuccessModal={showLoginSuccessModal}
          showLoginFailedModal={showLoginFailedModal}
          loginFailedMessage={loginFailedMessage}
          emailValue={emailValue}
          passwordValue={passwordValue}
          emailChangeHandler={emailChangeHandler}
          passwordChangeHandler={passwordChangeHandler}
          loginSubmitHandler={loginSubmitHandler}
          hideLoginSuccessModalHandler={hideLoginSuccessModalHandler}
          hideLoginFailedModalHandler={hideLoginFailedModalHandler}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <LoginDesktop
        showLoginSuccessModal={showLoginSuccessModal}
        showLoginFailedModal={showLoginFailedModal}
        loginFailedMessage={loginFailedMessage}
        emailValue={emailValue}
        passwordValue={passwordValue}
        emailChangeHandler={emailChangeHandler}
        passwordChangeHandler={passwordChangeHandler}
        loginSubmitHandler={loginSubmitHandler}
        hideLoginSuccessModalHandler={hideLoginSuccessModalHandler}
        hideLoginFailedModalHandler={hideLoginFailedModalHandler}
      />
    </Fragment>
  );
};

export default Login;
