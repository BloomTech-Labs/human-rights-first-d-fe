import {
  ADD_MAP_DATA,
  ADD_MAP_LAYOUT,
  FIND_START_DATE,
  ADD_ARMED,
  ADD_DEMOGRAPHIC,
} from '../reducers/map_reducer';
import axios from 'axios';

export const mapSelection = () => dispatch => {
  axios
    .post('https://hrf-d-api.herokuapp.com/ds_server/us_map')
    .then(res => {
      // console.log('res', res.data);
      const map = JSON.parse(res.data);
      console.log('SORT_BY', map.data[0]);
      // dispatches
      dispatch({ type: ADD_MAP_DATA, payload: map.data });
      dispatch({ type: ADD_MAP_LAYOUT, payload: map.layout });
      dispatch({ type: FIND_START_DATE, payload: map.sort_by });
    })
    .catch(err => {
      console.log(err);
    });
};
