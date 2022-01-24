import { useEffect, useState } from 'react';
import { ThemeContext } from 'context/theme';
import { Theme } from 'components/theme';
import Footer from 'components/footer';
import About from 'components/about';


const themeMap = {
  dark: 'light',
  light: 'dark'
}

export default function Home() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (localStorage) {
      setTheme(localStorage.getItem("theme") ?? "dark");
    }
  }, [setTheme]);

  const switchTheme = () => {
    setTheme((theme) => {
      const newTheme = themeMap[theme] ?? "dark";
      if (localStorage) {
        localStorage.setItem("theme", newTheme);
      }
      return themeMap[theme];
    });
  };

  if (!theme) {
    return null;
  }
  return (
  <ThemeContext.Provider
    value={{
      theme,
      switchTheme,
    }}
  >
    <div className={`theme ${theme}`}>

    <div className="container">
      <About />
      <Footer />
    </div>
    <Theme />
    </div>
  </ThemeContext.Provider>);
}
