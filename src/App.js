import {useEffect ,useContext} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/books";
function App() {
  const {fetchBooks}= useContext(BookContext)

  useEffect(()=>{
    fetchBooks();
  },[]);

  //onsubmit=prop
  return (
    <div className="app">
      <BookList  />
      <BookCreate />
    </div>
  );
}

export default App;
