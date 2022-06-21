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
    if (showSearchPage) {
      const tempBooks = books;
      searchResult.map((book) => {
        if (book.id === targetBook.id) {
          book.shelf = shelf;
          BooksAPI.update(targetBook, shelf);
          const booksIDs = [];
          books.forEach((b, index) => {
            booksIDs.push(b.id);
          });
          if (booksIDs.includes(book.id)) {
            for (let i = 0; i < tempBooks.length; i++) {
              if (book.id === tempBooks[i].id) {
                tempBooks[i].shelf = shelf;
                break;
              }
            }
          } else {
            tempBooks.push(book);
          }
          return book;
        }
        return book;
      });
      setBooks(tempBooks);
    } else {
      const newBooks = books.map((book) => {
        if (book.id === targetBook.id) {
          book.shelf = shelf;
          BooksAPI.update(targetBook, shelf);
          return book;
        }
        return book;
      });
      setBooks(newBooks);
    }
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
          data.forEach((book) => {
            books.forEach((b) => {
              if (book.id === b.id) {
                book.shelf = b.shelf;
                console.log(book);
              }
            });
          });
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
