import React from 'react';
import { shallow } from 'enzyme';
import Clock from '../../src/components/Clock';

const time = 0;
const props = {
  time: time
};

let wrapper;

describe('Clock', () => {
  beforeEach(() => {
    wrapper = shallow(<Clock { ...props } />);
  });

  it('should render the clock', () => {
    expect(wrapper.text()).toBe('00:00');
    wrapper.setProps({ time: 60 });
    expect(wrapper.text()).toBe('01:00');
  });
});
