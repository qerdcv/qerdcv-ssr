import Head from "next/head";
import 'styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>👨‍💻Vadym (qerdcv) Tishchenko - Fullstack Developer👨‍💻</title>
        <meta property='og:url' content='https://qerdcv.com' />
        <meta property='og:title' content='👨‍💻Vadym (qerdcv) Tishchenko - Fullstack Developer👨‍💻' />
        <meta property='og:description' content='I&apos;m Vadym Tishchenko a Fullstack Web Developer.' />
        <meta property='og:image' content='https://qerdcv.com/images/avatar.png' />
        <meta property='og:image:type' content='image/png' />
        <meta name='description' content='Vadym (qerdcv) Tishchenko - Fullstack Developer' />
        <meta name='theme-color' content='#55aa55' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
  </>);
}
