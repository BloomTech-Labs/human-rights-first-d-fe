import { ADD_BAR_DATA, ADD_BAR_LAYOUT } from './barReducer';
import axios from 'axios';

export const barSelection = () => dispatch => {
  axios
    .post('  https://hrf-d-api.herokuapp.com/ds_server/us_bar ')
    .then(res => {
      console.log('res', res.data);
      const bar = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_BAR_DATA, payload: bar.data });
      dispatch({ type: ADD_BAR_LAYOUT, payload: bar.layout });
    })
    .catch(err => {
      console.log(err);
    });
};
