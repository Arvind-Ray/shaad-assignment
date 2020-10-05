import actionTypes from '../../action-types';

export default function (state = {}, action) {
  switch (action.type) {
    case actionTypes.ON_LOGIN:
      const payload = action.payload;
      const {success , token} = payload || {};
      return {
        ...state,
        success,
        token
       
      }
  }
  return state;
}