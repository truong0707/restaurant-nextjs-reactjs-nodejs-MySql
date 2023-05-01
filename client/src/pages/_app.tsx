import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store/Store';
import ProductState from '@/store/context/product/ProductState';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProductState>
        <Component {...pageProps} />
      </ProductState>
    </Provider>

  )
}
