import React from "react";
import { mount } from "enzyme";
import BookDetails from "../../components/BookDetails";

describe("test the Book Details", () => {
  const props = {
    book: {
      books: {
        bookName: "test1 Name",
        bookAuthor: "test1 Author",
        bookDesc: "test1 Description",
      },
      id: "1"
    },
  };
  test("Should return default state", () => {
    const wrapper = mount(<BookDetails {...props} />);
    expect(wrapper).not.toBeNull();
  });
});
