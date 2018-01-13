import React from 'react';
import PropTypes from 'prop-types';
import { header, compStyle } from './styles';
import { DropDownMenu, MenuItem, RaisedButton, TextField, Paper } from 'material-ui';

export default class Middle extends React.Component{
  handleSelectOptionChange = (event, index, value) => {
    this.props.selectOption(value);
  }

  render(){
    const { options, selectedOption, resetData, optionId } = this.props;
    return(
      <Paper style={compStyle}>
        <h2 style={header}>React test 2</h2>
        <DropDownMenu value={optionId} onChange={this.handleSelectOptionChange} autoWidth >
          {options.map((option) => (
            <MenuItem 
              value={option.id}
              key={option.id}
              label={option.label}
              primaryText={option.label}
            />
          ))}
        </DropDownMenu>
        <br />
        <TextField 
          hintText="just choose option"
          type="text"
          value={selectedOption === "default option" ? '' : selectedOption }
          onChange={this.handleInputChange}
        />
        <br />
        <RaisedButton
          type="submit"
          onClick={resetData}
          secondary
          fullWidth
          label="reset"
        />
      </Paper>
    );
  }
}

Middle.propTypes = {
  selectOption: PropTypes.func,
  selectedOption: PropTypes.string,
  resetData: PropTypes.func,
}

