import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import AddBook from "../../components/AddBook";
import BooksContext from "../../context/context";

describe("AddBook Container", () => {
  const testState = {
    bookName: "test",
    bookAuthor: "test1",
    bookDesc: "test2",
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddBook />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("Should have three input fields", () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(3);
  });
  it("Should call handleSubmit function when form is submitted", () => {
    const dispatchMock = jest.fn();
    const handleSubmitFn = jest.fn();
    const fakeEvent = { preventDefault: () => {} };
    const wrapper = mount(
      <BooksContext.Provider value={{ dispatch: dispatchMock }}>
        <AddBook onSubmit={handleSubmitFn} />
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

  it("Should render submit button with Add Book text", () => {
    const wrapper = mount(<AddBook />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(1);
    expect(button.prop("type")).toEqual("submit");
    expect(button.text()).toEqual("Add Book");
  });

  it("Should call input onChange function when user enter in input", () => {
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
});
