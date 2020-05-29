import React, { useState, useContext } from "react";
import BooksContext from "../context/context";

const AddBook = () => {
  const { state, dispatch } = useContext(BooksContext);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDesc, setBookDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const addBook = {
      bookName,
      bookAuthor,
      bookDesc,
    };
    if (bookName.trim() === "") {
      alert("Cannot add a blank");
    } else {
      dispatch({ type: "ADD_BOOK", payload: addBook });
      setBookName("");
      setBookAuthor("");
      setBookDesc("");
    }
  };

  return (
    <div className="BookForm row customRow">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row customRow">
          <div className="input-field col s12 m6">
          <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setBookName(e.target.value)}
          value={bookName}
          className="validate"
        />
            <label htmlFor="name">Book Name</label>
          </div>
          <div className="input-field col s12 m6">
          <input
          type="text"
          name="author"
          id="author"
          onChange={(e) => setBookAuthor(e.target.value)}
          value={bookAuthor}
          className="validate"
        />
            <label htmlFor="author">Book Author</label>
          </div>
        </div>
        
        <div className="row customRow">
        <div className="input-field col s12 m12">
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) => setBookDesc(e.target.value)}
          value={bookDesc}
          className="validate"
        />
          <label htmlFor="description">Book Description</label>
        </div>
      </div>
        <button type="submit" className="waves-effect waves-light btn-small">
          Add Book
        </button>
      </form>
    </div>
  );
};
export default AddBook;
