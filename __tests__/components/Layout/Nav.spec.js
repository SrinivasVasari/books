import React from "react";
import * as renderer from 'react-test-renderer';
import Nav from "../../../components/Layout/Nav";

describe("should render without errors", () => {
  it('Should render correctly', () => {
    const component = renderer.create(<Nav />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
