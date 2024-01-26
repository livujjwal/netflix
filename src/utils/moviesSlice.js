import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    moviesTrailer : null,
    searchMovies : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMoviesTrailer: (state, action) => {
      state.moviesTrailer = action.payload;
    },
    addSearchMovies : (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies ,addMoviesTrailer,addSearchMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
