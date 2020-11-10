import React from 'react';
import { Radio, Button, Card, Menu } from 'antd';
import { DatePicker, Space, Input } from 'antd';
// import './globalstyle.css';

import { Dropdown, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const options = [{ label: 'Map', value: 'Map' }];
const { RangePicker } = DatePicker;

// Button onChange info

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const states = [
  { label: 'AL', value: 'AL' },
  { label: 'AK', value: 'AK' },
  { label: 'AZ', value: 'AZ' },
  { label: 'AR', value: 'AR' },
  { label: 'CA', value: 'CA' },
  { label: 'CO', value: 'CO' },
  { label: 'CT', value: 'CT' },
  { label: 'DE', value: 'DE' },
  { label: 'DC', value: 'DC' },
  { label: 'FL', value: 'FL' },
  { label: 'GA', value: 'GA' },
  { label: 'HI', value: 'HI' },
  { label: 'ID', value: 'ID' },
  { label: 'IL', value: 'IL' },
  { label: 'IN', value: 'IN' },
  { label: 'IA', value: 'IA' },
  { label: 'KS', value: 'KS' },
  { label: 'KY', value: 'KY' },
  { label: 'LA', value: 'LA' },
  { label: 'ME', value: 'ME' },
  { label: 'MD', value: 'MD' },
  { label: 'MA', value: 'MA' },
  { label: 'MI', value: 'MI' },
  { label: 'MN', value: 'MN' },
  { label: 'MS', value: 'MS' },
  { label: 'MO', value: 'MO' },
  { label: 'MT', value: 'MT' },
  { label: 'NE', value: 'NE' },
  { label: 'NV', value: 'NV' },
  { label: 'NH', value: 'NH' },
  { label: 'NJ', value: 'NJ' },
  { label: 'NM', value: 'NM' },
  { label: 'NY', value: 'NY' },
  { label: 'NC', value: 'NC' },
  { label: 'ND', value: 'ND' },
  { label: 'OH', value: 'OH' },
  { label: 'OK', value: 'OK' },
  { label: 'OR', value: 'OR' },
  { label: 'PA', value: 'PA' },
  { label: 'RI', value: 'RI' },
  { label: 'SC', value: 'SC' },
  { label: 'SD', value: 'SD' },
  { label: 'TN', value: 'TN' },
  { label: 'TX', value: 'TX' },
  { label: 'UT', value: 'UT' },
  { label: 'VT', value: 'VT' },
  { label: 'VA', value: 'VA' },
  { label: 'WA', value: 'WA' },
  { label: 'WV', value: 'WV' },
  { label: 'WI', value: 'WI' },
  { label: 'WY', value: 'WY' },
];

const defaultFilterState = {
  mapValue: 'Map',
  incidentValue: 'Most Incident',
  stateValue: '',
  city: '',
  zipcode: '',
  showDemographic: false,
  demographic: ['other'],
  start_date: '2013-01-01',
  end_date: '2019-01-01',
  start_year: '2020',
  end_year: '2020',
};

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Armed</Menu.Item>
    <Menu.Item key="2">UnArmed</Menu.Item>
  </Menu>
);

const gender = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Male</Menu.Item>
    <Menu.Item key="2">Female</Menu.Item>
    <Menu.Item key="3">Undetermined</Menu.Item>
  </Menu>
);

class Map extends React.Component {
  state = {
    ...defaultFilterState,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="main">
        <Card title="" style={{ width: 500 }}>
          <div className="dates">
            <div>
              <Space direction="horizontal" size={12}>
                <RangePicker size="large" />
                <RangePicker size="large" picker="year" />
              </Space>
            </div>
          </div>
          <div className="input-form">
            <Dropdown overlay={menu}>
              <Button type="primary" shape="round" size="large">
                Armed ?
                <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown overlay={gender}>
              <Button type="primary" shape="round" size="large">
                Gender
                <DownOutlined />
              </Button>
            </Dropdown>
            <Input size="large" placeholder=" Select State" />
          </div>
          <Button type="primary" shape="round" size="large">
            Add More
          </Button>
          <div style={{ textAlign: 'left', padding: '10px', margin: '10px' }}>
            <Button
              style={{ margin: '2px' }}
              type="primary"
              shape="round"
              size="large"
            >
              Submit
            </Button>
            <Button type="primary" shape="round" size="large">
              Reset Filters
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Map;
