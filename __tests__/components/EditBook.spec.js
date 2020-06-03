// import React from "react";
// import { shallow } from "enzyme";
// import EditBook from "../../components/EditBook";

// describe("Edit Book Container", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<EditBook />);
//   });

//   it("should render correctly", () => {
//     expect(wrapper).not.toBeNull();
//   });
//   it('It has input value', () => {

//   })
//   describe('Edit Book', () => {
//     const testState = { name: "test", author: "test1", description: "test2" };
//     const mockValue = "test" || undefined;
//     it('should call input onChange', () => {
//       wrapper.find('input').at(0).simulate('change', { target: { name: "name", value: mockValue } });
//       wrapper.find('input').at(1).simulate('change', { target: { name: "author", value: mockValue } });
//       wrapper.find('input').at(2).simulate('change', { target: { name: "description", value: mockValue } });
//       expect(testState.name).toEqual(mockValue);
//       expect(testState.author).toEqual(mockValue);
//       expect(testState.description).toEqual(mockValue);
//     });
//   })
// });
