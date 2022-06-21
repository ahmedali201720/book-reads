import Book from "./Book";
function Shelf({ title, books, updateTargetBookShelf }) {
  return (
    <div className="shelf-container">
      <div className="head">
        <h4 className="title me-2">{title}</h4>
        <span>( {books?.length} items )</span>
      </div>
      <div className="books-container">
        <div className="row g-5">
          {books?.length > 0 ? (
            books.map((book) => (
              <div className="col-xl-2 col-lg-3 col-sm-6" key={book.id}>
                <Book
                  book={book}
                  updateTargetBookShelf={updateTargetBookShelf}
                />
              </div>
            ))
          ) : (
            <div className="alert alert-danger text-center">
              There is no books to display in this shelf
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shelf;
