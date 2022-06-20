import "./App.css";
import Header from "./components/layout/Header";
import Shelves from "./components/Shelves";
import NavigationButton from "./components/NavigationButton";
import SearchList from "./components/SearchList";
import SearchHeader from "./components/layout/SearchHeader";
import { useState, useEffect } from "react";
import * as BooksAPI from "./utils/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const result = await BooksAPI.getAll();
    setBooks(result);
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="App">
      <Header />
      <Shelves books={books} />
      <NavigationButton />
    </div>
  );
}

export default App;
