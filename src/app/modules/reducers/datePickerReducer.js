import datePickerActions from '../types/datePickers';
const initialState = ({
  fromDate: 0,
  toDate: 0,
});

 const datePickerReducer = (state = initialState, action) => {
  switch (action.type) {

  case datePickerActions.SELECT_DATE_FROM:
    return state = {
      ...state,
      toDate: Date.now(),
      fromDate: Date.parse(action.value),
    };

  default:
    return state
  }
}

export default datePickerReducer;
