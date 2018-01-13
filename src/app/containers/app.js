import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui';

import { containerStyle } from './styles';
import { options, users } from './data';
import Right from '../components/right';
import Left from '../components/left';
import Middle from '../components/middle';
import userAction from '../modules/actions/user';
import optionsAction from '../modules/actions/options';

class App extends React.Component{
  componentWillMount(){
    this.props.onPageLoad(users);
  };
  
  componentDidMount(){
    setTimeout(() =>{
      this.props.getOptions(options);
    },2000);
  }

  render(){
    const {
      users,
      options,
      load,
      selectOption,
      selectedOption,
      resetData,
      optionId
    } = this.props;

    if (load) return(
      <div style={{ textAlign: 'center', paddingTop: '7%' }}> 
        <CircularProgress thickness={7} size={80} />
        <h3>Loading...</h3>
      </div>
      );

    return(
      <div style={containerStyle}>
       
        <Left users={users} />            

        <Middle
          options={options}
          selectOption={selectOption}
          selectedOption={selectedOption}
          resetData={resetData}
          optionId={optionId}
        />
      
        <Right />       
      
      </div>
    );
  }
};

App.proptypes = {
  onPageLoad: PropTypes.func,
  users: PropTypes.objectOf(PropTypes.array),
  getOptions: PropTypes.func,
  options: PropTypes.objectOf(PropTypes.array),
  load: PropTypes.bool,
  selectOption: PropTypes.func,
  selectedOption: PropTypes.string,
  resetData: PropTypes.func,
  optionId: PropTypes.number,
};

 const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.usersData,
    options: state.optionReducer.options,
    load: state.optionReducer.load,
    selectedOption: state.optionReducer.selectedOption,
    optionId: state.optionReducer.optionId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoad: (users) => {
      dispatch(userAction.getUserData(users))
    },
    getOptions: (options) => {
      dispatch(optionsAction.getOptionsload(options))
    },
    selectOption: (optionValue) => {
      dispatch(optionsAction.selectOption(optionValue))
    },
    resetData: () =>{
      dispatch(optionsAction.resetData())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);