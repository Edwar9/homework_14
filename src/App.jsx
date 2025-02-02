import About from "./component/About/about";
import Header from "./component/Header/header";
import Services from "./component/Services/services";
import Title from "./component/Title/title";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About />
      <Services />
    </div>
  );
}

export default App;
