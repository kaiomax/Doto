import React from 'react';
import { shallow } from 'enzyme';
import DotoList from '../../src/components/DotoList';
import { ListItem } from 'material-ui/List';

const props = {
  dotos: [
    { title: 'Doto 1' },
    { title: 'Doto 2' }
  ]
};
let wrapper;

describe('DotoList', () => {
  beforeEach(() => {
    wrapper = shallow(<DotoList { ...props } />);
  });

  it('should render items', () => {
    expect(wrapper.find(ListItem).length).toBe(props.dotos.length);
  });

  it('should have props for dotos', () => {
    expect(wrapper.instance().props.dotos).toBeDefined();
  });
});
