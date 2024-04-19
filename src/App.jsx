import logo from "./logo.svg";
import Header from "./Components/Header/Header";
import Logo from "./Components/Logo";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <header className="headerContainer">
        {/* <Logo /> */}
        <Header />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
         </header>
      <MainContent />
    </div>
  );
}

export default App;
