import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import authSlice from './auth-slice';
import accountSLice from "./account-slice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        account: accountSLice.reducer
    },

})


export default store;