import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
