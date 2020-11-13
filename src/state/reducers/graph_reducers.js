// actions

export const ADD_BAR_GRAPH = 'ADD_ BAR_GRAPH';
export const ADD_MAP = 'ADD_MAP';
export const ADD_PIE_CHART = 'ADD_ PIE_CHART';
export const SELECT_STATE = 'SELECT_STATE';

// initialState
export const initialState = {
  bar_graph: {
    data: [],
    layout: [],
  },
  map: {
    data: [],
    layout: [],
  },
  pie_chart: {
    data: [],
    layout: [],
  },
  select_state: '',
};
// reducer

export default function graph_reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_STATE:
      return {
        ...state,
        select_state: action.payload,
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
