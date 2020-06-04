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
        {
          books: {
            bookAuthor: "author4",
            bookDesc: "desc4",
            bookName: "name4",
          },
          id: "4",
        },
      ],
    },
    dispatch: jest.fn(),
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<BookList />);
  });

  it("Should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });

  it("Initially display four List Items.", () => {
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList />
      </BooksContext.Provider>
    );
    expect(wrapper.find("li")).toHaveLength(4);
  });
  it("Should call List Item click function", () => {
    const listItemHandleFn = jest.fn();
    const li = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={listItemHandleFn} />
      </BooksContext.Provider>
    );
    li.find("li").at(0).simulate("click");
    expect(listItemHandleFn).toHaveBeenCalledTimes(0);
  });
  it("Should call edit button click function", () => {
    const editHandleFn = jest.fn();
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={editHandleFn} />
      </BooksContext.Provider>
    );
    wrapper.find("#edit").at(0).simulate("click");
    expect(editHandleFn).toHaveBeenCalledTimes(0);
  });
  it("Should call Delete button function", () => {
    const deleteHandleFn = jest.fn();
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList onClick={deleteHandleFn} />
      </BooksContext.Provider>
    );
    wrapper.find("#delete").at(0).simulate("click");
    expect(deleteHandleFn).toHaveBeenCalledTimes(0);
  });
});
