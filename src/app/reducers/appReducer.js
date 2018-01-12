import userTypes from '../types/user';
const initialState = ({
  user:[],

});
const appRreducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_DATA:
      return state ={
        ...state,
        user: [...state],
      };
    default:
      return state;
  }
};

export default appRreducer;