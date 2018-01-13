import optionTypes from '../types/options';

export default {
  getOptionsload:(options) => ({
    type: optionTypes.ON_PAGE_LOADING,
    options,
  }),
  selectOption:(optionValue) => ({
    type: optionTypes.SELECT_OPTION,
    optionValue,
  }),
  resetData:() => ({
    type: optionTypes.RESET_DATA,
  }),
};