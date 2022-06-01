import { createSlice } from '@reduxjs/toolkit';
import config from '../script/config/config';

/*
dashboard item data schema : {
  productId: {
    _id: '',
    nama: '',
    brand: '',
    berat: 0,
    id_kategori: '',
    harga: 0,
    stok: 0,
    link_gambar: '',
    selected: false
  }
}
*/

const initialDashboardState = {
  categories: {},
  products: {},

  isAllSelected: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialDashboardState,
  reducers: {
    setCategories(state, action) {
      for (let i = 0; i < action.payload.length; i++) {
        state.categories[action.payload[i]._id] = action.payload[i];
      }
    },

    setProducts(state, action) {
      for (let i = 0; i < action.payload.length; i++) {
        state.products[action.payload[i]._id] = {
          ...action.payload[i],
          selected: false,
        };
      }
    },

    addProduct(state, action) {
      state.products[action.payload._id] = {
        _id: action.payload._id,
        nama: action.payload.nama,
        brand: action.payload.brand,
        berat: action.payload.berat,
        id_kategori: action.payload.id_kategori,
        harga: action.payload.harga,
        stok: action.payload.stok,
        link_gambar: action.payload.link_gambar,
      };
    },

    editProduct(state, action) {
      state.products[action.payload._id].nama = action.payload.nama;
      state.products[action.payload._id].brand = action.payload.brand;
      state.products[action.payload._id].berat = action.payload.berat;
      state.products[action.payload._id].id_kategori =
        action.payload.id_kategori;
      state.products[action.payload._id].harga = action.payload.harga;
      state.products[action.payload._id].stok = action.payload.stok;
      state.products[action.payload._id].link_gambar =
        action.payload.link_gambar;
    },

    deleteProduct(state, action) {
      const newProducts = {};

      Object.keys(state.products).forEach((productId) => {
        if (productId !== action.payload) {
          newProducts[productId] = {
            ...state.products[productId],
          };
        }
      });

      state.products = newProducts;
    },

    deleteAllProduct(state, action) {
      state.products = {};
    },

    selectItem(state, action) {
      state.products[action.payload].selected = true;

      const selectedItems = Object.keys(state.products).map(
        (productId) => state.products[productId].selected === true
      );

      if (selectedItems.length === Object.keys(state.products).length) {
        state.isAllSelected = true;
      }
    },

    unselectItem(state, action) {
      state.products[action.payload].selected = false;
      state.isAllSelected = false;
    },

    selectAllItem(state, action) {
      Object.keys(state.products).forEach((productId) => {
        state.products[productId].selected = true;
      });

      state.isAllSelected = true;
    },

    unselectAllItem(state, action) {
      Object.keys(state.products).forEach((productId) => {
        state.products[productId].selected = false;
      });

      state.isAllSelected = false;
    },
  },
});

const dashboardReducer = dashboardSlice.reducer;
const dashboardAction = dashboardSlice.actions;

// Action creator thunk
const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const categoriesResponse = await fetch(config.apiUrl.categories);
      const categoriesResponseJson = await categoriesResponse.json();

      if (categoriesResponseJson.error) {
        throw new Error(
          'Could not fetch categories! There is no categories data!'
        );
      }

      dispatch(dashboardAction.setCategories(categoriesResponseJson.data));
    } catch (error) {
      console.log('Failed to get all categories!');
      console.log('Dashboard Slice Error');

      console.log(error.message);
    }
  };
};

const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const productsResponse = await fetch(config.apiUrl.products);
      const productsResponseJson = await productsResponse.json();

      if (productsResponseJson.error) {
        throw new Error('Could not fetch products! There is no products data!');
      }

      dispatch(dashboardAction.setProducts(productsResponseJson.data));
    } catch (error) {
      console.log('Failed to get all products!');
      console.log('Dashboard Slice Error');

      console.log(error.message);
    }
  };
};

export { dashboardReducer, dashboardAction, getAllCategories, getAllProducts };
export default dashboardSlice;
