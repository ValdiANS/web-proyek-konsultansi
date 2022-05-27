import { createSlice } from '@reduxjs/toolkit';
import config from '../script/config/config';

const initialRecommendationsState = {
  recommendations: [],
};

const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState: initialRecommendationsState,
  reducers: {
    replaceRecommendations(state, action) {
      state.recommendations = action.payload;
    },
  },
});

const recommendationsReducer = recommendationsSlice.reducer;
const recommendationsActions = recommendationsSlice.actions;

// Action Creator Thunk
const fetchRecommendationsData = () => {
  return async (dispatch) => {
    const fetchRecommendations = async () => {
      // Ini perlu diganti ke recommendations endpoint
      const response = await fetch(`${config.apiUrl.products}`);

      if (!response.ok) {
        throw new Error('Could not fetch best sellers data!');
      }

      const respData = await response.json();

      return respData.data.slice(0, 4);
    };

    try {
      const recommendationsData = await fetchRecommendations();

      dispatch(
        recommendationsActions.replaceRecommendations(recommendationsData)
      );
    } catch (error) {
      console.log('Error');
      console.log(error);

      alert(error.message);
    }
  };
};

export {
  recommendationsReducer,
  recommendationsActions,
  fetchRecommendationsData,
};
export default recommendationsSlice;
