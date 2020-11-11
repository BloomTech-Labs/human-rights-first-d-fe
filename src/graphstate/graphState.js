import { FETCH_START, FETCH_SUCESS } from '../reducers/mapReducer';
import axios from 'axios';

export const GraphSelection = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get('')
    .then(res => {
      dispatch({ type: FETCH_SUCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
