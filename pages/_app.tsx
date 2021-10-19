import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from 'twin.macro';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
