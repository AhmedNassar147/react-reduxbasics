import optionTypes from '../types/options';

const currentState = ({
  options: {},
  load: true,
});

const optionReducer = (state = currentState, action) => {
  switch (action.type) {
    case optionTypes.ON_PAGE_LOADING:
      return state = {
        ...state,
        options: action.options,
        load: false, 
      };
    default: return state;
  }
};

export default optionReducer;