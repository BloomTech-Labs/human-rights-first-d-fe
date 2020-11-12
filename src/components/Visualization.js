//libraries
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import { useSelector } from 'react-redux';

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
};

export default function Visualization() {
  //states
  const props = useSelector(state => state);
  console.log(props);
  const [data, setData] = useState(initialState);

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

  // if one of the gloval pros for a chart changes, render that prop
  useEffect(() => {
    setData(props.pie_chart);
  }, [props.pie_chart]);

  //Todo: make map full width and height
  return <Plot data={data.data} layout={data.layout} />;
}
