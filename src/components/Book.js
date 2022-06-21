import Changer from "./Changer";
function Book({ book, updateTargetBookShelf }) {
  return (
    <div className="book-card">
      <div className="image">
        <img src={book.imageLinks?.thumbnail} alt="Book" />
        <Changer book={book} updateTargetBookShelf={updateTargetBookShelf} />
      </div>
      <div className="meta">
        <p className="title">{book?.title}</p>
        <small className="writer">
          {book.authors
            ? book.authors.map((author, index) => {
                if (index === book.authors.length - 1) {
                  return <span key={index}>{author}</span>;
                } else {
                  return (
                    <span className="me-1" key={index}>
                      {author} ,
                    </span>
                  );
                }
              })
            : null}
        </small>
      </div>
    </div>
  );
}

export default Book;
