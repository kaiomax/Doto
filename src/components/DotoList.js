import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';

const DotoList = ({ dotos }) => {
  return (
    <List>
      { dotos.map((doto, i) => {
        return (
          <ListItem
            key={ i }
            primaryText={ doto.title }
          />
        );
      }) }
    </List>
  );
};

DotoList.propTypes = {
  dotos: PropTypes.array.isRequired
}

export default DotoList;
