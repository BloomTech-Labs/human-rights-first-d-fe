export const ADD_INCIDENT_DATA = 'ADD_INCIDENT_DATA';
export const ADD_INCIDENT_LAYOUT = 'ADD_INCIDENT_LAYOUT';
export const ADD_INCIDENT_USER_INPUT = 'ADD_INCIDENT_USER_INPUT';
export const SELECT_STATE = 'SELECT_STATE';

// intial State
export const initialState = {
  select_state: '',
  data: [],
  layout: {},
  user_input: '',
};

// reducers
export function incidentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INCIDENT_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_INCIDENT_LAYOUT:
      return {
        ...state,
        layout: action.payload,
      };
    case ADD_INCIDENT_USER_INPUT:
      return {
        ...state,
        user_input: action.payload,
      };

    default:
      return state;
  }
}
