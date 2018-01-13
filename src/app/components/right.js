import React from 'react';
import PropTypes from 'prop-types';
import { header, compStyle } from './styles';
import { DatePicker, Paper } from 'material-ui';

export default class Right extends React.Component{
  render(){
    return(
      <Paper style={compStyle}>
        <h2 style={header}>React test 3</h2>
        <DatePicker hintText="select birthDate" openToYearSelection={true} />
      </Paper>
    );
  }
}