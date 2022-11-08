import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import data from "./data.json";
import { theme } from "./theme";

function App() {
  /* Provided data */
  console.log(data);
  /* Provided theme (if needed) */
  console.log(theme);

  return (
    <div className="App">
      {/* Example component */}
      <Navigation />

      <img src={logo} alt="Werk logo" />

      <h1>
        Hello world. The font <em>Work Sans</em> is provided.
      </h1>
    </div>
  );
}

export default App;
