import React from "react";
import { mount } from "enzyme";

import BookList from "../../components/BookList";
import BooksContext from "../../context/context";

describe("Book List Container", () => {
  const value = {
    state: {
      books: [
        {
          books: {
            bookAuthor: "author1",
            bookDesc: "desc1",
            bookName: "name1",
          },
          id: "1",
        },
        {
          books: {
            bookAuthor: "author2",
            bookDesc: "desc2",
            bookName: "name2",
          },
          id: "2",
        },
        {
          books: {
            bookAuthor: "author3",
            bookDesc: "desc3",
            bookName: "name3",
          },
          id: "3",
        },
      ],
    },
    dispatch: jest.fn(),
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<BookList />);
  });

  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });

  it("initially displays 3 items, first of them done", () => {
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList />
      </BooksContext.Provider>
    );
    expect(wrapper.find("li")).toHaveLength(3);
  });
  test("Test click event", () => {
    const mockCallBack = jest.fn();

    const li = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={mockCallBack} />
      </BooksContext.Provider>
    );
    li.find("li").at(0).simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(0);
  });
  test("Test click edit event", () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={mockCallBack} />
      </BooksContext.Provider>
    );
    wrapper.find("#edit").at(0).simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(0);
  });
  test("Test click Delete event", () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={mockCallBack} />
      </BooksContext.Provider>
    );
    wrapper.find("#delete").at(0).simulate("click");
    expect(mockCallBack).toHaveBeenCalledTimes(0);
  });
});
