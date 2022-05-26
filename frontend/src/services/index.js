import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const HOME_URL = process.env.REACT_APP_HOME_URL;

console.log(API_BASE_URL);
const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const token = `${localStorage.getItem('accessToken')}`;
    headers.set("Content-type" , "application/json; charset=UTF-8",);
    if (token) {
      console.log(headers);
      headers.set('accessToken', `${token}`)
    }
    return headers
  },
})

export {baseQuery};