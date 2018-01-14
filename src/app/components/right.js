import React from 'react';
import PropTypes from 'prop-types';
import { header, compStyle } from './styles';
import { DatePicker, Paper } from 'material-ui';

export default class Right extends React.Component{
  handleChangeDateFrom = (e, value) => {
   this.props.selectDatefrom(value);
  };

  render(){
    const { currentDate, birthDate } = this.props;
    const birthDay = new Date(birthDate).getDate(); 
    const birthMonth = (new Date(birthDate).getUTCMonth()) + 1; 
    const birthYear = new Date(birthDate).getFullYear(); 
    const currentDay = new Date(currentDate).getDate(); 
    const currentMonth = (new Date(currentDate).getUTCMonth()) + 1; 
    const currentYear = new Date(currentDate).getFullYear();
    const ageIndays = currentDay - birthDay; 
    const ageInMonths = currentMonth - birthMonth; 
    const ageInYears = currentYear - birthYear; 
    return(
      <Paper style={compStyle}>
        <h2 style={header}>React test 3</h2>
        <DatePicker
          hintText="type your birthDate"
          openToYearSelection
          onChange={this.handleChangeDateFrom}
        />
        <div>
          {currentDate === 0 ? null : (
            <p>Current date is: {new Date(currentDate).toLocaleDateString()}</p>
          )}
          {birthDate === 0 ? null : (
            <p>Your Birth Date is : {new Date(birthDate).toLocaleDateString()}</p>
          )}
          {(birthDate > 0 && currentDate > 0) ? (
            <div>
              <p>you lived: {ageIndays} Days , {ageInMonths} months and {ageInYears} years</p>
            </div>
          ) : null}
        </div>
      </Paper>
    );
  }
}

Right.propTypes = {
  selectDatefrom: PropTypes.func,
  currentDate: PropTypes.number,
  birthDate: PropTypes.number,
};