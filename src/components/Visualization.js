//libraries
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import { mapSelection } from '../state/actions/mapActions';
// import { ADD_MAP, mapReducer } from '../reducers/map_reducer';
// import { mapSelection } from '../reducers/mapActions';

export default function Visualization() {
  //states
  const mapData = useSelector(state => state.map.data);
  const mapLayout = useSelector(state => state.map.layout);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mapSelection());
    // console.log('map select', mapData);
  }, []);

  //Todo: make map full width and height
  return (
    <div>
      <Plot data={mapData} layout={mapLayout} />
    </div>
  );
}
