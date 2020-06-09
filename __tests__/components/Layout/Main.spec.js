import React from "react";
import { shallow, mount } from "enzyme";
import MainPage from "../../../components/Layout/Main";
import BooksContext from "../../../context/context";

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
    const wrapper = mount(
      <BooksContext.Provider value={ state }>
        <MainPage {...state.currentBook} />
      </BooksContext.Provider>
    );

    expect(wrapper).not.toBeNull();
  });
});
