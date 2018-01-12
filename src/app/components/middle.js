import React from 'react';
import PropTypes from 'prop-types';
import { header, cmpStyle, middleElements } from './styles';

export default class Middle extends React.Component{
  render(){
    const { options } = this.props;
    return(
      <div style={cmpStyle}>
        <h2 style={header}>React test 2</h2>
        <select style={middleElements}>
          <option>defaut option</option>
          {options.map((option) => (
            <option key={option.id}>{option.label}</option>
          ))}
        </select>
        <br />
        <input type="text" name="selectedOptions" style={middleElements} />
        <br />        
        <button type="submit" style={middleElements}>reset</button>
      </div>
    );
  }
}


