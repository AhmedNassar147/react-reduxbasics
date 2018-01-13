import React from 'react';
import PropTypes from 'prop-types';

export default class Right extends React.Component{
  render(){
    return(
      <div>
        <h2>right</h2>
        <input type="datetime" />
        <input type="datetime-local" />
      </div>
    );
  }
}