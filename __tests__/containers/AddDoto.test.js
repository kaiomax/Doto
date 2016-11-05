import React from 'react';
import { shallow } from 'enzyme';
import { AddDoto } from '../../src/containers/AddDoto';

function setup() {
  const props = {
    addDoto: jest.fn()
  };
  const enzymeWrapper = shallow(<AddDoto {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('AddDoto', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('input').length).toBe(1);
    expect(enzymeWrapper.find('button').text()).toBe('Adicionar');
  });

  it('should call addDoto', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('button').simulate('click');
      expect(props.addDoto.mock.calls.length).toBe(1);
    })
});
