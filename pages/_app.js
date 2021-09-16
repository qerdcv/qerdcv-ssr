import 'styles/globals.scss'
import Footer from 'components/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='container'>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
