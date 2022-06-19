import Book from "./Book";
function Shelf({ title, booksList }) {
  return (
    <div className="shelf-container">
      <div className="head">
        <h4 className="title me-2">{title}</h4>
        <span>( 4 items )</span>
      </div>
      <div className="books-container">
        <div className="row g-5">
          {booksList.map(() => (
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <Book />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shelf;
