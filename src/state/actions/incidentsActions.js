import {
  ADD_INCIDENT_DATA,
  ADD_INCIDENT_LAYOUT,
} from '../reducers/incident_reducers';
import axios from 'axios';

export const incidentSelection = () => dispatch => {
  axios

    .get(
      'http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_non_lethal_line'
    )
    .then(res => {
      console.log('piedata', res.data);
      const incident = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_INCIDENT_DATA, payload: incident.data });
      dispatch({ type: ADD_INCIDENT_LAYOUT, payload: incident.layout });
    })
    .catch(err => {
      console.log(err);
    });
};
