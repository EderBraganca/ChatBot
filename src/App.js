import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme/Theme';
import GlobalTheme from "./components/Theme/GlobalStyle";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalTheme />
          <button onClick={toggleTheme} id="buttonTheme">Toggle theme</button>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
    </ThemeProvider>
  )
}

export default App;