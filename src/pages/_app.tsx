import type { AppProps } from 'next/app';
import 'ress';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
