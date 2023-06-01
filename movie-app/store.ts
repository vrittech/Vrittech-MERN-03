import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from '@/slice/MovieSlice';
import AuthReducer from '@/slice/AuthSlice';
const store = configureStore({
    reducer: {
        MovieReducer,
        AuthReducer
    }
})

export default store;