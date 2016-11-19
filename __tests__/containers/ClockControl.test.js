import React from 'react';
import { shallow } from 'enzyme';
import { ClockControl } from '../../src/containers/ClockControl';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';

injectTapEventPlugin();
jest.useFakeTimers();

function setup(customProps) {
  const props = _.merge({
    playTimer: jest.fn(),
    setTimeLeft: jest.fn(),
    stopTimer: jest.fn(),
    clock: {
      secondsLeft: 10,
      ticking: true
    }
  }, customProps);
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

  it('should call setTimeLeft', () => {
    const { wrapper, props } = setup();

    wrapper.find(RaisedButton).at(1).simulate('click');

    expect(props.setTimeLeft.mock.calls.length).toBe(1);
    expect(props.setTimeLeft).lastCalledWith(props.clock.secondsLeft);
  });

  it('should call stopTimer', () => {
    const { wrapper, props } = setup();

    wrapper.find(RaisedButton).at(2).simulate('click');

    expect(props.stopTimer.mock.calls.length).toBe(1);
  });

  it('should call onTickerFinished when secondsLeft is equal 0', () => {
    const customProps = {
      clock: { secondsLeft: 1 },
      onTickerFinished: jest.fn()
    }
    const { wrapper } = setup(customProps);

    expect(wrapper.instance().state.secondsLeft).toBe(customProps.clock.secondsLeft);
    expect(wrapper.instance().props.onTickerFinished.mock.calls.length).toBe(0);
    wrapper.instance().tick();
    expect(wrapper.instance().state.secondsLeft).toBe(0);
    expect(wrapper.instance().props.onTickerFinished.mock.calls.length).toBe(1);
  });

  it('waits 1 second to tick timer', () => {
    const { wrapper } = setup();

    wrapper.instance().tick = jest.fn();
    wrapper.instance().setTickInterval();

    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);

    expect(wrapper.instance().tick.mock.calls.length).toBe(0);
    jest.runOnlyPendingTimers();
    expect(wrapper.instance().tick.mock.calls.length).toBe(1);
  });

  it('decrements seconds by one each time tick is called', () => {
    const { wrapper, props } = setup();

    expect(wrapper.instance().state.secondsLeft).toBe(props.clock.secondsLeft);
    wrapper.instance().tick();
    expect(wrapper.instance().state.secondsLeft).toBe(props.clock.secondsLeft - 1);
    wrapper.instance().tick();
    expect(wrapper.instance().state.secondsLeft).toBe(props.clock.secondsLeft - 2);
  });
});
