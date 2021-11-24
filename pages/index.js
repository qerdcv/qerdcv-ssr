import Head from 'next/head'
import About from 'components/about';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vadym (qerdcv) Tishchenko - Fullstack Developer</title>
        <meta name='description' content='Vadym (qerdcv) Tishchenko - Fullstack Developer' />
        <meta name='og:title' content='Vadym (qerdcv) Tishchenko - Fullstack Developer'/>
        <meta name='og:description' content='I&apos;m Vadym Tishchenko a Fullstack Web Developer.'/>
        <meta name='og:image' content='/images/avatar.jpg'/>
        <meta name='theme-color' content='#118811'/>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <About />
    </div>
  )
}
