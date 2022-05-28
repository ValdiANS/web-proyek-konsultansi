import { createSlice } from '@reduxjs/toolkit';
import config from '../script/config/config';

const initialCategoriesState = {
  categories: [],
  boxColor: [
    'bg-[#1F1F21]',
    'bg-[#DCA047]/75',
    'bg-[#0B0F52]/75',
    'bg-[#111315]/75',
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategoriesState,
  reducers: {
    replaceCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

const categoriesReducer = categoriesSlice.reducer;
const categoriesActions = categoriesSlice.actions;

// Action Creator Thunk
const fetchCategoriesData = () => {
  return async (dispatch) => {
    const fetchCategories = async () => {
      const response = await fetch(`${config.apiUrl.categories}`);

      if (!response.ok) {
        throw new Error('Could not fetch categories data!');
      }

      const respData = await response.json();

      return respData.data;
    };

    try {
      const categoriesData = await fetchCategories();

      dispatch(categoriesActions.replaceCategories(categoriesData));
    } catch (error) {
      console.log('Error');
      console.log(error);

      alert(error.message);
    }
  };
};

export { categoriesReducer, categoriesActions, fetchCategoriesData };
export default categoriesSlice;
