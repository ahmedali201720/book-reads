import book1 from "../img/content.jpg";
import Changer from "./Changer";
function Book({ book }) {
  return (
    <div className="book-card">
      <div className="image">
        <img src={book.imageLinks.thumbnail} alt="Book" />
        <Changer />
      </div>
      <div className="meta">
        <p className="title">{book.title}</p>
        <small className="writer">
          {book.authors.map((author, index) => {
            if (index === book.authors.length - 1) {
              return <span key={index}>{author}</span>;
            } else {
              return (
                <span className="me-1" key={index}>
                  {author} ,
                </span>
              );
            }
          })}
        </small>
      </div>
    </div>
  );
}

export default Book;
