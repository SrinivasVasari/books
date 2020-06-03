import React from "react";
import { shallow } from "enzyme";
import AddBook from "../../components/AddBook";

describe('Add Book Container', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddBook />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });
  it('should have three text fields', () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(3);
  });
  it('Contains a button', () => {
    const button = <button>Add Book</button>
    expect(wrapper.containsMatchingElement(button)).toBe(true);
  })

  describe('Add Book', () => {
    const testState = { bookName: "test", bookAuthor: "test1", bookDesc: "test2" };
    it('should call input onChange', () => {
      wrapper.find('input').at(0).simulate('change', { target: { name: "name", value: "test" } });
      wrapper.find('input').at(1).simulate('change', { target: { name: "author", value: "test1" } });
      wrapper.find('input').at(2).simulate('change', { target: { name: "description", value: "test2" } });
      expect(testState.bookName).toEqual("test");
      expect(testState.bookAuthor).toEqual("test1");
      expect(testState.bookDesc).toEqual("test2");
    });
  })
});
