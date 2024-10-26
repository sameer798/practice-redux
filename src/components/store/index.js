import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';

const store = configureStore({
    reducer: {
        cartToggle : toggleReducer,
    }
})

export default store