import React from 'react';
import { header, compStyle } from './styles';
import { List, ListItem, Paper, Dialog } from 'material-ui';

export default class Left extends React.Component{
  constructor(){
    super();
    this.state = {
      open: false,
      userData: '',
    };
  }
  handleSelectUser = (user) => {
    this.setState({
      open: true,
      userData: user.name
    });
  }
  handleClose = () => {
    this.setState({
      open: false,
    })
  }
  render(){
    const { users } = this.props;
    return(
      <Paper style={compStyle}>
        <h2 style={header}>React test 1</h2>
        {!(users && users.length > 0) ? null : (
          <List>
            {users.map((user) => ( 
              <ListItem
               key={user.id} 
               onClick={() => this.handleSelectUser(user)}
               >{user.name}</ListItem>
              )
            )}  
          </List>
        )}
        <Dialog open={this.state.open} onRequestClose={this.handleClose}>
          <p> you choosed: {this.state.userData}</p>
        </Dialog>
      </Paper>
    );
  }
};

