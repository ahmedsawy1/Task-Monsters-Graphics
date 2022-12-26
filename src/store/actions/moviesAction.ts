import {apiKey, axiosAPI} from '../../api/config';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {showMessage} from 'react-native-flash-message';

// interface IError {
//   response: {data: {message: string}};
// }

export const getMoviesAction = createAsyncThunk('getMovies', async () => {
  try {
    const {data} = await axiosAPI.get(`popular?api_key=${apiKey}&page=1`);
    console.log(JSON.stringify(data?.results, null, 3));

    return data;
  } catch (error: any) {
    console.log(error?.response.data.message);
    showMessage({type: 'danger', message: error?.response.data.message});
  }
});

export const getMovieByIdAction = createAsyncThunk(
  'getMovieById',
  async (params: {movieId: string | number; cb: (data: {}) => void}) => {
    try {
      const {data} = await axiosAPI.get(`${params.movieId}?api_key=${apiKey}`);
      console.log(JSON.stringify(data, null, 3));
      params?.cb && params?.cb(data);

      return data;
    } catch (error: any) {
      console.log(error?.response.data.message);
      showMessage({type: 'danger', message: error?.response.data.message});
    }
  },
);
