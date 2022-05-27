import { createSlice } from '@reduxjs/toolkit';
import config from '../script/config/config';

const initialBestSellerState = {
  bestSellers: [],
};

const bestSellersSlice = createSlice({
  name: 'best-sellers',
  initialState: initialBestSellerState,
  reducers: {
    replaceBestSellers(state, action) {
      state.bestSellers = action.payload;
    },
  },
});

const bestSellersReducer = bestSellersSlice.reducer;
const bestSellersActions = bestSellersSlice.actions;

// Action Creator Thunk
const fetchBestSellersData = () => {
  return async (dispatch) => {
    const fetchBestSellers = async () => {
      // Ini perlu diganti ke best sellers endpoint
      const response = await fetch(`${config.apiUrl.products}`);

      if (!response.ok) {
        throw new Error('Could not fetch best sellers data!');
      }

      const respData = await response.json();

      return respData.data.slice(0, 4);
    };

    try {
      const bestSellersData = await fetchBestSellers();

      dispatch(bestSellersActions.replaceBestSellers(bestSellersData));
    } catch (error) {
      console.log('Error');
      console.log(error);

      alert(error.message);
    }
  };
};

export { bestSellersReducer, bestSellersActions, fetchBestSellersData };
export default bestSellersSlice;
