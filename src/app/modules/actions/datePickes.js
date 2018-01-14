import datePickeTypes from '../types/datePickers';
export default {
  selectDateFrom: (value) => ({
    type: datePickeTypes.SELECT_DATE_FROM,
    value,
  }),
}