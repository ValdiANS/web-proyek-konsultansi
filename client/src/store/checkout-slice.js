import { createSlice } from '@reduxjs/toolkit';

/*
checkout item data schema:
  {
    _id: '',
    nama: '',
    brand: '',
    berat: 0,
    id_kategori: '',
    harga: 0,
    stok: 0,
    link_gambar: '',
    kuantitas: 0,
    totalHarga: 0,
    selected: false,
  },
*/

const initialCheckoutState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialCheckoutState,
  reducers: {
    replaceCheckoutState(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

const checkoutReducer = checkoutSlice.reducer;
const checkoutActions = checkoutSlice.actions;

export { checkoutReducer, checkoutActions };
export default checkoutSlice;
