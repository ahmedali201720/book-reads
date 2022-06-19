import "./App.css";
import Header from "./components/layout/Header";
import Shelves from "./components/Shelves";
import NavigationButton from "./components/NavigationButton";
import SearchList from "./components/SearchList";
import SearchHeader from "./components/layout/SearchHeader";

function App() {
  return (
    <div className="App">
      <SearchHeader />
      <SearchList />
    </div>
  );
}

export default App;
