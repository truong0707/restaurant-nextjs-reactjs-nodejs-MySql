import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store/redux/Store';
import ProductState from '@/store/context/product/ProductState';
import LocalStorageState from '@/store/context/localStorage/LocalStorageState';
import axios from 'axios';
import React, { useEffect } from 'react';
import { getUserToken } from '@/utils/userToken';

// export const axiosClient = axios.create({
//   baseURL: "http://localhost:8080/",
// });


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    //config header axios
    // const defaultHeaders = {
    //   ...axiosClient.defaults.headers.common,
    //   "Content-Type": "application/json; charset=UTF-8",
    // };
    // axiosClient.defaults.headers.common = defaultHeaders;
    // axiosClient.interceptors.request.use(
    //   (config) => {
    //     const token = getUserToken();
    //     console.log(token, 'token')
    //     if (token) {
    //       config.headers.Authorization = token;
    //     }

    //     return config;
    //   },
    //   (error) => {
    //     console.log("ss")
    //     return Promise.reject(error);
    //   }
    // );
  }, [])





  return (
    <Provider store={store}>
      <LocalStorageState>
        <ProductState>
          <Component {...pageProps} />
        </ProductState>
      </LocalStorageState>
    </Provider>

  )
}
