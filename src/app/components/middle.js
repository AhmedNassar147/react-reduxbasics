import React from 'react';
import PropTypes from 'prop-types';
import { header, cmpStyle, middleElements } from './styles';

export default class Middle extends React.Component{
  handleSelectOptionChange = (event) => {
    const value = event.target.value;
    this.props.selectOption(value);
  }

  render(){
    const { options, selectedOption, resetData, optionId } = this.props;
    return(
      <div style={cmpStyle}>
        <h2 style={header}>React test 2</h2>
        <select value={optionId} onChange={this.handleSelectOptionChange} style={middleElements}>
          {options.map((option) => (
            <option value={option.id} key={option.id}>{option.label}</option>
          ))}
        </select>
        <input 
          type="text"
          style={middleElements}
          value={selectedOption === "default option" ? '' : selectedOption }
          onChange={this.handleInputChange}
        />
        <button 
          type="submit"
          style={middleElements}
          onClick={resetData}
        >
        reset
        </button>
      </div>
    );
  }
}

Middle.propTypes = {
  selectOption: PropTypes.func,
  selectedOption: PropTypes.string,
  resetData: PropTypes.func,
}

