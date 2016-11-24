import React from 'react';
import { shallow } from 'enzyme';
import DotoList from '../../src/components/DotoList';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const firstDate = '2016-01-01T00:00:00-03:00';
const secondDate = '2016-01-02T00:00:00-03:00';

const props = {
  dotos: [
    { id: 1, title: 'Doto 1', finishedAt: firstDate },
    { id: 2, title: 'Doto 2', finishedAt: firstDate },
    { id: 3, title: 'Doto 3', finishedAt: secondDate }
  ],
  onDelete: jest.fn()
};
let wrapper;

describe('DotoList', () => {
  beforeEach(() => {
    wrapper = shallow(<DotoList { ...props } />);
  });

  it('should render items', () => {
    expect(wrapper.find(ListItem).length).toBe(props.dotos.length);
    expect(wrapper.find(Subheader).length).toBe(2);
  });

  it('should have props for dotos', () => {
    expect(wrapper.instance().props.dotos).toBeDefined();
  });
});
