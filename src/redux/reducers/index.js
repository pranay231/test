import {combineReducers} from 'redux';
import Reducer from './Reducer';
import Reducer2 from './Reducer2';

const RootReducer=combineReducers({
    number1:Reducer,
    count1:Reducer2
})
export default RootReducer;
