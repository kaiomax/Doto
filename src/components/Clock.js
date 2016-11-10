import React, { PropTypes } from 'react';

const Clock = ({ time }) => {
  return (
    <div className="clock">
      { time }
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.string.isRequired
}

export default Clock;
