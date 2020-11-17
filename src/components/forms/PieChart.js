// libraries
import React from 'react';
import { Select, Form, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// helpers
import states from '../../helpers/states';
import { ADD_PIE_CHART } from '../../reducers/graph_reducer';

const { Option } = Select;

// collect a US state abbriviation and send it to Visualization for rendering on submit
export default function PieChart() {
  // redux hooks - save state abbreviation on the global prop
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);
  // form options and functions
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
    >
      <Form.Item
        name="select_state"
        label="Select a state"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a state"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {// Make an array of options base of the different states
          states.map(function(a_state) {
            return (
              <Option value={a_state.value} key={a_state.value}>
                {a_state.label}
              </Option>
            );
          })}
          ;
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
