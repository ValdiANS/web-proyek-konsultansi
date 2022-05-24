import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import RegisterSuccessModal from '../../Modal/RegisterSuccessModal';
import Navbar from '../../Nav/Navbar';

const Register = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    alert('Register submitted!');

    setShowSuccessModal(true);
  };

  const hideSuccessModalHandler = () => {
    setShowSuccessModal(false);
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

                <div className="input flex flex-col col-start-1 col-end-2">
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

                <div className="input flex flex-col col-start-1 col-end-3">
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

export default Register;
