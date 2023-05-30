import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store/redux/Store';
import ProductState from '@/store/context/product/ProductState';
import LocalStorageState from '@/store/context/localStorage/LocalStorageState';
import React, { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
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
