import { createSlice } from '@reduxjs/toolkit';
import config from '../script/config/config';

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
    detailCartId: '',
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
    detailCartId: '',
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

    replaceCartItems(state, action) {
      state.items = action.payload;

      state.totalQuantity = state.items.reduce(
        (prevVal, currVal) => prevVal + currVal.kuantitas,
        0
      );

      const selectedItems = state.items.filter((item) => item.selected);
      state.totalPrice = calculateTotalPrice(selectedItems);
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

    replaceItemQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      state.items[itemIndex].kuantitas = action.payload.kuantitas;
      state.items[itemIndex].totalHarga =
        state.items[itemIndex].harga * state.items[itemIndex].kuantitas;

      if (itemQuantity === 1) {
        // state.items.splice(itemIndex, 1);

        // Unselect
        state.items[itemIndex].selected = false;
        return;
      }

      state.totalQuantity = state.items.reduce(
        (prevVal, currVal) => prevVal + currVal.kuantitas,
        0
      );

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

const addCartItemToAccount = (item, userCartId) => {
  return async (dispatch) => {
    /*
      1. get userId dan userCartId
      2. post ke detail cart
      3. cek, apakah product sudah ada di detail cart
      4. jika sudah, ganti kuantitasnya
      5. jika belum, masukkin data yang baru
    */

    const userId = localStorage.getItem('userId');
    const userCartId = localStorage.getItem('userCartId');

    try {
      const detailCartsResponse = await fetch(config.apiUrl.detailcarts);
      const detailCartsResponseJson = await detailCartsResponse.json();

      if (detailCartsResponseJson?.error === 'DetailCart not found') {
        try {
          const detailCartPostResponse = await fetch(
            config.apiUrl.detailcart(''),
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id_cart: userCartId,
                id_produk: item._id,
                jumlah_produk: item.kuantitas,
                catatan: '',
              }),
            }
          );

          if (!detailCartPostResponse.ok) {
            throw new Error(
              'Could not process cart data! Please try again or refresh browser!'
            );
          }

          const detailCartPostResponseJson =
            await detailCartPostResponse.json();

          dispatch(
            cartSlice.actions.addCartItem({
              ...item,
              detailCartId: detailCartPostResponseJson.id,
            })
          );

          return;
        } catch (error) {
          console.log('Cart Slice Error');
          console.log(error);

          alert(error.message);

          return;
        }
      }

      if (!detailCartsResponseJson?.error) {
        const isProductExist = detailCartsResponseJson.data.find(
          (detailCartItem) => detailCartItem.id_produk === item._id
        );

        if (isProductExist) {
          try {
            const updateDetailCartResponse = await fetch(
              config.apiUrl.detailcart(isProductExist._id),
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id_cart: userCartId,
                  id_produk: item._id,
                  jumlah_produk: item.kuantitas,
                  catatan: '',
                }),
              }
            );

            const updateDetailCartResponseJson =
              await updateDetailCartResponse.json();

            if (!updateDetailCartResponseJson.success) {
              throw new Error(
                'Could not update detail cart! Please try again or refresh browser!'
              );
            }

            return;
          } catch (error) {
            console.log('Failed to update detail cart');
            console.log('Cart Slice Error');
            console.log(error);

            alert(error.message);
            return;
          }
        }

        if (!isProductExist) {
          try {
            const detailCartPostResponse = await fetch(
              config.apiUrl.detailcart(''),
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id_cart: userCartId,
                  id_produk: item._id,
                  jumlah_produk: item.kuantitas,
                  catatan: '',
                }),
              }
            );

            if (!detailCartPostResponse.ok) {
              throw new Error(
                'Could not add cart data! Please try again or refresh browser!'
              );
            }

            const detailCartPostResponseJson =
              await detailCartPostResponse.json();

            dispatch(
              cartSlice.actions.addCartItem({
                ...item,
                detailCartId: detailCartPostResponseJson.id,
              })
            );

            return;
          } catch (error) {
            console.log('Failed to add detail cart!');
            console.log('Cart Slice Error');
            console.log(error);

            console.log(error.message);

            return;
          }
        }
      }
    } catch (error) {
      console.log('Cart Slice Error');
      console.log(error);

      alert(error.message);
    }
  };
};

const getCartItemFromAccount = (userCartId) => {
  return async (dispatch) => {
    const userCartId = localStorage.getItem('userCartId');

    try {
      const detailCartsResponse = await fetch(config.apiUrl.detailcarts);
      const detailCartsResponseJson = await detailCartsResponse.json();

      if (!detailCartsResponseJson?.success) {
        return;
      }

      const userDetailCartItems = detailCartsResponseJson.data.filter(
        (detailCart) => detailCart.id_cart === userCartId
      );

      // console.log(userCartId);
      // console.log(userDetailCartItems);

      const formattedUserDetailCartItems = [];

      for (let i = 0; i < userDetailCartItems.length; i++) {
        try {
          const productDataResponse = await fetch(
            config.apiUrl.product(userDetailCartItems[i].id_produk)
          );

          if (!productDataResponse.ok) {
            throw new Error(
              `Could not fetch ${userDetailCartItems[i].id_produk} data! Please try again and refresh browser!`
            );
          }

          const productDataResponseJson = await productDataResponse.json();

          formattedUserDetailCartItems.push({
            _id: userDetailCartItems[i].id_produk,
            nama: productDataResponseJson.data.nama,
            brand: productDataResponseJson.data.brand,
            berat: productDataResponseJson.data.berat,
            id_kategori: productDataResponseJson.data.id_kategori,
            harga: productDataResponseJson.data.harga,
            stok: productDataResponseJson.data.stok,
            link_gambar: productDataResponseJson.data.link_gambar,
            kuantitas: userDetailCartItems[i].jumlah_produk,
            totalHarga:
              userDetailCartItems[i].jumlah_produk *
              productDataResponseJson.data.harga,
            selected: true,
            detailCartId: userDetailCartItems[i]._id,
          });

          console.log(index);
        } catch (error) {
          console.log('Failed to get cart item data!');
          console.log('Cart Slice Error');

          console.log(error.message);
        }
      }

      // console.log(formattedUserDetailCartItems);

      dispatch(
        cartSlice.actions.replaceCartItems(formattedUserDetailCartItems)
      );

      return;
    } catch (error) {
      console.log('Failed to get account cart item!');
      console.log('Cart Slice Error');
      console.log(error);

      alert(error.message);
    }
  };
};

const replaceItemQuantityAndInDb = (productId, newQuantity, detailCartId) => {
  return async (dispatch) => {
    const userCartId = localStorage.getItem('userCartId');

    try {
      const updateDetailCartResponse = await fetch(
        config.apiUrl.detailcart(detailCartId),
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_cart: userCartId,
            id_produk: productId,
            jumlah_produk: newQuantity,
            catatan: '',
          }),
        }
      );

      if (!updateDetailCartResponse.ok) {
        throw new Error('Could not process cart amount data!');
      }

      dispatch(
        cartSlice.actions.replaceItemQuantity({
          _id: productId,
          kuantitas: newQuantity,
        })
      );
    } catch (error) {
      console.log('Failed to replace item quantity!');
      console.log('Cart Slice Error');
      console.log(error.message);
    }
  };
};

const getCartItemsFromSessionStorage = () => {
  return (dispatch) => {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    dispatch(cartSlice.actions.replaceCartItems(cartItems));
  };
};

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export {
  cartReducer,
  cartActions,
  addCartItemToAccount,
  getCartItemFromAccount,
  replaceItemQuantityAndInDb,
  getCartItemsFromSessionStorage,
};
export default cartSlice;
