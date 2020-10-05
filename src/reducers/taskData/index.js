import actionTypes from '../../action-types';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_TASK_DATA:
      const payload = action.payload;
      return {
        ...state,
        data: payload
      }
  }
  return state;
}