import optionTypes from '../types/options';

export default {
  getOptionsload:(options) => ({
    type: optionTypes.ON_PAGE_LOADING,
    options,
  }),
};