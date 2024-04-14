import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRated: null,
    upComing: null,
    trailerVid: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrailerVid: (state, action) => {
      state.trailerVid = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addTrailerVid,
} = movieSlice.actions;
export default movieSlice.reducer;
