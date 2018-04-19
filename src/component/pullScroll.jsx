import React from 'react';
import PropTypes from 'prop-types';

const Init = props => (
  <div className="pull-scroll">
    {
      props.text
    }
  </div>
);

Init.defaultProps = {
  text: 'hello world',
};

Init.propTypes = {
  text: PropTypes.string,
};


export default Init;
