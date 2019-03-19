import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddressFormReducer from './AddressFormReducer';
import AddressReducer from './AddressReducer';

export default combineReducers({
  auth: AuthReducer,
  addressForm: AddressFormReducer,
  address: AddressReducer
});
