import Shelf from "./Shelf";
import { useState, useEffect } from "react";

function Shelves({ books }) {
  const getCurrentlyReadingBooks = () => {
    books.filter((b) => {
      return b.shelf === "currentlyReading";
    });
  };

  const getWantedBooks = () => {
    books.filter((b) => {
      return b.shelf === "wantToRead";
    });
  };

  const getReadBooks = () => {
    books.filter((b) => {
      return b.shelf === "read";
    });
  };

  const currentlyReadingBooks = getCurrentlyReadingBooks();
  const wantToReadBooks = getWantedBooks();
  const readBooks = getReadBooks();

  return (
    <div className="content px-sm-0 px-4">
      <div className="container">
        <Shelf title="Currently Reading" booksList={currentlyReadingBooks} />
        <Shelf title="Want To Read" booksList={wantToReadBooks} />
        <Shelf title="Read" booksList={readBooks} />
      </div>
    </div>
  );
}

export default Shelves;
