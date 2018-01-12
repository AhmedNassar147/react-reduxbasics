import React from 'react';
import { header, cmpStyle } from './styles';

export default class Left extends React.Component{
  render(){
    const { users } = this.props;
    return(
      <div style={cmpStyle}>
        <h2 style={header}>React test 1</h2>
        {!(users && users.length > 0) ? null : (
          <ul>
            {users.map((user) => ( <li key={user.id}>{user.name}</li> ) )}  
          </ul>
        )}
      </div>
    );
  }
};

