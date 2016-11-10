import React from 'react';
import { shallow } from 'enzyme';
import { StartTimer } from '../../src/containers/StartTimer';
import RaisedButton from 'material-ui/RaisedButton';

function setup() {
  const props = {
    startTimer: jest.fn()
  };
  const wrapper = shallow(<StartTimer { ...props } />);

  return {
    props,
    wrapper
  }
}

describe('StartTimer', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();

    expect(wrapper.find(RaisedButton).length).toBe(1);
    expect(wrapper.find(RaisedButton).props().label).toBe('Iniciar');
  });

  it('should call startTimer', () => {
    const { wrapper, props } = setup();

    wrapper.find(RaisedButton).simulate('click');

    expect(props.startTimer.mock.calls.length).toBe(1);
    expect(props.startTimer.mock.calls[0][0]).toBe(25);
  });

});
