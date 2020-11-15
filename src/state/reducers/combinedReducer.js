import { combineReducrs } from 'redux';
import { barReducer as bar } from './barReducer';

const rootReducer = combineReducrs({
  bar,
});

export default rootReducer;
