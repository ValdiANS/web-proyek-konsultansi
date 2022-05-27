import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart-slice';
import { categoriesReducer } from './category-slice';
import { uiReducer } from './ui-slice';
import { bestSellersReducer } from './best-seller-slice';
import { recommendationsReducer } from './recommendation-slice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    'best-sellers': bestSellersReducer,
    recommendations: recommendationsReducer,
  },
});

export default store;
