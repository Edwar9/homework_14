import About from "./component/About/about";
import Header from "./component/Header/header";
import Title from "./component/Title/title";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <About />
    </div>
  );
}

export default App;
