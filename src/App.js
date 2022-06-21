import "./App.css";
import Header from "./components/layout/Header";
import Shelves from "./components/Shelves";
import SearchList from "./components/SearchList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import * as BooksAPI from "./utils/BooksAPI";

function App() {
  const [showSearchPage, setSearchPageShow] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");

  const updateTargetBookShelf = (targetBook, shelf) => {
    const newBooks = books.map((book) => {
      if (book.id === targetBook.id) {
        book.shelf = shelf;
        BooksAPI.update(targetBook, shelf);
        return book;
      }
      return book;
    });
    setBooks(newBooks);
  };

  const getBooks = async () => {
    const result = await BooksAPI.getAll();
    setBooks(result);
  };
  useEffect(() => {
    getBooks();
  }, []);
  useEffect(() => {
    if (query) {
      BooksAPI.search(query).then((data) => {
        if (data.error) {
          setSearchResult([]);
        } else {
          setSearchResult(data);
        }
      });
    } else {
      setSearchResult([]);
    }
  }, [query]);
  return (
    <div className="App">
      {showSearchPage ? (
        <SearchList
          hideSearchPage={() => setSearchPageShow(!showSearchPage)}
          setQuery={(value) => setQuery(value)}
          books={searchResult}
          updateTargetBookShelf={updateTargetBookShelf}
        />
      ) : (
        <div className="wrapper">
          <Header />
          <Shelves
            books={books}
            updateTargetBookShelf={updateTargetBookShelf}
          />
          <a
            onClick={() => setSearchPageShow(!showSearchPage)}
            className="search-link"
          >
            <FontAwesomeIcon icon="plus" />
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
