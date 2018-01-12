import userTypes from '../types/user';

export default {
  getUserData: ({ user }) =>({
    type: userTypes.USER_DATA,
    user,
  }), 
};