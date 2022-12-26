import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getMovieByIdAction, getMoviesAction} from '../actions/moviesAction';

interface IState {
  movies: [];
  movieData: {};
  loader: boolean;
}

const initialState: IState = {
  movies: [],
  movieData: {},
  loader: false,
};

export const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getMoviesAction.fulfilled, (state, action) => {
      state.movies = action.payload?.results;
      state.loader = false;
    });
    builder.addCase(getMoviesAction.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(getMoviesAction.rejected, (state, action) => {
      state.loader = false;
    });
    builder.addCase(getMovieByIdAction.fulfilled, (state, action) => {
      state.movieData = action.payload;
    });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
