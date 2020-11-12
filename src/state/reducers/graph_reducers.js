// actions

export const ADD_BAR_GRAPH = 'ADD_ BAR_GRAPH';
export const ADD_MAP = 'ADD_MAP';
export const ADD_PIE_CHART = 'ADD_ PIE_CHART';
// export const REMOVE_GRAPH = 'REMOVE_GRAPH';
export const SELECT_STATE = 'SELECT_STATE';
export const ADD_CITY = 'ADD_CITY';
export const ADD_ZIPCODE = 'ADD_ZIPCODE';
// initialState
export const props = {
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
  city: '',
  zipcode: '',
};
// reducer

export default function graph_reducer(state = props, action) {
  switch (action.type) {
    case SELECT_STATE:
      return {
        ...state,
        select_state: action.payload,
      };
    case ADD_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ADD_ZIPCODE:
      return {
        ...state,
        zipcode: action.payload,
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
