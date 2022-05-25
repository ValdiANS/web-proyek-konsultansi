import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { cartIsVisible: true, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const uiReducer = uiSlice.reducer;
const uiActions = uiSlice.actions;

export { uiReducer, uiActions };
export default uiSlice;
