import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import { barSelection } from '../state/reducers/barActions';

export default function Visualization() {
  //states
  const barData = useSelector(state => state.bar.data);
  const barLayout = useSelector(state => state.bar.layout);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barSelection());
  }, []);

  //Todo: make map full width and height
  return (
    <div>
      <Plot data={barData} layout={barLayout} />
    </div>
  );
}
