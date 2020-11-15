export const ADD_PIE_DATA = 'ADD_PIE_DATA';
export const ADD_PIE_LAYOUT = 'ADD_PIE_LAYOUT';
export const SELECT_STATE = 'SELECT_STATE';

// intial State
export const initialState = {
  select_state: '',
  data: [],
  layout: {},
};

// reducers
export function pieReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PIE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_PIE_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };

    default:
      return state;
  }
}
