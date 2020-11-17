import {
  ADD_INCIDENT_DATA,
  ADD_INCIDENT_LAYOUT,
} from '../reducers/incident_reducers';
import axios from 'axios';

export const incidentSelection = () => dispatch => {
  axios

    .get('https://hrf-d-api.herokuapp.com/ds_server/us_non_lethal_line')
    .then(res => {
      console.log('incidentdata', res.data);
      const incident = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_INCIDENT_DATA, payload: incident.data });
      dispatch({ type: ADD_INCIDENT_LAYOUT, payload: incident.layout });
    })
    .catch(err => {
      console.log(err);
    });
};
