import BookShow from "./BookShow";
import useBookContext from "../hooks/use-books-context";


function BookList() {
  const {books} =useBookContext();
  const renderedBooks = books.map((book) => {
    return (
      //can use props and context together as it is not exclusive.
      <BookShow key={book.id} book={book} />
    );
  });
  console.log(renderedBooks);
  return <div className="book-list">

    {renderedBooks}</div>;
}

export default BookList;
