import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import config, { screenConfig } from '../../../script/config/config';
import AppFooter from '../../Layout/AppFooter';
import AppHeader from '../../Layout/AppHeader';
import RegisterSuccessModal from '../../Modal/RegisterSuccessModal';
import MobileNavbar from '../../Nav/MobileNavbar';
import Navbar from '../../Nav/Navbar';

const RegisterDesktop = ({
  showSuccessModal = false,
  registerSubmitHandler = (e) => {},
  hideSuccessModalHandler = () => {},
  nameValue = '',
  passwordValue = '',
  passwordConfirmationValue = '',
  whatsappNumberValue = '',
  emailValue = '',
  addressValue = '',
  nameValueChangeHandler = (e) => {},
  passwordValueChangeHandler = (e) => {},
  passwordConfirmationValueChangeHandler = (e) => {},
  whatsappNumberValueChangeHandler = (e) => {},
  emailValueChangeHandler = (e) => {},
  addressValueChangeHandler = (e) => {},
}) => {
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
                    value={nameValue}
                    onChange={nameValueChangeHandler}
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
                    value={passwordValue}
                    onChange={passwordValueChangeHandler}
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
                    value={passwordConfirmationValue}
                    onChange={passwordConfirmationValueChangeHandler}
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
                    value={whatsappNumberValue}
                    onChange={whatsappNumberValueChangeHandler}
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
                    value={emailValue}
                    onChange={emailValueChangeHandler}
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
                    value={addressValue}
                    onChange={addressValueChangeHandler}
                    className="border-b border-b-solid border-b-black"
                  ></textarea>

                  <small className="font-light">
                    Agar barang sampai tujuan dengan cepat, berikan detail
                    tempat atau alamat seperti posisi rumah, warna rumah, dll
                  </small>
                </div>

                {/* <div className="input flex flex-col">
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
                </div> */}
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

const RegisterMobile = ({
  showSuccessModal = false,
  registerSubmitHandler = (e) => {},
  hideSuccessModalHandler = () => {},
  nameValue = '',
  passwordValue = '',
  passwordConfirmationValue = '',
  whatsappNumberValue = '',
  emailValue = '',
  addressValue = '',
  nameValueChangeHandler = (e) => {},
  passwordValueChangeHandler = (e) => {},
  passwordConfirmationValueChangeHandler = (e) => {},
  whatsappNumberValueChangeHandler = (e) => {},
  emailValueChangeHandler = (e) => {},
  addressValueChangeHandler = (e) => {},
}) => {
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
                  value={nameValue}
                  onChange={nameValueChangeHandler}
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
                  value={passwordValue}
                  onChange={passwordValueChangeHandler}
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
                  value={passwordConfirmationValue}
                  onChange={passwordConfirmationValueChangeHandler}
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
                  value={whatsappNumberValue}
                  onChange={whatsappNumberValueChangeHandler}
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
                  value={emailValue}
                  onChange={emailValueChangeHandler}
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
                  value={addressValue}
                  onChange={addressValueChangeHandler}
                  className="border-b border-b-solid border-b-black text-lg"
                ></textarea>

                <small className="font-light text-base">
                  Agar barang sampai tujuan dengan cepat, berikan detail tempat
                  atau alamat seperti posisi rumah, warna rumah, dll
                </small>
              </div>

              {/* <div className="input flex flex-col gap-y-2">
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
              </div> */}
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
  const navigate = useNavigate();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordConfirmationValue, setPasswordConfirmationValue] =
    useState('');
  const [whatsappNumberValue, setWhatsappNumberValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  // const [postalCodeValue, setPostalCodeValue] = useState('');
  // const [subDistrictsValue, setSubDistrictsValue] = useState('');

  const registerSubmitHandler = async (e) => {
    e.preventDefault();

    // alert('Register submitted!');

    if (
      nameValue === '' ||
      passwordValue === '' ||
      passwordConfirmationValue === '' ||
      whatsappNumberValue === '' ||
      emailValue === '' ||
      addressValue === ''
    ) {
      alert('Gagal mendaftar akun! Terdapat yang data kosong!');

      return;
    }

    if (passwordValue !== passwordConfirmationValue) {
      alert(
        'Gagal mendaftar akun! Password dan konfirmasi password tidak sama!'
      );

      return;
    }

    try {
      const usersResponse = await fetch(config.apiUrl.users);

      if (!usersResponse.ok) {
        throw new Error(
          'Could not process register! Try again or refresh browser!'
        );
      }

      const usersResponseJson = await usersResponse.json();
      const users = usersResponseJson.data;

      const userInfo = users.find(({ email }) => {
        return email === emailValue;
      });

      if (userInfo) {
        alert('Gagal mendaftar akun! Email sudah terdaftar!');

        setNameValue('');
        setPasswordValue('');
        setPasswordConfirmationValue('');
        setWhatsappNumberValue('');
        setEmailValue('');
        setAddressValue('');

        return;
      }

      const registerResponse = await fetch(config.apiUrl.user(''), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: nameValue,
          username: emailValue,
          password: passwordValue,
          no_telp: whatsappNumberValue,
          email: emailValue,
          alamat: addressValue,
        }),
      });

      if (!registerResponse.ok) {
        throw new Error(
          'Could not process register! Try again or refresh browser!'
        );
      }

      const registerResponseJson = await registerResponse.json();

      const newCartResponse = await fetch(config.apiUrl.cart(''), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: registerResponseJson.id,
        }),
      });

      if (!newCartResponse.ok) {
        throw new Error(
          'Could not process register! Try again or refresh browser!'
        );
      }

      const newCartResponseJson = await newCartResponse.json();

      if (registerResponseJson.success && newCartResponseJson.success) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.log('Register error:');
      console.log(error);

      alert(error.message);
    }
  };

  const hideSuccessModalHandler = () => {
    setShowSuccessModal(false);

    navigate('/login');
  };

  const nameValueChangeHandler = (e) => {
    setNameValue(e.target.value);
  };

  const passwordValueChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const passwordConfirmationValueChangeHandler = (e) => {
    setPasswordConfirmationValue(e.target.value);
  };

  const whatsappNumberValueChangeHandler = (e) => {
    setWhatsappNumberValue(e.target.value);
  };

  const emailValueChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const addressValueChangeHandler = (e) => {
    setAddressValue(e.target.value);
  };

  if (screenWidth <= screenConfig.sm) {
    return (
      <Fragment>
        <RegisterMobile
          showSuccessModal={showSuccessModal}
          registerSubmitHandler={registerSubmitHandler}
          hideSuccessModalHandler={hideSuccessModalHandler}
          nameValue={nameValue}
          passwordValue={passwordValue}
          passwordConfirmationValue={passwordConfirmationValue}
          whatsappNumberValue={whatsappNumberValue}
          emailValue={emailValue}
          addressValue={addressValue}
          nameValueChangeHandler={nameValueChangeHandler}
          passwordValueChangeHandler={passwordValueChangeHandler}
          passwordConfirmationValueChangeHandler={
            passwordConfirmationValueChangeHandler
          }
          whatsappNumberValueChangeHandler={whatsappNumberValueChangeHandler}
          emailValueChangeHandler={emailValueChangeHandler}
          addressValueChangeHandler={addressValueChangeHandler}
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <RegisterDesktop
        showSuccessModal={showSuccessModal}
        registerSubmitHandler={registerSubmitHandler}
        hideSuccessModalHandler={hideSuccessModalHandler}
        nameValue={nameValue}
        passwordValue={passwordValue}
        passwordConfirmationValue={passwordConfirmationValue}
        whatsappNumberValue={whatsappNumberValue}
        emailValue={emailValue}
        addressValue={addressValue}
        nameValueChangeHandler={nameValueChangeHandler}
        passwordValueChangeHandler={passwordValueChangeHandler}
        passwordConfirmationValueChangeHandler={
          passwordConfirmationValueChangeHandler
        }
        whatsappNumberValueChangeHandler={whatsappNumberValueChangeHandler}
        emailValueChangeHandler={emailValueChangeHandler}
        addressValueChangeHandler={addressValueChangeHandler}
      />
    </Fragment>
  );
};

export default Register;
