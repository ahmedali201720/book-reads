import "./App.css";
import Header from "./components/layout/Header";
import Shelves from "./components/Shelves";
import NavigationButton from "./components/NavigationButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Shelves />
      <NavigationButton />
    </div>
  );
}

export default App;
