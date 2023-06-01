import { MovieInterface } from "@/interface/global.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MovieInterface = {
  movies: [],
  originalMovies: [],
};

const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    setGlobalMovies: (state, data) => {
      state.movies = data.payload;
      state.originalMovies = data.payload;
    },
    setFilteredMovies: (state, data) => {
      state.movies = data.payload;
    },
  },
});

export const { setGlobalMovies, setFilteredMovies } = movieSlice.actions;

export default movieSlice.reducer;
