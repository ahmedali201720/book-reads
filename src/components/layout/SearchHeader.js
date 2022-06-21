import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SearchHeader({ hideSearchPage, setQuery }) {
  return (
    <header className="search-header" id="searchHeader">
      <div className="wrapper">
        <a href="#" onClick={() => hideSearchPage()} className="back-link">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </a>
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
