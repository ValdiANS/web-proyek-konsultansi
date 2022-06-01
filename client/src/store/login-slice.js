import { createSlice } from '@reduxjs/toolkit';
import config from '../script/config/config';

const initialLoginState = {
  isLogin: false,
  userId: '',
  userInfo: {},
  userCartId: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    setLogin(state, action) {
      state.isLogin = true;
      state.userId = action.payload.id;
      state.userInfo = action.payload.userInfo;
      state.userCartId = action.payload.userCartId;
    },

    setLogout(state, action) {
      state.isLogin = false;
      state.userId = '';
      state.userInfo = {};
      state.userCartId = '';
    },
  },
});

// Action creator thunk
const setLoginAndStoreLoginInfo = ({ id = '' }) => {
  return async (dispatch) => {
    try {
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('userId', id);

      const userResponse = await fetch(config.apiUrl.user(id));
      const cartsResponse = await fetch(config.apiUrl.carts);

      if (!userResponse.ok) {
        throw new Error('Could not fetch user account info!');
      }

      if (!cartsResponse.ok) {
        throw new Error('Could not fetch user carts id!');
      }

      const userResponseJson = await userResponse.json();
      const cartsResponseJson = await cartsResponse.json();

      const userCartId = cartsResponseJson.data.find(
        (cartData) => cartData.id_user === id
      );

      console.log(userCartId._id);

      localStorage.setItem('userCartId', userCartId._id);

      dispatch(
        loginSlice.actions.setLogin({
          id,
          userInfo: userResponseJson.data,
          userCartId: userCartId._id,
        })
      );
    } catch (error) {
      console.log('Login slice Error:');
      console.log(error);

      alert(error.message);
    }
  };
};

const getLoginInfoFromLocalStorage = () => {
  return async (dispatch) => {
    const isLogin = Boolean(localStorage.getItem('isLogin')) || false;
    const userId = localStorage.getItem('userId') || '';
    const userCartId = localStorage.getItem('userCartId') || '';

    if (isLogin) {
      try {
        const response = await fetch(`${config.apiUrl.user(userId)}`);

        if (!response.ok) {
          throw new Error('Could not fetch user account info!');
        }

        const respData = await response.json();

        dispatch(
          loginSlice.actions.setLogin({ id: userId, userInfo: respData.data })
        );
      } catch (error) {
        console.log('Login slice Error:');
        console.log(error);

        alert(error.message);
      }
    }
  };
};

const logoutAndDeleteFromLocalStorage = () => {
  return (dispatch) => {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userId');
    localStorage.removeItem('userCartId');

    dispatch(loginSlice.actions.setLogout());
  };
};

const loginReducer = loginSlice.reducer;
const loginActions = loginSlice.actions;

export {
  loginReducer,
  loginActions,
  setLoginAndStoreLoginInfo,
  getLoginInfoFromLocalStorage,
  logoutAndDeleteFromLocalStorage,
};

export default loginSlice;
