import React from 'react';
import { render } from 'enzyme';
import Clock from '../../src/components/Clock';

const time = '00:25';
const props = {
  time: time
};

let wrapper;

describe('Clock', () => {
  beforeEach(() => {
    wrapper = render(<Clock { ...props } />);
  });

  it('should render the clock', () => {
    expect(wrapper.text()).toBe(time);
  });
});
