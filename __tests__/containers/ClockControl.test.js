import React from 'react';
import { shallow } from 'enzyme';
import { ClockControl } from '../../src/containers/ClockControl';
import RaisedButton from 'material-ui/RaisedButton';

function setup() {
  const props = {
    pauseTimer: jest.fn(),
    playTimer: jest.fn(),
    stopTimer: jest.fn(),
    clock: {
      timeLeft: 0,
      ticking: false
    }
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

    expect(wrapper.find(RaisedButton).length).toBe(3);
    expect(wrapper.find(RaisedButton).at(0).props().label).toBe('Iniciar');
    expect(wrapper.find(RaisedButton).at(1).props().label).toBe('Pausar');
    expect(wrapper.find(RaisedButton).at(2).props().label).toBe('Parar');
  });

  it('should call playTimer', () => {
    const { wrapper, props } = setup();

    wrapper.find(RaisedButton).at(0).simulate('click');

    expect(props.playTimer.mock.calls.length).toBe(1);
  });

  it('should call pauseTimer', () => {
    const { wrapper, props } = setup();

    wrapper.find(RaisedButton).at(1).simulate('click');

    expect(props.pauseTimer.mock.calls.length).toBe(1);
  });

  it('should call stopTimer', () => {
    const { wrapper, props } = setup();

    wrapper.find(RaisedButton).at(2).simulate('click');

    expect(props.stopTimer.mock.calls.length).toBe(1);
  });
});
