import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

console.log(userReducer);
const appStore=configureStore({
    reducer:{
        user:userReducer,
    }
});

export default appStore;

