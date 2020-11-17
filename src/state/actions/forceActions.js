import { ADD_FORCE_DATA, ADD_FORCE_LAYOUT } from '../reducers/force_reducers';
import axios from 'axios';

export const forceSelection = () => dispatch => {
  axios

    .get(
      'http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_non_lethal'
    )
    .then(res => {
      console.log('forcedata', res.data);
      const force = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_FORCE_DATA, payload: force.data });
      dispatch({ type: ADD_FORCE_LAYOUT, payload: force.layout });
    })
    .catch(err => {
      console.log(err);
    });
};
