import "./App.css";
import Header from "./components/layout/Header";
import Shelves from "./components/Shelves";
import SearchList from "./components/SearchList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="wrapper">
                <Header />
                <Shelves
                  books={books}
                  updateTargetBookShelf={updateTargetBookShelf}
                />
                <Link to="/search">
                  <button
                    className="search-link"
                    onClick={() => {
                      setSearchPageShow(!showSearchPage);
                    }}
                  >
                    <FontAwesomeIcon icon="plus" />
                  </button>
                </Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
