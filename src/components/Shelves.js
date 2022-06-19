import Shelf from "./Shelf";

function Shelves() {
  return (
    <div className="content px-sm-0 px-4">
      <div className="container">
        <Shelf title="Currently Reading" />
        <Shelf title="Want To Read" />
        <Shelf title="Read" />
      </div>
    </div>
  );
}

export default Shelves;
