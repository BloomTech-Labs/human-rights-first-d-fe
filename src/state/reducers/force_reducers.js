export const ADD_FORCE_DATA = 'ADD_FORCE_DATA';
export const ADD_FORCE_LAYOUT = 'ADD_FORCE_LAYOUT';
export const ADD_FORCE_USER_INPUT = 'ADD_FORCE_USER_INPUT';

// intial State
export const initialState = {
  select_state: '',
  data: [],
  layout: {},
  frames: [],
};

// reducers
export function forceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FORCE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_FORCE_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
    case ADD_FORCE_USER_INPUT:
      return {
        ...state,
        frames: action.payload,
      };

    default:
      return state;
  }
}
