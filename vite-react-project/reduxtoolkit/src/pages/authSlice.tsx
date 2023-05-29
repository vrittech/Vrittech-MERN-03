import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  isLoggedIn: boolean;
}

const initialState: initialStateInterface = {
  isLoggedIn: false,
};

const authSlice: any = createSlice({
  name: "Authorization",
  initialState,
  reducers: {
    login: (state, data) => {
      state.isLoggedIn = data.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
