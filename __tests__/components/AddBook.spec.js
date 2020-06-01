import React from "react";
import { shallow } from "enzyme";
import AddBook from "../../components/AddBook";

describe("should render without errors", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddBook />);
  });
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });
  it('should have text field', () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(3);
  });
});
