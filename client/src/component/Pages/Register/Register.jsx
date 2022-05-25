import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { screenConfig } from '../../../script/config/config';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import RegisterSuccessModal from '../../Modal/RegisterSuccessModal';
import MobileNavbar from '../../Nav/MobileNavbar';
import Navbar from '../../Nav/Navbar';

const RegisterDesktop = () => {
  const navigate = useNavigate();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    alert('Register submitted!');

    setShowSuccessModal(true);
  };

  const hideSuccessModalHandler = () => {
    setShowSuccessModal(false);

    navigate('/login');
  };

  return (
    <Fragment>
      <AppHeader>
        <Navbar />
      </AppHeader>

      {showSuccessModal && (
        <RegisterSuccessModal onHide={hideSuccessModalHandler} />
      )}

      <div className="container mx-auto mb-16">
        <div className="breadcumb-container mb-5">
          <Link to="/login" className="text-borderSecondary">
            Login
          </Link>
        </div>

        <div className="max-w-screen-lg mx-auto">
          <section>
            <h1 className="text-3xl font-semibold">DAFTAR</h1>

            <form onSubmit={registerSubmitHandler}>
              <div className="grid grid-cols-2 gap-y-4 gap-x-20">
                <div className="input flex flex-col">
                  <label htmlFor="name" className="text-lg">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
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

                <div className="input flex flex-col">
                  <label htmlFor="confirmPassword" className="text-lg">
                    Ketikkan kembali password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="border-b border-b-solid border-b-black"
                  />
                </div>

                <div className="input flex flex-col">
                  <label htmlFor="noWA" className="text-lg">
                    No. Whatsapp
                  </label>
                  <input
                    type="text"
                    id="noWA"
                    className="border-b border-b-solid border-b-black"
                  />
                </div>

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

                <div className="input flex flex-col">
                  <label htmlFor="address" className="text-lg">
                    Alamat
                  </label>
                  <textarea
                    type="text"
                    id="address"
                    className="border-b border-b-solid border-b-black"
                  ></textarea>

                  <small className="font-light">
                    Agar barang sampai tujuan dengan cepat, berikan detail
                    tempat atau alamat seperti posisi rumah, warna rumah, dll
                  </small>
                </div>

                <div className="input flex flex-col">
                  <label htmlFor="postalCode" className="text-lg">
                    Kode Pos
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    className="border-b border-b-solid border-b-black"
                  />
                </div>

                <div className="input flex flex-col">
                  <label htmlFor="district" className="text-lg">
                    Kecamatan
                  </label>
                  <input
                    type="text"
                    id="district"
                    className="border-b border-b-solid border-b-black"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full max-w-[350px] bg-primary px-x py-2 text-white mt-12"
              >
                DAFTAR
              </button>
            </form>
          </section>
        </div>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const RegisterMobile = () => {
  const navigate = useNavigate();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    alert('Register submitted!');

    setShowSuccessModal(true);
  };

  const hideSuccessModalHandler = () => {
    setShowSuccessModal(false);

    navigate('/login');
  };

  return (
    <Fragment>
      <AppHeader>
        <MobileNavbar
          hideSearchBar
          hideLoginBtn
          hideCartBtn
          titleText="Daftar"
        />
      </AppHeader>

      {showSuccessModal && (
        <RegisterSuccessModal onHide={hideSuccessModalHandler} />
      )}

      <div className="container mx-auto mb-16 px-4 pt-20">
        <section>
          <h1 className="text-2xl font-semibold mb-6">Daftar</h1>

          <p className="text-lg font-light mb-6">
            Daftar jika anda pertama kali belanja di Toko Hijrah
          </p>

          <form onSubmit={registerSubmitHandler}>
            <div className="grid grid-cols-1 gap-y-4 gap-x-20">
              <div className="input flex flex-col gap-y-2">
                <label htmlFor="name" className="text-lg font-light">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-b border-b-solid border-b-black text-lg"
                />
              </div>

              <div className="input flex flex-col gap-y-2">
                <label htmlFor="password" className="text-lg font-light">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border-b border-b-solid border-b-black text-lg"
                />
              </div>

              <div className="input flex flex-col gap-y-2">
                <label htmlFor="confirmPassword" className="text-lg font-light">
                  Ketikkan kembali password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="border-b border-b-solid border-b-black text-lg"
                />
              </div>

              <div className="input flex flex-col gap-y-2">
                <label htmlFor="noWA" className="text-lg font-light">
                  No. Whatsapp
                </label>
                <input
                  type="text"
                  id="noWA"
                  className="border-b border-b-solid border-b-black text-lg"
                />
              </div>

              <div className="input flex flex-col gap-y-2">
                <label htmlFor="email" className="text-lg font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-b border-b-solid border-b-black text-lg"
                />
              </div>

              <div className="input flex flex-col gap-y-2">
                <label htmlFor="address" className="text-lg font-light">
                  Alamat
                </label>
                <textarea
                  type="text"
                  id="address"
                  className="border-b border-b-solid border-b-black text-lg"
                ></textarea>

                <small className="font-light text-base">
                  Agar barang sampai tujuan dengan cepat, berikan detail tempat
                  atau alamat seperti posisi rumah, warna rumah, dll
                </small>
              </div>

              <div className="input flex flex-col gap-y-2">
                <label htmlFor="postalCode" className="text-lg font-light">
                  Kode Pos
                </label>
                <input
                  type="text"
                  id="postalCode"
                  className="border-b border-b-solid border-b-black text-lg"
                />
              </div>

              <div className="input flex flex-col gap-y-2">
                <label htmlFor="district" className="text-lg font-light">
                  Kecamatan
                </label>
                <input
                  type="text"
                  id="district"
                  className="border-b border-b-solid border-b-black text-lg"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary px-x py-2 text-white mt-6 rounded-10px"
            >
              DAFTAR
            </button>
          </form>
        </section>
      </div>

      <AppFooter />
    </Fragment>
  );
};

const Register = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <RegisterMobile />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <RegisterDesktop />
    </Fragment>
  );
};

export default Register;