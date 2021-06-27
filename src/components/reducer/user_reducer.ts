import { SIGNIN_USER } from '../actions/type';

const initialState = {};

export default function User(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    default:
      return state;
  }
}
