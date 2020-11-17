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
    const { tabPosition } = this.state;
    return (
      <>
        {/* <Space style={{ marginBottom: 24 }}>
          <Radio.Group value={tabPosition} onChange={this.changeTabPosition}>
            <Radio.Button value="top">Map</Radio.Button>
            <Radio.Button value="top">Pie Chart</Radio.Button>
            <Radio.Button value="top">Bar Chart</Radio.Button>
          </Radio.Group>
        </Space> */}
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
