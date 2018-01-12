import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Main from '../components/main';
import Side from '../components/side';
import userAction from '../actions/user';

class App extends React.Component{
  componentWillMount(){
    this.props.onPageLoad();
  }
  render(){
    console.log(this.props.appReducer.user);
    return(
      <div>
        <Main />
        <Side />       
      </div>
    );
  }
};

App.proptypes = {
  onPageLoad: PropTypes.func
};

 const mapStateToProps = (state) => {
  return {
    user: state.appReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoad: () => {
      dispatch(userAction.getUserData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);