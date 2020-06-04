import React from "react";

const BookDetails = ({ book }) => {
  if (book) {
    const { bookName, bookAuthor, bookDesc } = book && book.books;
    return (
      <>
        <div className="details">
          <span>Title:</span> <span>{bookName}</span>
        </div>
        <div className="details">
          <span>Author:</span>
          <span>{bookAuthor}</span>
        </div>
        <div className="details">
          <span>Description:</span>
          <span
            className="container-fluid"
            dangerouslySetInnerHTML={{ __html: bookDesc }}
          />
        </div>
      </>
    );
  } else {
    return <span>No book selected...</span>;
  }
};

export default BookDetails;
