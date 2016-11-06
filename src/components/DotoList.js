import React, { PropTypes } from 'react';

const DotoList = ({ dotos }) => {
  return (
    <ul>
      { dotos.map((doto, i) => {
        return (
          <li key={ i }>{ doto.title }</li>
        );
      }) }
    </ul>
  );
};

DotoList.propTypes = {
  dotos: PropTypes.array.isRequired
}

export default DotoList;
