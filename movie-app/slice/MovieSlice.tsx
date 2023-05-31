import { MovieInterface } from "@/interface/global.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MovieInterface = {
  movies: [],
};

const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    setGlobalMovies: (state, data) => {
      state.movies = data.payload;
    },
  },
});

export const { setGlobalMovies } = movieSlice.actions;

export default movieSlice.reducer;
