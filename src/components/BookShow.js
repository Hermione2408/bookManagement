import { useState,useContext } from "react";
import BookContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book}) {
  const [showEdit, setShowEdit] = useState(false);
  const {deleteBookById} =useContext(BookContext);

  const handleDeleteClick = () => {
    deleteBookById(book.Id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  //so that we can change the variable over the time
  let content = <h3> {book.title} </h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>

        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
