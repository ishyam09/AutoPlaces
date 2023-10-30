import { combineReducers } from 'redux';
import placesReducer from './placesSlice.js';

const rootReducer = combineReducers({
  places: placesReducer
});

export default rootReducer;
