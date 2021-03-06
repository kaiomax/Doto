import React from 'react';
import { shallow } from 'enzyme';
import AddDoto from '../../src/components/AddDoto';
import TextField from 'material-ui/TextField';

function setup() {
  const props = {
    onAddDoto: jest.fn()
  };
  const wrapper = shallow(<AddDoto { ...props } />);

  return {
    props,
    wrapper
  }
}

describe('AddDoto', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();

    expect(wrapper.find(TextField).length).toBe(1);
  });

  it('should call onAddDoto', () => {
    const { wrapper, props } = setup();
    const dotoTitle = 'New Doto';

    wrapper.find(TextField).simulate('change', {
      target: { value: dotoTitle }
    });
    wrapper.find(TextField).simulate('keyPress', {
      key: 'Enter'
    });

    expect(props.onAddDoto.mock.calls.length).toBe(1);
    expect(props.onAddDoto.mock.calls[0][0]).toBe(dotoTitle);
  });

  it('should not call onAddDoto when has no title', () => {
    const { wrapper, props } = setup();
    wrapper.find(TextField).simulate('keyPress', {
      key: 'Enter'
    });

    expect(props.onAddDoto.mock.calls.length).toBe(0);
  });

  it('should show alert when is invalid', () => {
    const { wrapper } = setup();

    expect(wrapper.state().alertIsVisible).toBeFalsy();
    wrapper.find(TextField).simulate('keyPress', {
      key: 'Enter'
    });
    expect(wrapper.state().alertIsVisible).toBeTruthy();
  });
});
