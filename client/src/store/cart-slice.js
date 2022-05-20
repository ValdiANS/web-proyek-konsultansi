import { createSlice } from '@reduxjs/toolkit';

/*
cart item data schema:
{
  id: 1,
  name: 'Test',
  price: 6,
  quantity: 3,
  total: 18
}
*/

const checkIsItemExist = (
  targetItem = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    quantity: 0,
    total: 0,
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

const initialCartState = {
  items: [
    {
      id: 0,
      name: 'Test Item',
      quantity: 3,
      price: 6,
      total: 18,
    },
  ],
  totalQuantity: 3,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity;
    },

    addCartItem(state, action) {
      state.changed = true;

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
      } catch (err) {
        alert(err.message);
        console.log('Error:');
        console.log(err);
      }
    },

    increaseItemQuantity(state, action) {
      state.changed = true;

      state.totalQuantity += action.payload.amount;

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[itemIndex].quantity += action.payload.amount;

      state.items[itemIndex].total =
        state.items[itemIndex].price * state.items[itemIndex].quantity;
    },

    decreaseItemQuantity(state, action) {
      state.changed = true;

      state.totalQuantity -= action.payload.amount;

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemQuantity = state.items[itemIndex].quantity;

      if (itemQuantity === 1) {
        state.items.splice(itemIndex, 1);
        return;
      }

      state.items[itemIndex].quantity -= action.payload.amount;

      state.items[itemIndex].total =
        state.items[itemIndex].price * state.items[itemIndex].quantity;
    },
  },
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartReducer, cartActions };
export default cartSlice;
