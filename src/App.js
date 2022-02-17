import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      {/* Example component */}
      <Navigation />
      {/* Example svg import */}
      <img src={logo} alt="Werk logo" />

      <h1>Hello world</h1>
    </div>
  );
}

export default App;
