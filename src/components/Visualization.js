//libraries
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
};

function Visualization() {
  const [data, setData] = useState(initialState);
  const [figure, setFigure] = useState(null);

  useEffect(() => {
    function fetchDSData() {
      axios
        .post(' https://hrf-d-api.herokuapp.com/ds_server/us_map')
        .then(resp => {
          setData(JSON.parse(resp.data.unemployment_rate));
          console.log(JSON.stringify(resp.data.unemployment_rate));
        });
    }
    fetchDSData();
  }, []);
  //Todo: make map full width and height
  return <Plot data={data.data} layout={data.layout} />;
}

export default Visualization;
