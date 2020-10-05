import actionTypes from '../../action-types';

const initialState = {
  data: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_DELETE_TASKS:
      const payload = action.payload;
      return {
        ...state,
        data: payload
      }
  }
  return state;
}