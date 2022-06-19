function SearchHeader() {
  return (
    <header class="search-header" id="searchHeader">
      <div class="wrapper">
        <a href="#" class="back-link">
          <i class="fa fa-arrow-left"></i>
        </a>
        <form action="GET" class="search-form">
          <div class="input-wrapper">
            <i class="icon fa fa-search"></i>
            <input
              type="text"
              name="key"
              id="key"
              placeholder="Search by title , author , or ISBN"
              class="form-control"
            />
          </div>
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;
