import { ADD_LIST_DATA } from '../reducers/list_reducers';
import axios from 'axios';

export const listSelection = () => dispatch => {
  axios
    .post('https://hrf-d-api.herokuapp.com/ds_server/top_x_list')
    .then(res => {
      const topList = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_LIST_DATA, payload: topList });
    })
    .catch(err => {
      console.log(err);
    });
};
