import React from "react";
import { shallow } from "enzyme";
import booksReducer from "../../reducer/reducer";

describe("test the Books Reducer", () => {
  const mockBooks = {
    bookName: "test1 Name",
    bookAuthor: "test1 Author",
    bookDesc: "test1 Description",
  };
  it("Should return default state", () => {
    const newState = booksReducer(undefined, {});
    expect(newState).not.toBeNull();
  });
  test("returns the correct state", () => {
    const state = {
      currentBook: null,
      books: [],
    };
    const reducer = booksReducer(state, {
      type: "ADD_BOOK",
      payload: {
        bookAuthor: "test1",
        bookDesc: "test2",
        bookName: "test3",
      },
    });

    expect(reducer).not.toBeNull();
  });
  test("returns the correct state when delete", () => {
    const state = {
      currentBook: null,
      books: [
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "1",
        },
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "2",
        },
      ],
    };
    const reducer = booksReducer(state, {
      type: "DELETE_BOOK",
      payload: "2",
    });

    expect(reducer).toEqual({
      books: [
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
          id: "1",
        },
      ],
      currentBook: null,
    });
  });

  test("returns the correct state current Book", () => {
    const state = {
      currentBook: null,
      books: [],
    };
    const reducer = booksReducer(state, {
      type: "SET_CURRENT_BOOK",
      payload: {
        id: "1",
        books: { bookAuthor: "test1", bookDesc: "test2", bookName: "test3" },
      },
    });

    expect(reducer).toEqual({
      books: [],
      currentBook: {
        books: {
          bookAuthor: "test1",
          bookDesc: "test2",
          bookName: "test3",
        },
        id: "1",
      },
    });
  });

  test("returns the correct state when editing", () => {
    const state = {
      currentBook: null,
      books: [],
    };
    const reducer = booksReducer(state, {
      type: "UPDATE_BOOK",
      payload: {
        bookAuthor: "test1",
        bookDesc: "test2",
        bookName: "test3",
      },
    });

    expect(reducer).toEqual({
      books: [
        {
          books: {
            bookAuthor: "test1",
            bookDesc: "test2",
            bookName: "test3",
          },
        },
      ],
      currentBook: null,
    });
  });
});
