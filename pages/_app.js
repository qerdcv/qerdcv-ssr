
import { useEffect, useState } from 'react';
import Footer from 'components/footer';
import { ThemeContext } from 'context/theme';
import { Theme } from 'components/theme';

import 'styles/globals.scss'

const themeMap = {
  dark: 'light',
  light: 'dark'
}

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (localStorage) {
      setTheme(localStorage.getItem('theme') ?? 'dark');
    }
  }, [setTheme])

  const switchTheme = () => {
    setTheme((theme) => {
      const newTheme = themeMap[theme] ?? 'dark';
      if (localStorage) {
        localStorage.setItem('theme', newTheme);
      }
      return themeMap[theme];
    });
  }

  if (!theme) {
    return null
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      switchTheme
    }}>
      <div className={`theme ${theme}`}>
        <Theme />
        <div className='container'>
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
