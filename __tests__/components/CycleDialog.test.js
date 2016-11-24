import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';
import CycleDialog from '../../src/components/CycleDialog';
import AddDoto from '../../src/components/AddDoto';
import DotoList from '../../src/components/DotoList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
  BREAK_TIME,
  WORK_TIME
} from '../../src/constants/Clock';

function setup(customProps = {}) {
  const props = _.merge({
    addDotos: jest.fn(),
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

let wrapper;

describe('CycleDialog', () => {
  describe('on "WORK_TIME" mode', () => {
    beforeEach(() => {
      wrapper = setup().wrapper;
    });

    it('should render the right components', () => {
      expect(wrapper.find(Dialog).length).toBe(1);
      expect(wrapper.find(AddDoto).length).toBe(1);
      expect(wrapper.find(DotoList).length).toBe(1);
    });

    it('should have passed the right props for Dialog', () => {
      const dialogProps = wrapper.find(Dialog).props();

      expect(dialogProps.actions.length).toBe(2);
      expect(dialogProps.title).toBe('É hora de descansar!');
      expect(dialogProps.actions[0].props.label).toBe('Pular descanso');
      expect(dialogProps.actions[1].props.label).toBe('Ir para descanso');
      expect(dialogProps.actions[0].type).toBe(FlatButton);
      expect(dialogProps.actions[1].type).toBe(FlatButton);
      expect(dialogProps.autoScrollBodyContent).toBe(true);
    });

    it('should call addDotos and clear state on changeMode call when it has dotos', () => {
      wrapper.setState({ dotos: [{ title: 'Some Doto' }] });
      wrapper.instance().setState = jest.fn();
      expect(wrapper.instance().state.dotos.length).toBe(1);
      expect(wrapper.instance().props.addDotos.mock.calls.length).toBe(0);

      wrapper.instance().changeMode(BREAK_TIME);

      expect(wrapper.instance().props.addDotos.mock.calls.length).toBe(1);
      expect(wrapper.instance().setState.mock.calls.length).toBe(1);
      expect(wrapper.instance().setState.mock.calls[0][0]).toEqual({ dotos: [] });
    });

    it('should not call addDotos and setState on changeMode call when it has not dotos', () => {
      wrapper.instance().setState = jest.fn();
      expect(wrapper.instance().state.dotos.length).toBe(0);
      expect(wrapper.instance().props.addDotos.mock.calls.length).toBe(0);
      expect(wrapper.instance().setState.mock.calls.length).toBe(0);

      wrapper.instance().changeMode(BREAK_TIME);

      expect(wrapper.instance().props.addDotos.mock.calls.length).toBe(0);
      expect(wrapper.instance().setState.mock.calls.length).toBe(0);
    });
  });

  describe('on "BREAK_TIME" mode', () => {
    beforeEach(() => {
      const customProps = {
        clockMode: BREAK_TIME
      };
      wrapper = setup(customProps).wrapper;
    });

    it('should render the right components', () => {
      expect(wrapper.find(Dialog).length).toBe(1);
      expect(wrapper.find(AddDoto).length).toBe(0);
      expect(wrapper.find(DotoList).length).toBe(0);
    });

    it('should have passed the right props for Dialog', () => {
      const dialogProps = wrapper.find(Dialog).props();

      expect(dialogProps.title).toBe('É hora de trabalhar!');
      expect(dialogProps.actions.type).toBe(FlatButton);
      expect(dialogProps.autoScrollBodyContent).toBe(false);
    });
  });

  it('should add Doto to state on handleAddDoto', () => {
    expect(wrapper.instance().state.dotos.length).toBe(0);
    wrapper.instance().handleAddDoto('Some Doto');
    expect(wrapper.instance().state.dotos.length).toBe(1);
    expect(wrapper.instance().state.dotos[0]).toBe('Some Doto');
  });

  it('should call setTimerMode and onClose when changeMode is called', () => {
    const { wrapper, props } = setup();

    expect(props.setTimerMode.mock.calls.length).toBe(0);
    expect(props.onClose.mock.calls.length).toBe(0);

    wrapper.instance().changeMode(BREAK_TIME);

    expect(props.setTimerMode.mock.calls.length).toBe(1);
    expect(props.setTimerMode.mock.calls[0][0]).toBe(BREAK_TIME);
    expect(props.onClose.mock.calls.length).toBe(1);
  });
});
