import userTypes from '../types/user';

export default {
  getUserData: (users) =>({
    type: userTypes.USER_DATA,
    users,
  }), 
};