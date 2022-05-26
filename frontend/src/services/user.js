import {createApi} from '@reduxjs/toolkit/query';
// import {baseQuery} from "services";
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const HOME_URL = process.env.REACT_APP_HOME_URL;

// console.log(API_BASE_URL);
// const baseQuery = fetchBaseQuery({
//   baseUrl: `${API_BASE_URL}`,
//   prepareHeaders: (headers, { getState }) => {
//     const token = `${localStorage.getItem('accessToken')}`;
//     headers.set("Content-type" , "application/json; charset=UTF-8",);
//     if (token) {
//       console.log(headers);
//       headers.set('accessToken', `${token}`)
//     }
//     return headers
//   },
// })



// const base = baseQuery();
const MAPPING_URL = "user"
// console.log(base);
// console.log(`${MAPPING_URL}/profile`);
// console.log(`${localStorage.getItem('accessToken')}`);

export const myInfoApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}`,
        prepareHeaders: (headers, { getState }) => {
          const token = `${localStorage.getItem('accessToken')}`;
        // // const token = getState().auth.token;
        // //   headers.set("Content-type" , "application/json; charset=UTF-8",);
          if (token) {
            console.log(headers);
            headers.set('accessToken', `${token}`)
          }
          headers.set('Access-Control-Allow-Origin', '*')
          return headers
        },
      }),
    endpoints: (builder)=>({
        getMyInfo: builder.query({
            // url: `${MAPPING_URL}/profile`,
            // method: 'GET',
            query: (name)=>`${MAPPING_URL}/profile`,
            // url: `${MAPPING_URL}/profile`,
            // method: 'GET',
            // headers: {'accessToken': `${localStorage.getItem('accessToken')}`},
        })
    })
});

export const {useGetMyInfoQuery} = {
    data:{
    "userId": 46,
    "email": null,
    "walletAddress": "address",
    "nickname": "sdasd",
    "profileImageUrl": "",
    "bio": "dasdsa"},
    error:{},
    isLoading:{}
};