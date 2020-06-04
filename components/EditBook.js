import React, { useState, useContext } from "react";
import BooksContext from "../context/context";

const EditBook = () => {
  const { state, dispatch } = useContext(BooksContext);
  console.log('state', state);
  const [bookName, setBookName] = useState(state.currentBook.books.bookName);
  const [bookAuthor, setBookAuthor] = useState(
    state.currentBook.books.bookAuthor
  );
  const [bookDesc, setBookDesc] = useState(state.currentBook.books.bookDesc);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateBook = {
      bookName,
      bookAuthor,
      bookDesc,
    };
    dispatch({ type: "UPDATE_BOOK", payload: updateBook });
    setBookName("");
    setBookAuthor("");
    setBookDesc("");
  };

  return (
    <>
      <h4>Update Book</h4>
      <div className="editBookForm row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Book Name"
                onChange={(e) => setBookName(e.target.value)}
                value={bookName}
                className="validate"
              />
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                name="Author"
                id="Author"
                placeholder="Book Author"
                onChange={(e) => setBookAuthor(e.target.value)}
                value={bookAuthor}
                className="validate"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                onChange={(e) => setBookDesc(e.target.value)}
                value={bookDesc}
                name="Description"
                id="Description"
                placeholder="Book Description"
                className="validate"
              />
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn-small">
            update Book
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBook;
