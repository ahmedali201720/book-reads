import Book from "./Book";
import SearchHeader from "../components/layout/SearchHeader";
function SearchList({
  setSearchState,
  setQuery,
  books,
  updateTargetBookShelf,
}) {
  return (
    <div className="page-wrapper">
      <SearchHeader setSearchState={setSearchState} setQuery={setQuery} />
      <div className="content">
        <div className="container">
          <div className="shelf-container">
            <div className="head">
              <h4 className="title me-2">All Books</h4>
              <span>( {books?.length ? books.length : 0} items )</span>
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
                  <div className="px-4">
                    <div className="alert alert-info text-center py-4">
                      Search for more books !!
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchList;
