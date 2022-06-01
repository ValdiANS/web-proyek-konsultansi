import { createSlice } from '@reduxjs/toolkit';
import config from '../script/config/config';

const initialAdminLoginState = {
  isAdminLogin: false,
  adminId: '',
  adminInfo: {},
};

const adminLoginSlice = createSlice({
  name: 'admin',
  initialState: initialAdminLoginState,
  reducers: {
    setAdminLogin(state, action) {
      state.isAdminLogin = true;
      state.adminId = action.payload.id;
      state.adminInfo = action.payload.adminInfo;
    },

    setAdminLogout(state, action) {
      state.isAdminLogin = false;
      state.adminId = '';
      state.adminInfo = {};
    },
  },
});

const adminLoginReducer = adminLoginSlice.reducer;
const adminLoginActions = adminLoginSlice.actions;

// Action creator thunk
const setAdminLoginAndStoreAdminInfo = ({ id = '', adminInfo }) => {
  return (dispatch) => {
    try {
      localStorage.setItem('isAdminLogin', 'true');
      localStorage.setItem('adminId', id);

      dispatch(adminLoginActions.setAdminLogin({ id, adminInfo }));
    } catch (error) {
      console.log('Failed to store admin info!');
      console.log('Admin Login Slice Error');

      console.log(error.message);
    }
  };
};

const getAdminLoginFromLocalStorage = () => {
  return async (dispatch) => {
    const isAdminLogin = Boolean(localStorage.getItem('isAdminLogin')) || false;
    const adminId = localStorage.getItem('adminId') || '';

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
    } catch (error) {
      console.log('Failed to get admin info!');
      console.log('Admin Login Slice Error');

      console.log(error.message);
    }
  };
};

const logoutAndDeleteFromLocalStorage = () => {
  return (dispatch) => {
    localStorage.removeItem('isAdminLogin');
    localStorage.removeItem('adminId');

    dispatch(adminLoginActions.setAdminLogout());
  };
};

export {
  adminLoginReducer,
  adminLoginActions,
  setAdminLoginAndStoreAdminInfo,
  getAdminLoginFromLocalStorage,
  logoutAndDeleteFromLocalStorage,
};

export default adminLoginSlice;
