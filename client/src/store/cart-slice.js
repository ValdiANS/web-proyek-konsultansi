import { createSlice } from '@reduxjs/toolkit';

/*
cart item data schema:
{
    id: 0
    thumbnailUrl:
      'https://dummyimage.com/1280x862/e5e5e5/FFFFFF.png&text=Cart+Item+1',
    name: 'Indomie Goreng 1',
    brand: 'Indofood',
    price: 3500,
    quantity: 1,
    inStock: true,
    selected: false
  },

*/

const checkIsItemExist = (
  targetItem = {
    id: 0,
    thumbnailUrl: '',
    name: '',
    brand: '',
    price: 0,
    quantity: 0,
    inStock: true,
    selected: false,
  },

  items = []
) => {
  const idx = items.findIndex((item) => item.id === targetItem.id);

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
  const totalPrice = items.reduce((prev, current) => prev + current.price, 0);

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
        const item = action.payload.item;
        const checkItem = checkIsItemExist(item, state.items);

        state.totalQuantity += item.quantity;

        if (!checkItem.isItemExist) {
          state.items.push(item);

          return;
        }

        state.items[checkItem.itemIndex].quantity += item.quantity;
        state.items[checkItem.itemIndex].total =
          state.items[checkItem.itemIndex].price *
          state.items[checkItem.itemIndex].quantity;

        state.totalPrice = calculateTotalPrice(state.items);
      } catch (err) {
        alert(err.message);
        console.log('Error:');
        console.log(err);
      }
    },

    increaseItemQuantity(state, action) {
      state.totalQuantity += action.payload.quantity;

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[itemIndex].quantity += action.payload.quantity;

      state.items[itemIndex].total =
        state.items[itemIndex].price * state.items[itemIndex].quantity;

      state.totalPrice = calculateTotalPrice(state.items);
    },

    decreaseItemQuantity(state, action) {
      state.totalQuantity -= action.payload.quantity;

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemQuantity = state.items[itemIndex].quantity;

      if (itemQuantity === 1) {
        // state.items.splice(itemIndex, 1);
        return;
      }

      state.items[itemIndex].quantity -= action.payload.quantity;

      state.items[itemIndex].total =
        state.items[itemIndex].price * state.items[itemIndex].quantity;

      state.totalPrice = calculateTotalPrice(state.items);
    },

    selectItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[itemIndex].selected = true;
    },

    unselectItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[itemIndex].selected = false;
    },
  },
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartReducer, cartActions };
export default cartSlice;
