import React from 'react';
import { header, compStyle } from './styles';
import { List, ListItem, Paper } from 'material-ui';

export default class Left extends React.Component{
  render(){
    const { users } = this.props;
    return(
      <Paper style={compStyle}>
        <h2 style={header}>React test 1</h2>
        {!(users && users.length > 0) ? null : (
          <List>
            {users.map((user) => ( <ListItem key={user.id}>{user.name}</ListItem> ) )}  
          </List>
        )}
      </Paper>
    );
  }
};

