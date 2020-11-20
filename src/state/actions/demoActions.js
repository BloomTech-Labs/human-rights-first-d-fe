import { ADD_DEMO_DATA, ADD_DEMO_LAYOUT } from '../reducers/demo_reducers';
import axios from 'axios';

export const demoSelection = () => dispatch => {
  axios
    .post('https://hrf-d-api.herokuapp.com/ds_server/us_demo_pie')
    .then(res => {
      const demo = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_DEMO_DATA, payload: demo.data });
      dispatch({ type: ADD_DEMO_LAYOUT, payload: demo.layout });
    })
    .catch(err => {
      console.log(err);
    });
};
