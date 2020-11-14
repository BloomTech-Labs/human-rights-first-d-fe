import React, { useState } from 'react';
// import OldMap from './OldMap';
// import Map from '../common/Map';
// import Graph from '../common/Graph';
import About from './not_use/common/About';
// import FiltersForm from './FilterForm';
import 'antd/dist/antd.css';
// import '../../styles/index.css';
import { Tabs, Button, Popover } from 'antd';
import Filter_forms from './Filter_forms';
const Loading = () => {
  const { TabPane } = Tabs;

  const openFilters = (
    <Popover
      placement="bottomRight"
      title={<span></span>}
      content={<Filter_forms />}
      trigger="click"
    >
      <Button type="link">Open Filters</Button>
    </Popover>
  );

  return (
    <div>
      <main>
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="large"
          tabBarExtraContent={openFilters}
        ></Tabs>
      </main>
    </div>
  );
};

export default Loading;
