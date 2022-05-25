import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import MobileNavbar from '../../Nav/MobileNavbar';
import Navbar from '../../Nav/Navbar';

const ForgetPasswordDesktop = () => {
  const navigate = useNavigate();

  const sendEmailSubmitHandler = (e) => {
    e.preventDefault();

    alert('Email submitted!');

    navigate('/');
  };

  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      <div className="container mx-auto mb-16">
        <div className="breadcumb-container mb-5">
          <Link to="/login" className="text-borderSecondary">
            Login
          </Link>
        </div>

        <div className="w-full max-w-screen-md mx-auto">
          <section>
            <h1 className="text-3xl font-bold">Apa anda melupakan password?</h1>

            <p className="font-light mt-2">
              Jika anda lupa, ketikkan email anda yang digunakan untuk login.
              Kami akan mengirimkan email berisikan password sementara
            </p>

            <form
              onSubmit={sendEmailSubmitHandler}
              className="max-w-[350px] mt-8 space-y-6"
            >
              <div className="input flex flex-col">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-b border-b-solid border-b-black"
                />
              </div>

              <button
                type="submit"
                className="w-full max-w-[350px] bg-primary px-x py-2 text-white"
              >
                KIRIM
              </button>
            </form>
          </section>
        </div>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const ForgetPasswordMobile = () => {
  const navigate = useNavigate();

  const sendEmailSubmitHandler = (e) => {
    e.preventDefault();

    alert('Email submitted!');

    navigate('/');
  };

  return (
    <Fragment>
      <AppHeader>
        <MobileNavbar
          hideSearchBar
          hideLoginBtn
          hideCartBtn
          titleText="Lupa Password"
        />
      </AppHeader>

      <div className="container mx-auto mb-16 px-4 pt-20">
        <section>
          <h1 className="font-semibold text-2xl mb-6">
            Apa anda melupakan password ?
          </h1>

          <p className="font-light text-lg">
            Jika anda lupa, ketikkan email anda yang digunakan untuk login. Kami
            akan mengirimkan email berisikan password sementara
          </p>

          <form onSubmit={sendEmailSubmitHandler} className="my-9">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="text-xl font-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-b border-b-solid border-b-black text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary px-x py-2 text-white rounded-10px mt-8"
            >
              KIRIM
            </button>
          </form>
        </section>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const ForgetPassword = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <ForgetPasswordMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ForgetPasswordDesktop />
    </Fragment>
  );
};

export default ForgetPassword;
