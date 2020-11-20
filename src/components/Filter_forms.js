// imports
import React from 'react';
import { Tabs } from 'antd';
import Map from './forms/Map';
import BarGraph from './forms/BarGraph';
import PieChart from './forms/PieChart';

const { TabPane } = Tabs;

class FilterForm extends React.Component {
  state = {
    tabPosition: 'left',
  };

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };

  render() {
    return (
      <>
        <Tabs tabPosition="top">
          <TabPane tab="Map" key="1">
            <Map />
          </TabPane>
          <TabPane tab="Bar Graph" key="2">
            <BarGraph />
          </TabPane>
          <TabPane tab="Pie Chart" key="3">
            <PieChart />
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default FilterForm;
