import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import EditBook from "../../components/EditBook";
import BooksContext from "../../context/context";

describe("Edit Book Container", () => {
  const testState = {
    bookName: "test",
    bookAuthor: "test1",
    bookDesc: "test2",
  };
  let wrapper;
  let alertSpy;
  beforeEach(() => {
    alertSpy = jest.spyOn(window, "alert");
    wrapper = shallow(<EditBook />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("Should render form currentBook is null", () => {
    const state = {
      books: [
        {
          books: {
            bookAuthor: "author",
            bookDesc: "desc",
            bookName: "name,",
          },
          id: "1",
        },
      ],
      currentBook: {
        books: {
          bookAuthor: "author",
          bookDesc: "desc",
          bookName: "name,",
        },
        id: "1",
      },
    };
    const wrapper = mount(
      <BooksContext.Provider value={{ state }}>
        <EditBook {...state} />
      </BooksContext.Provider>
    );
    expect(wrapper).not.toBeNull();
  });
  it("Should call input onChange function", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "name", value: "test" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "author", value: "test1" } });
    wrapper
      .find("input")
      .at(2)
      .simulate("change", {
        target: { name: "description", value: "test2" },
      });
    expect(testState.bookName).toEqual("test");
    expect(testState.bookAuthor).toEqual("test1");
    expect(testState.bookDesc).toEqual("test2");
  });
  it("Should call handleSubmit function when form is submitted", () => {
    const dispatchMock = jest.fn();
    const handleSubmitFn = jest.fn();
    const fakeEvent = { preventDefault: () => {} };
    const wrapper = mount(
      <BooksContext.Provider value={{ dispatch: dispatchMock }}>
        <EditBook onSubmit={handleSubmitFn} />
      </BooksContext.Provider>
    );
    const form = wrapper.find("form");
    wrapper.find("#name").simulate("change", {
      target: { name: "name", value: "blah" },
    });
    wrapper.find("#author").simulate("change", {
      target: { name: "author", value: "blah1" },
    });
    wrapper.find("#description").simulate("change", {
      target: { name: "description", value: "blah2" },
    });
    form.simulate("submit", fakeEvent);
    expect(handleSubmitFn.mock.calls).not.toBeNull();
  });
  it("Should call alert inside handleSubmit function when when submitted with empty values", () => {
    const dispatchMock = jest.fn();
    const handleSubmitFn = jest.fn();
    const fakeEvent = { preventDefault: () => {} };
    const jsdomAlert = window.alert;
    window.alert = () => {};
    const wrapper = mount(
      <BooksContext.Provider value={{ dispatch: dispatchMock }}>
        <EditBook onSubmit={handleSubmitFn} />
      </BooksContext.Provider>
    );
    const form = wrapper.find("form");
    wrapper.find("#name").simulate("change", {
      target: { name: "name", value: "" },
    });
    form.simulate("submit", fakeEvent);
    expect(handleSubmitFn.mock.calls).not.toBeNull();
    expect(alertSpy).not.toBeNull();
    window.alert = jsdomAlert;
  });
});
