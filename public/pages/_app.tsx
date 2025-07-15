import '../css/bootstrap.min.css';

import '../css/small-business.css';
import '../css/mystyles.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('pageProps', pageProps);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Victoria Fawcett" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
