import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    upcoming: null,
    toprated: null,
    Popular: null,
    nowPlay: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlay = action.payload;
    },
    addToprated: (state, action) => {
      state.toprated = action.payload;
    },
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});
export const { addMovies, addTrailer, addPopular, addToprated, addUpcoming } =
  movieSlice.actions;
export default movieSlice.reducer;
