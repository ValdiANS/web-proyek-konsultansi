import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '../../../script/config/config';
import {
  adminLoginActions,
  getAdminLoginFromLocalStorage,
  setAdminLoginAndStoreAdminInfo,
} from '../../../store/admin-login-slice';
import LoginFailedModal from '../../Modal/LoginFailedModal';
import LoginSuccessModal from '../../Modal/LoginSuccessModal';

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(getAdminLoginFromLocalStorage());

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);
  const [showLoginFailedModal, setShowLoginFailedModal] = useState(false);

  const isAdminLogin = useSelector((state) => state.admin.isAdminLogin);
  const adminId = useSelector((state) => state.admin.adminId);

  const fetchAdminInfo = async () => {
    if (!isAdminLogin) {
      return;
    }

    try {
      const adminResponse = await fetch(config.apiUrl.admin(adminId));

      if (!adminResponse.ok) {
        throw new Error('Could not fetch admin data!');
      }

      const adminResponseJson = await adminResponse.json();

      dispatch(
        adminLoginActions.setAdminLogin({
          id: adminId,
          adminInfo: adminResponseJson.data,
        })
      );

      navigate('/dashboard');
    } catch (error) {
      console.log('Failed to fetch admin info!');
      console.log('Admin Login Page Error');

      console.log(error.message);
    }
  };

  fetchAdminInfo();

  const usernameChangeHandler = (e) => {
    setUsernameValue(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const adminLoginSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const adminsResponse = await fetch(config.apiUrl.admins);
      const adminsResponseJson = await adminsResponse.json();

      if (adminsResponseJson.error) {
        throw new Error(
          'Could not fetch admins data! No admin account registered!'
        );
      }

      const admins = adminsResponseJson.data;

      console.log(admins);

      const adminData = admins.find(
        ({ username, password }) =>
          username === usernameValue && password === passwordValue
      );

      console.log(adminData);

      if (!adminData) {
        // alert('Username atau password salah!');
        setShowLoginFailedModal(true);
        return;
      }

      dispatch(
        setAdminLoginAndStoreAdminInfo({
          id: adminData._id,
          adminInfo: adminData,
        })
      );

      setShowLoginSuccessModal(true);
    } catch (error) {
      console.log('Failed to login as admin!');
      console.log('Admin Page Error');

      console.log(error.message);
    }
  };

  const hideLoginSuccessModalHandler = () => {
    setShowLoginSuccessModal(false);

    navigate('/dashboard');
  };

  const hideLoginFailedModalHandler = () => {
    setShowLoginFailedModal(false);
  };

  return (
    <Fragment>
      {showLoginSuccessModal && (
        <LoginSuccessModal
          onHide={hideLoginSuccessModalHandler}
          username={usernameValue}
        />
      )}

      {showLoginFailedModal && (
        <LoginFailedModal
          onHide={hideLoginFailedModalHandler}
          message="Username atau password salah!"
        />
      )}

      <div className="container mx-auto px-4 grid place-items-center h-screen">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Admin Login</h1>

          <form
            onSubmit={adminLoginSubmitHandler}
            className="flex flex-col gap-y-4 w-full max-w-[400px]"
          >
            <div className="input flex flex-col">
              <label htmlFor="username" className="text-lg">
                Username
              </label>
              <input
                type="text"
                id="userame"
                value={usernameValue}
                onChange={usernameChangeHandler}
                className="border-b border-b-solid border-b-black px-2 py-1"
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
                className="border-b border-b-solid border-b-black px-2 py-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary px-4 py-2 text-white mt-4"
            >
              MASUK
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLogin;
