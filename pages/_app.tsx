import { AppProps } from 'next/app';
import  Head  from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
      <Head>
        <title>Belkamen - Благоустройства, захоронения, установка памятников и оград</title>
        <meta name="description" content="Благоустройства, захоронения, установка памятников и оград.В Минске и Минской области. Качественно и быстро" />
        <meta name="Robots" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
