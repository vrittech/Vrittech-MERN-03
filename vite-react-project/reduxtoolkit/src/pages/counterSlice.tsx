import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  count: number;
}

const initialState: initialStateInterface = {
  count: 0,
};

const counterSlice: any = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByNumber: (state, data) => {
      state.count += data.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByNumber } =
  counterSlice.actions;

export default counterSlice.reducer;
