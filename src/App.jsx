import About from "./component/About/about";
import Faq from "./component/Faq/faq";
import Header from "./component/Header/header";
import Portfolio from "./component/Portfolio/portfolio";
import Services from "./component/Services/services";
import Testim from "./component/Testim/testim";
import Title from "./component/Title/title";
import Footer from "./component/Footer/footer"
import "./index.css"
import { useState } from "react";

function App() {
  const[theme, SetTheme] = useState("dark"); //Состояние для темы

  const toggleTheme = () => {
    SetTheme(theme === "dark" ? "light" : "dark");
  };
  
  
  return (
    <div className={`App ${theme}`}>
      <Header />
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
      <Title />
      <About />
      <Services />
      <Portfolio />
      <Faq />
      <Testim />
      <Footer />
    </div>
  );
}

export default App;
