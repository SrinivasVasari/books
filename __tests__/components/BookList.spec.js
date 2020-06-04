import React from "react";
import { shallow, mount } from "enzyme";
import toJson from 'enzyme-to-json';

import BookList from "../../components/BookList";

describe("Edit Book Container", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BookList />);
  });

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("initially displays 3 items, first of them done", () => {
    const wrapper = mount(<BookList />);
    expect(wrapper.find("li")).toHaveLength(3);
  });
});
