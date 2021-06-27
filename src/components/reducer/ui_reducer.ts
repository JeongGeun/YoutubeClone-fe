import { TOGGLE_DRAWER } from '../actions/home/type';

const initialState = {
  open: false,
};

export default function Toggle(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, open: !state.open };
    default:
      return state;
  }
}
