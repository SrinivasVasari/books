import React, { useContext, useState, Fragment } from "react";
import BooksContext from "../context/context";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { state, dispatch } = useContext(BooksContext);
  const [selected, setSelected] = useState(null);
  const selectedBook = state.books.filter((book) => {
    if (book.id === selected) {
      return book;
    }
  });
  return (
    <Fragment>
      <div className="books-list">
        {state.books.map((book) => {
          const { bookName, bookAuthor } = book.books;
          return (
            <div className="book" key={book.id} onClick={(e) => setSelected(book.id)}>
              <div className="header">
                <h5>{bookName}</h5>
                <span className="author"><i>__{bookAuthor}</i></span>
              </div>
              <div className="btn-container">
                <a
                  onClick={() =>
                    dispatch({ type: "SET_CURRENT_BOOK", payload: book })
                  }
                  className="btn-floating btn-small waves-effect waves-light blue"
                >
                    <i className="material-icons">edit</i>
                </a>
                <a
                  onClick={() =>
                    dispatch({ type: "DELETE_BOOK", payload: book.id })
                  }
                  className="btn-floating btn-small waves-effect waves-light orange"
                >
                  <i className="material-icons">delete</i>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bookDetails">
        <BookDetails book={selectedBook[0]} bookId={selected} />
      </div>
    </Fragment>
  );
};

export default BookList;
