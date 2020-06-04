import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import BookList from "../../components/BookList";
import BooksContext from "../../context/context";

describe("Book List Container", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<BookList />);
  });

  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });
  it("initially displays 3 items, first of them done", () => {
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
    const wrapper = mount(
      <BooksContext.Provider value={value}>
        <BookList />
      </BooksContext.Provider>
    );
    expect(wrapper.find("li")).toHaveLength(3);
  });
});
