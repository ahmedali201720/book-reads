import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <header className="header" id="header">
      <div className="container">
        <h3 className="title">
          <FontAwesomeIcon icon="fas fa-book-reader" className="me-2" />
          <span>My Reads</span>
        </h3>
      </div>
    </header>
  );
}

export default Header;
