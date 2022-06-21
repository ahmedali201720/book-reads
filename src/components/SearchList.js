import Shelf from "./Shelf";
import SearchHeader from "../components/layout/SearchHeader";
function SearchList() {
  return (
    <div className="page-wrapper">
      <SearchHeader />
      <div className="content">
        <div className="container">
          <Shelf title={"All Books"} />
        </div>
      </div>
    </div>
  );
}

export default SearchList;
