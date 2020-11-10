import {
  FETCH_START,
  FETCH_SUCESS,
  FETCH_FAILURE,
  SAVE_SELECTED,
} from '../reducers/mapReducer';
import axios from 'axios';

export const mapSelection = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get('https://gist.github.com/caw442000/1904ecbc3a268946b21c0c65f4825e03')
    .then(res => {
      dispatch({ type: FETCH_SUCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
