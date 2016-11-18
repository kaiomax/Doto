import React from 'react';
import { shallow } from 'enzyme';
import { ClockControl } from '../../src/containers/ClockControl';
import RaisedButton from 'material-ui/RaisedButton';

function setup() {
  const props = {
    playTimer: jest.fn()
  };
  const wrapper = shallow(<ClockControl { ...props } />);

  return {
    props,
    wrapper
  }
}

describe('ClockControl', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();

    expect(wrapper.find(RaisedButton).length).toBe(1);
    expect(wrapper.find(RaisedButton).props().label).toBe('Iniciar');
  });

  it('should call playTimer', () => {
    const { wrapper, props } = setup();

    wrapper.find(RaisedButton).simulate('click');

    expect(props.playTimer.mock.calls.length).toBe(1);
  });

});
