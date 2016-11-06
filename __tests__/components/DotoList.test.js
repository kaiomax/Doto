import React from 'react';
import { mount, shallow } from 'enzyme';
import DotoList from '../../src/components/DotoList';

const props = {
  dotos: [
    { title: 'Doto 1' },
    { title: 'Doto 2' }
  ]
};

describe('DotoList', () => {
  it('should render items', () => {
    const wrapper = shallow(<DotoList { ...props } />);

    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(props.dotos.length);
  });

  it('should have props for dotos', () => {
    const wrapper = mount(<DotoList { ...props } />);

    expect(wrapper.prop('dotos')).toBeDefined();
  });
});
