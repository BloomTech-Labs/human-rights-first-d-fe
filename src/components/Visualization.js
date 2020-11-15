//libraries
import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useSelector, useDispatch } from 'react-redux';
import { mapSelection } from '../state/actions/mapActions';
import { barSelection } from '../state/actions/barActions';
import { pieSelection } from '../state/actions/pieActions';
export default function Visualization() {
  //states
  const mapData = useSelector(state => state.map.data);
  const mapLayout = useSelector(state => state.map.layout);
  const barData = useSelector(state => state.bar.data);
  const barLayout = useSelector(state => state.bar.layout);
  const pieData = useSelector(state => state.pie.data);
  const pieLayout = useSelector(state => state.pie.layout);


  //default reder to map
  useEffect(() => {
    function fetchDSData() {
      axios
        .post(' https://hrf-d-api.herokuapp.com/ds_server/us_map')
        .then(resp => {
          setData(JSON.parse(resp.data));
        });
    }
    fetchDSData();
  }, []);


  useEffect(() => {
    dispatch(barSelection());
    dispatch(mapSelection());
    dispatch(pieSelection());
    // console.log('map select', mapData);
  }, []);

  //Todo: make map full width and height
  return (
    <div>
      <Plot data={mapData} layout={mapLayout} />
      <Plot data={barData} layout={barLayout} />
      <Plot data={pieData} layout={pieLayout} />

      <footer className="page-footer">
        <h1 style={{ fontSize: '15px' }}>
          © Copyright 2020. All rights reserved.
        </h1>
      </footer>
    </div>
  );
}
