import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import _ from 'lodash';
import moment from 'moment';

const DotoList = ({ dotos }) => {
  const groupedDotos = _(dotos)
      .sortBy('finishedAt')
      .reverse()
      .groupBy(doto => moment(doto.finishedAt).format('DD/MM/YYYY'))
      .value();

  const innerList = (dotos, date) => {
    return (
      <List key={ date }>
        <Subheader>{ date }</Subheader>
        { _.map(dotos, renderItem) }
        <Divider />
      </List>
    );
  }

  const renderItem = (doto, index) => {
    return (
      <ListItem
        key={ index }
        primaryText={ doto.title }
        secondaryText={ moment(doto.finishedAt).format('hh:mm A') }
      />
    );
  }

  return (
    <div>
      { _.map(groupedDotos, innerList) }
    </div>
  );
};

DotoList.propTypes = {
  dotos: PropTypes.array.isRequired
}

export default DotoList;
