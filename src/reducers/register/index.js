import actionTypes from '../../action-types';

const initialState = {
  data: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_REGISTER:
      console.log("action in reducer", action.payload);
      const payload = action.payload;
      return {
        ...state,
        data: payload
      }
  }
  return state;
}