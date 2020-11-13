// actions
export const ADD_MAP = 'ADD_MAP';
export const ADD_GENDER = 'ADD_GENDER';
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
export function mapReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MAP':
      return {
        ...state,
        data: action.payload,
      };
    case 'ADD_GENDER':
      return {
        ...state,
        gender: action.payload,
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
