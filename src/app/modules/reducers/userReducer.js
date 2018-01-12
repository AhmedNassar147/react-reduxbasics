import userTypes from '../types/user';
const initialState = ({
  usersData:{},
});
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_DATA:
      return state =  {
        ...state, 
        usersData: action.users,
       };
    default:
      return state;
  }
};

export default usersReducer;