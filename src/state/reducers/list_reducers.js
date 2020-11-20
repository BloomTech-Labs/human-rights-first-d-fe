export const ADD_LIST_DATA = 'ADD_LIST_DATA';
export const ADD_LIST_FILTER = 'ADD_LIST_FILTER';
export const ADD_LIST_COUNT = 'ADD_LIST_COUNT';

// intial State
export const initialState = {
  data: {},
  filter: '',
  counter: null,
};

// reducers
export function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_LIST_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ADD_LIST_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
}
