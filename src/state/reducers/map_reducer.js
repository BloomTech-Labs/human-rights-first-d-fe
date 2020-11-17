// actions
export const ADD_MAP_DATA = 'ADD_MAP_DATA';
export const ADD_MAP_LAYOUT = 'ADD_MAP_LAYOUT';
export const FIND_START_DATE = 'FIND_START_DATE';
export const ADD_ARMED = 'ADD_ARMED';
export const ADD_DEMOGRAPHIC = 'ADD_DEMOGRAPHIC';

// initial state
export const initialState = {
  start_date: '2013-01-01',
  end_date: '2019-01-01',
  start_year: '',
  end_year: '',
  sort_by: ['Demographic'],
  data: [],
  layout: {},
};

// reducer
//future add LOADING, ERROR also
export function mapReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MAP_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'ADD_MAP_LAYOUT':
      return {
        ...state,
        layout: action.payload,
      };
    case 'FIND_START_DATE':
      return {
        ...state.map(startDate => {
          return startDate == action.payload;
        }),
      };
    case 'ADD_ARMED':
      return {
        ...state,
        armed: action.payload,
      };
    case 'ADD_DEMOGRAPHIC':
      return {
        ...state,
        demographic: action.payload.demographic,
      };
    default:
      return state;
  }
}
