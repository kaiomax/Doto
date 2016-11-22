import React, { PropTypes } from 'react';
import moment from 'moment';

const Clock = ({ time }) => {
  return (
    <div className="clock">
      { moment().startOf('day').seconds(time).format('mm:ss') }
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.number.isRequired
}

export default Clock;
