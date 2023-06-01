import { AuthInterface } from "@/interface/global.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthInterface = {
  isLoggedIn: false,
  jwtToken: "",
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    loginUser: (state, data) => {
      state.isLoggedIn = true;
      state.jwtToken = data.payload;
    },
  },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;
