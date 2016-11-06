import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AddDoto from './AddDoto';
import DotoList from './DotoList';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={ store }>
        <div>
          <h1>Do-to</h1>
          <AddDoto />
          <DotoList />
        </div>
      </Provider>
    );
  }
}
