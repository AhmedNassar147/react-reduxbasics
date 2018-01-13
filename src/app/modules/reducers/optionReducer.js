import optionTypes from '../types/options';

const intialState = ({
  options: {},
  load: true,
  selectedOption: '',
  optionId: 0,
});

const optionReducer = (state = intialState, action) => {
  switch (action.type) {
    case optionTypes.ON_PAGE_LOADING:
      return state = {
        ...state,
        options: action.options,
        load: false, 
      };
    case optionTypes.SELECT_OPTION:
      const optionId = action.optionValue;
      const selectedOption = state.options.filter(option => option.id == optionId)[0].label;
      return state = {
        ...state,
        optionId,
        selectedOption
      };
    case optionTypes.RESET_DATA:
      return state = {
        ...state,
        selectedOption: '',
        optionId: 0,
      }
    default: return state;
  }
};

export default optionReducer;