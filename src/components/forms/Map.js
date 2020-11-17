import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker, Space, Button, Card, message, Select } from 'antd';
import states from '../../helpers/states';

import { mapSelection } from '../../state/actions/mapActions';

// helpers
const { Option } = Select;

const { RangePicker } = DatePicker;

// Button onChange info

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

export default function Map() {
  const dispatch = useDispatch();
  const mapData = useSelector(state => state.map.data);
  // const mapLayout = useSelector(state => state.map.layout);

  // helper function
  useEffect(() => {
    dispatch(mapSelection());
  }, []);

  return (
    <div className="main">
      <Card title="" style={{ width: 500 }}>
        <div className="dates">
          <div>
            <Space direction="horizontal" size={12}>
              <RangePicker size="large" />
            </Space>
          </div>
        </div>
        <div className="input-form">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder=" Select State"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {states.map(function(a_state) {
              return (
                <Option value={a_state.value} key={a_state.value}>
                  {a_state.label}
                </Option>
              );
            })}
          </Select>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select demographic"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Black">Black</Option>
            <Option value="White">White</Option>
            <Option value="Hispanic">Hispanic</Option>
            <Option value="Pacific Islander">Pacific Islander</Option>
            <Option value="Asian">Asian</Option>
            <Option value="Native American">Native American</Option>
            <Option value="Unknown Race">Unknown Race</Option>
          </Select>
        </div>

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
