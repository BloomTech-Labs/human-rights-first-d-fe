//libraries
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MAP, mapReducer } from '../reducers/map_reducer';
import { mapSelection } from '../reducers/mapActions';

export default function Visualization() {
  //states
  const props = useSelector(state => state.mapReducer);
  const dispatch = useDispatch();
  console.log('visual', props);
  // const [data, setData] = useState(initialState);

  useEffect(() => {
    dispatch(mapSelection());
    console.log('map select', mapSelection);
  }, []);

  //Todo: make map full width and height
  return (
    <div>
      <Plot data={props} layout={props} />
    </div>
  );
}
