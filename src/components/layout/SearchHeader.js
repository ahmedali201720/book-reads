import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function SearchHeader({ setSearchState, setQuery }) {
  return (
    <header className="search-header" id="searchHeader">
      <div className="wrapper">
        <Link to="/">
          <button
            className="back-link"
            onClick={() => {
              setSearchState(false);
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </button>
        </Link>

        <form action="GET" className="search-form">
          <div className="input-wrapper">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              className="icon"
            />
            <input
              type="text"
              name="key"
              id="key"
              placeholder="Search by title , author , or ISBN"
              className="form-control"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;
