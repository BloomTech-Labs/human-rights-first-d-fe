import { ADD_MAP, ADD_GENDER, ADD_ARMED, ADD_DEMOGRAPHIC } from './map_reducer';
import axios from 'axios';

export const mapSelection = () => dispatch => {
  dispatch({ type: ADD_MAP });
  axios
    .post('https://hrf-d-api.herokuapp.com/ds_server/us_map')
    .then(res => {
      console.log('res', res.data);
      dispatch({ type: ADD_MAP, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
