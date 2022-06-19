import book1 from "../../public/img/book1.png";
import Changer from "./Changer";
function Book() {
  return (
    <div class="book-card">
      <div class="image">
        <img src={book1} alt="Book" />
        <Changer />
      </div>
      <div class="meta">
        <p class="title">To Kill a Mockingbird</p>
        <small class="writer">Harper Lee</small>
      </div>
    </div>
  );
}
