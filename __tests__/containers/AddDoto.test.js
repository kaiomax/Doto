import React from 'react';
import { shallow } from 'enzyme';
import { AddDoto } from '../../src/containers/AddDoto';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function setup() {
  const props = {
    addDoto: jest.fn()
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
    expect(wrapper.find(RaisedButton).length).toBe(1);
    expect(wrapper.find(RaisedButton).props().label).toBe('Adicionar');
  });

  it('should call addDoto', () => {
    const { wrapper, props } = setup();
    const dotoTitle = 'New Doto';

    wrapper.find(TextField).simulate('change', {
      target: { value: dotoTitle }
    });
    wrapper.find(RaisedButton).simulate('click');

    expect(props.addDoto.mock.calls.length).toBe(1);
    expect(props.addDoto.mock.calls[0][0]).toBe(dotoTitle);
  });

  it('should not call addDoto when has no title', () => {
    const { wrapper, props } = setup();
    wrapper.find(RaisedButton).simulate('click');

    expect(props.addDoto.mock.calls.length).toBe(0);
  });

  it('should show alert when is invalid', () => {
    const { wrapper } = setup();

    expect(wrapper.state().alertIsVisible).toBeFalsy();
    wrapper.find(RaisedButton).simulate('click');
    expect(wrapper.state().alertIsVisible).toBeTruthy();
  });
});
