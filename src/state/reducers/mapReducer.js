export const FETCH_START = 'FETCH_START';
export const FETCH_SUCESS = 'FETCH_SUCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const SAVE_SELECTED = 'SAVE_SELECTED';

export const initialState = {
  start_date: '',
  end_date: '',
  start_year: '',
  end_year: '',
  stateValue: '',
  sort_by: '',
  showDemographic: false,
  armed: '',
};

export function mapReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_SUCESS':
      return {
        ...state,
        isFetching: false,
        selectedInfo: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isFetching: false,
      };
    case 'SAVE_SELECTED':
      return {
        ...state,
        selected: {
          ...state.selected,
        },
      };
    default:
      return state;
  }
}
