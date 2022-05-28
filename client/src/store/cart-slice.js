import { createSlice } from '@reduxjs/toolkit';

/*
cart item data schema:
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

const checkIsItemExist = (
  targetItem = {
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

  items = []
) => {
  const idx = items.findIndex((item) => item._id === targetItem._id);

  if (idx === -1) {
    return {
      isItemExist: false,
    };
  }

  return {
    isItemExist: true,
    itemIndex: idx,
  };
};

const calculateTotalPrice = (items = []) => {
  const totalPrice = items.reduce(
    (prev, current) => prev + current.totalHarga,
    0
  );

  return totalPrice;
};

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addCartItem(state, action) {
      try {
        const item = action.payload;
        const checkItem = checkIsItemExist(item, state.items);

        state.totalQuantity += item.kuantitas;

        if (!checkItem.isItemExist) {
          state.items.push(item);

          const selectedItems = state.items.filter((item) => item.selected);
          state.totalPrice = calculateTotalPrice(selectedItems);
          return;
        }

        state.items[checkItem.itemIndex].kuantitas += item.kuantitas;
        state.items[checkItem.itemIndex].totalHarga =
          state.items[checkItem.itemIndex].harga *
          state.items[checkItem.itemIndex].kuantitas;

        const selectedItems = state.items.filter((item) => item.selected);
        state.totalPrice = calculateTotalPrice(selectedItems);
      } catch (err) {
        alert(err.message);
        console.log('Error:');
        console.log(err);
      }
    },

    deleteCartItem(state, action) {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },

    deleteAllCartItem(state, action) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },

    increaseItemQuantity(state, action) {
      state.totalQuantity += action.payload.kuantitas;

      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      state.items[itemIndex].kuantitas += action.payload.kuantitas;

      state.items[itemIndex].totalHarga =
        state.items[itemIndex].harga * state.items[itemIndex].kuantitas;

      const selectedItems = state.items.filter((item) => item.selected);
      state.totalPrice = calculateTotalPrice(selectedItems);
    },

    decreaseItemQuantity(state, action) {
      state.totalQuantity -= action.payload.kuantitas;

      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      const itemQuantity = state.items[itemIndex].kuantitas;

      if (itemQuantity === 1) {
        // state.items.splice(itemIndex, 1);

        // Unselect
        state.items[itemIndex].selected = false;
        return;
      }

      state.items[itemIndex].kuantitas -= action.payload.kuantitas;

      state.items[itemIndex].totalHarga =
        state.items[itemIndex].harga * state.items[itemIndex].kuantitas;

      const selectedItems = state.items.filter((item) => item.selected);
      state.totalPrice = calculateTotalPrice(selectedItems);
    },

    selectItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      state.items[itemIndex].selected = !state.items[itemIndex].selected;

      const selectedItems = state.items.filter((item) => item.selected);
      state.totalPrice = calculateTotalPrice(selectedItems);
    },

    selectAllItem(state, action) {
      const selectedItems = state.items.filter((item) => item.selected);

      if (selectedItems.length === state.items.length) {
        state.items.forEach((item, index) => {
          state.items[index].selected = false;
        });

        state.totalPrice = 0;
        return;
      }

      state.items.forEach((item, index) => {
        state.items[index].selected = true;
      });

      state.totalPrice = calculateTotalPrice(state.items);
    },

    unselectItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      state.items[itemIndex].selected = false;
    },
  },
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartReducer, cartActions };
export default cartSlice;
