export const ADD_BAR_DATA = 'ADD_BAR_DATA';
export const ADD_BAR_LAYOUT = 'ADD_BAR_LAYOUT';
export const SELECT_STATE = 'SELECT_STATE';
export const ADD_CITY = 'ADD_CITY';
export const ADD_ZIPCODE = 'ADD_ZIPCODE';

// intial State
export const initialState = {
  start_date: '2013-01-01',
  end_date: '2019-01-01',
  group_by: { National: true },
  asc: true,
  data: [],
  layout: {},
};

// reducers
export function barReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BAR_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_BAR_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
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

    default:
      return state;
  }
}
