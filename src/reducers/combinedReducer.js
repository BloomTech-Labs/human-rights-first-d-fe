import { combineReducers } from 'redux';
import { mapReducer as map } from './map_reducer';
import { Graph_reducer as graph } from './graph_reducer';
import { barReducer as bar } from './barReducer';
import { pieReducer as pie } from './pie_reducers';

const rootReducer = combineReducers({
  map,
  graph,
  bar,
  pie,
});

export default rootReducer;
