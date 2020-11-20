import {
  ADD_INCIDENT_DATA,
  ADD_INCIDENT_LAYOUT,
  ADD_INCIDENT_USER_INPUT,
} from '../reducers/incident_reducers';
import axios from 'axios';

export const incidentSelection = () => dispatch => {
  axios

    .get('https://hrf-d-api.herokuapp.com/ds_server/us_non_lethal_line')
    .then(res => {
      const incident = JSON.parse(res.data);
      // dispatches
      dispatch({ type: ADD_INCIDENT_DATA, payload: incident.data });
      dispatch({ type: ADD_INCIDENT_LAYOUT, payload: incident.layout });
      dispatch({ type: ADD_INCIDENT_USER_INPUT, payload: incident.user_input });
    })
    .catch(err => {
      console.log(err);
    });
};
