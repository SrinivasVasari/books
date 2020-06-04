import React from "react";
import { shallow, mount } from "enzyme";
import MainPage from "../../../components/Layout/Main";
import BooksContext from "../../../context/context";
import EditBook from "../../../components/EditBook";

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
});
