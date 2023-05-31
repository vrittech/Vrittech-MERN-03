import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from '@/slice/MovieSlice';
const store = configureStore({
    reducer: {
        MovieReducer
    }
})

export default store;