import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';
import CycleDialog from '../../src/components/CycleDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
  BREAK_TIME,
  WORK_TIME
} from '../../src/constants/Clock';

function setup(customProps = {}) {
  const props = _.merge({
    clockMode: WORK_TIME,
    isVisible: true,
    onClose: jest.fn(),
    setTimerMode: jest.fn()
  }, customProps);
  const wrapper = shallow(<CycleDialog { ...props } />);

  return {
    props,
    wrapper
  }
}

describe('CycleDialog', () => {
  it('should render the right components for "WORK_TIME" mode', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Dialog).length).toBe(1);
    expect(wrapper.find(Dialog).props().actions.length).toBe(2);
    expect(wrapper.find(Dialog).props().title).toBe('É hora de descansar!');
    expect(wrapper.find(Dialog).props().actions[0].props.label).toBe('Pular descanso');
    expect(wrapper.find(Dialog).props().actions[1].props.label).toBe('Ir para descanso');
    expect(wrapper.find(Dialog).props().actions[0].type).toBe(FlatButton);
    expect(wrapper.find(Dialog).props().actions[1].type).toBe(FlatButton);
  });

  it('should render the right components for "BREAK_TIME" mode', () => {
    const customProps = {
      clockMode: BREAK_TIME
    };
    const { wrapper } = setup(customProps);

    expect(wrapper.find(Dialog).length).toBe(1);
    expect(wrapper.find(Dialog).props().title).toBe('É hora de trabalhar!');
    expect(wrapper.find(Dialog).props().actions.type).toBe(FlatButton);
  });
});
