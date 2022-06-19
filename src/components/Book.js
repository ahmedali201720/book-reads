import book1 from "../img/content.jpg";
import Changer from "./Changer";
function Book() {
  return (
    <div className="book-card">
      <div className="image">
        <img src={book1} alt="Book" />
        <Changer />
      </div>
      <div className="meta">
        <p className="title">To Kill a Mockingbird</p>
        <small className="writer">Harper Lee</small>
      </div>
    </div>
  );
}

export default Book;
