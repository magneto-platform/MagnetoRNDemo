import { createStore, combineReducers } from 'redux';
import countReducer from './actions/reducer';

const rootReducer = combineReducers(
  { 
    count: countReducer ,
    code: countReducer
  }
);
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;
