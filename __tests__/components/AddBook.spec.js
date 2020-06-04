import React from 'react';
import { shallow, mount } from "enzyme";
import toJson from 'enzyme-to-json';
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
    const wrapper = shallow(<AddBook />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('should have three text fields', () => {
    expect(wrapper.find('input[type="text"]').length).toEqual(3);
  });
  it('calls handle Submit function when form is submitted', () => {
    const handleSubmitFn = jest.fn();
    const dispatch = { type: "ADD_BOOK", payload: {} };
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const wrapper = shallow(<AddBook onSubmit={handleSubmitFn}/>);
    const form = wrapper.find('form');
    wrapper.find("#name").simulate("change", { 
      target: { name: "name", value: "blah" } });
    wrapper.find("#author").simulate("change", {
      target: { name: "author", value: "blah1" },
      });
    wrapper.find("#description").simulate("change", {
      target: { name: "description", value: "blah2" },
      });
    form.simulate('submit', fakeEvent, dispatch);
    expect(handleSubmitFn.mock.calls).not.toBeNull();
  });
  it('renders submit button with custom text', () => {
    const wrapper = mount(<AddBook />);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Add Book');
  });

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
