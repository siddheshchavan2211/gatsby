import SingleBook from "./SingleBook";

function ListBooks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <SingleBook />
      <SingleBook />
      <SingleBook />
      <SingleBook />
      <SingleBook />
      <SingleBook />
    </div>
  );
}

export default ListBooks;
