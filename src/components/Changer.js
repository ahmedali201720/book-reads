function Changer({ book, updateTargetBookShelf }) {
  return (
    <div className="changer">
      <select
        name="shelf"
        id="shelf"
        defaultValue={book.shelf ? book.shelf : "none"}
        onChange={(event) => updateTargetBookShelf(book, event.target.value)}
      >
        <option value="none" disabled>
          Move to...
        </option>
        q<option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default Changer;
