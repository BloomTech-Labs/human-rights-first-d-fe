import { ADD_PIE_DATA, ADD_PIE_LAYOUT } from '../../reducers/pie_reducers';
import axios from 'axios';

export const pieSelection = () => dispatch => {
  axios
    .post('https://hrf-d-api.herokuapp.com/ds_server/us_pie_vic')
    .then(res => {
      console.log('piedata', res.data);
      const pie = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_PIE_DATA, payload: pie.data });
      dispatch({ type: ADD_PIE_LAYOUT, payload: pie.layout });
    })
    .catch(err => {
      console.log(err);
    });
};
