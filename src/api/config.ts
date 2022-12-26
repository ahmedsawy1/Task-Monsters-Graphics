import axios from 'axios';
export const baseUrl = 'https://api.themoviedb.org/3/movie/';
export const apiKey = '589c4b0be1e09f46020a726636e42bf1';

// popular?api_key=589c4b0be1e09f46020a726636e42bf1&page=1
// 550?api_key=589c4b0be1e09f46020a726636e42bf1

export const headers = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
  'x-requested-with': 'XMLHttpRequest',
  Accept: 'application/json',
};

export const axiosAPI = axios.create({
  baseURL: baseUrl,
  headers: headers,
});
