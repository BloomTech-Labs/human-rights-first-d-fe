//libraries
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import { mapSelection } from '../state/actions/mapActions';
import { barSelection } from '../state/reducers/barActions';

export default function Visualization() {
  //states
  const barData = useSelector(state => state.bar.data);
  const barLayout = useSelector(state => state.bar.layout);
  const mapData = useSelector(state => state.map.data);
  const mapLayout = useSelector(state => state.map.layout);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barSelection());
    dispatch(mapSelection());
    // console.log('map select', mapData);
  }, []);

  //Todo: make map full width and height
  return (
    <div>
      <Plot data={barData} layout={barLayout} />
      <Plot data={mapData} layout={mapLayout} />
    </div>
  );
}
