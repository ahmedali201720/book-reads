import Shelf from "./Shelf";
import { useState, useEffect } from "react";

function Shelves({ books }) {
  console.log(books);
  const currentlyReadingBooks = books.filter((b) => {
    return b.shelf === "currentlyReading";
  });
  const wantToReadBooks = books.filter((b) => {
    return b.shelf === "wantToRead";
  });
  const readBooks = books.filter((b) => {
    return b.shelf === "read";
  });

  return (
    <div className="content px-sm-0 px-4">
      <div className="container">
        <Shelf title="Currently Reading" books={currentlyReadingBooks} />
        <Shelf title="Want To Read" books={wantToReadBooks} />
        <Shelf title="Read" books={readBooks} />
      </div>
    </div>
  );
}

export default Shelves;
