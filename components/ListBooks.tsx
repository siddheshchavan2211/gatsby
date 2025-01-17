import SingleBook from "./SingleBook";

interface ListBooksProps {
  books: Book[];
}

function ListBooks({ books }: ListBooksProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {books.map((book: Book) => (
        <SingleBook key={book.id} book={book} />
      ))}
    </div>
  );
}

export default ListBooks;
