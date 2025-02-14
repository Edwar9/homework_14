import About from "./component/About/about";
import Faq from "./component/Faq/faq";
import Header from "./component/Header/header";
import Portfolio from "./component/Portfolio/portfolio";
import Services from "./component/Services/services";
import Testim from "./component/Testim/testim";
import Title from "./component/Title/title";
import Footer from "./component/Footer/footer"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header />
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
