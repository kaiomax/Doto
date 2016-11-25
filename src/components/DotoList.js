import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash';
import moment from 'moment';

const DotoList = ({ dotos, onDelete }) => {
  const iconButtonElement = (
    <IconButton
      touch={ true }
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color="#666666" />
    </IconButton>
  );

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
        rightIconButton={
          <IconMenu iconButtonElement={ iconButtonElement }>
            <MenuItem onTouchTap={ onDelete.bind(this, doto.id) }>Excluir</MenuItem>
          </IconMenu>
        }
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
  dotos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DotoList;
