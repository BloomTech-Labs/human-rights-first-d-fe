import { combineReducers } from 'redux';
import { mapReducer as map } from './map_reducer';
import { Graph_reducer as graph } from './graph_reducer';
import { barReducer as bar } from './barReducer';
import { pieReducer as pie } from './pie_reducers';
import { forceReducer as force } from './force_reducers';
import { incidentReducer as incident } from './incident_reducers';
import { demoReducer as demo } from './demo_reducers';
import { listReducer as list } from './list_reducers';

const rootReducer = combineReducers({
  map,
  graph,
  bar,
  pie,
  force,
  incident,
  demo,
  list,
});

export default rootReducer;
