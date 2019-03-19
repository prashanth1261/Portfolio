import {
  ADDRESS_UPDATE,
  ADDRESS_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  FullName: '',
  Street: '',
  Phone: '',
  Email: '',
  state: '',
  City: '',
  Zip: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ADDRESS_SAVE_SUCCESS:
        return INITIAL_STATE;
    default:
        return state;
  }
};
