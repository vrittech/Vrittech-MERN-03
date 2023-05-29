import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./pages/counterSlice";
import AuthReducer from "./pages/authSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer,
  },
});

export default store;
