export const ADD_DEMO_DATA = 'ADD_DEMO_DATA';
export const ADD_DEMO_LAYOUT = 'ADD_DEMO_LAYOUT';

// intial State
export const initialState = {
  select_state: '',
  data: [],
  layout: {},
};

// reducers
export function demoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DEMO_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_DEMO_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };

    default:
      return state;
  }
}
