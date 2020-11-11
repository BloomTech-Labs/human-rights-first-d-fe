// actions
export const ADD_BAR_GRAPH = 'ADD_BAR_GRAPH';
export const ADD_MAP = 'ADD_MAP';
export const ADD_PIE_CHART = 'ADD_PIE_CHART';
export const SELECT_STATE = 'SELECT_STATE';

// initial states
export const props = {
  bar_graph: {
    data: [],
    layout: {},
  },
  map: {
    data: [],
    layout: {},
  },
  pie_chart: {
    data: [],
    layout: {},
  },
  select_state: '',
};

// reducer
export default function Graph_reducer(state = props, action) {
  switch (action.type) {
    case SELECT_STATE:
      return {
        ...state,
        select_state: action.payload,
      };
    case ADD_BAR_GRAPH:
      return {
        ...state,
        bar_graph: action.payload,
      };
    case ADD_MAP:
      return {
        ...state,
        map: action.payload,
      };
    case ADD_PIE_CHART:
      return {
        ...state,
        pie_chart: action.payload,
      };
    default:
      return state;
  }
}
