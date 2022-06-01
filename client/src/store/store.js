import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart-slice';
import { categoriesReducer } from './category-slice';
import { uiReducer } from './ui-slice';
import { bestSellersReducer } from './best-seller-slice';
import { recommendationsReducer } from './recommendation-slice';
import { checkoutReducer } from './checkout-slice';
import { loginReducer } from './login-slice';
import { adminLoginReducer } from './admin-login-slice';
import { dashboardReducer } from './dashboard-slice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    login: loginReducer,
    admin: adminLoginReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    categories: categoriesReducer,
    'best-sellers': bestSellersReducer,
    recommendations: recommendationsReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
