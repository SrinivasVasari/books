import React from "react";
import { shallow, mount } from "enzyme";
import MainPage from "../../../components/Layout/Main";
import BooksContext from "../../../context/context";
import booksReducer from "../../../reducer/reducer";
import EditBook from "../../../components/EditBook";

describe("Main Component", () => {
  it("should render correctly", () => {
    const spy = shallow(<MainPage />);
    expect(spy).toMatchSnapshot();
  });
  it("should render curr correctly", () => {
    const spy = shallow(<MainPage />);
    const wrapper = spy.instance();
    expect(wrapper).toBeNull();
  });
  it("Should returns the state of current Book", () => {
    const state = {
      currentBook:  {
        books: {
          bookAuthor: "test1",
          bookDesc: "test2",
          bookName: "test3",
        },
        id: "1",
      },
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
    };
    const currentBook = {
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
    };
    const reducer = booksReducer(state, {
      type: "SET_CURRENT_BOOK",
      payload: {
        id: "1",
        books: { bookAuthor: "test1", bookDesc: "test2", bookName: "test3" },
      },
    });
    const wrapper = mount(
      <BooksContext.Provider value={ state }>
        <MainPage {...currentBook} />
      </BooksContext.Provider>
    );

    expect(reducer).not.toBeNull();
  });
});
