import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import LoginSuccessModal from '../../Modal/LoginSuccessModal';
import Navbar from '../../Nav/Navbar';

const Login = () => {
  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);

  const [emailValue, setEmailValue] = useState('');

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    alert('Login submitted!');
    setShowLoginSuccessModal(true);
  };

  const hideLoginSuccessModalHandler = () => {
    setShowLoginSuccessModal(false);
  };

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
                    className="border-b border-b-solid border-b-black"
                  />
                </div>
              </div>

              <Link to="/forget-password" className="text-lg my-3 block">
                Apa anda lupa dengan password?
              </Link>

              <button
                type="submit"
                className="w-full max-w-[350px] bg-primary px-x py-2 text-white"
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
                className="w-full max-w-[350px] bg-primary px-x py-2 text-white block text-center"
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

export default Login;
