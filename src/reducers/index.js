import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddressFormReducer from './AddressFormReducer';
import AddressReducer from './AddressReducer';
import SelectionReducer from './SelectionReducer';
import TitleFormReducer from './TitleFormReducer';
import TitleReducer from './TitleReducer';


export default combineReducers({
  auth: AuthReducer,
  addressForm: AddressFormReducer,
  address: AddressReducer,
  selectedUserId: SelectionReducer,
  titleForm: TitleFormReducer,
  title: TitleReducer
});
