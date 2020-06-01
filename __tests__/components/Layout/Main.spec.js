import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../../../components/Layout/Main';


describe('MyComponent', () => {
  it('should render correctly', () => {
    const spy = shallow(<MainPage />);
  
    expect(spy).toMatchSnapshot();
  });
});