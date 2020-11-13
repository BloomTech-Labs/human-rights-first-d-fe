import { combineReducers } from 'redux';
import { mapReducer as map } from './map_reducer';
import { Graph_reducer as graph } from './graph_reducer';

const combinedReducers = {
  map,
  graph,
};

export default combinedReducers;
