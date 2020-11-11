// libraries
import React from 'react';
import { Select, Form, Button } from 'antd';
import { useDispatch } from 'react-redux';

// helpers
import states from '../../helpers/states';
import { SELECT_STATE } from '../../reducers/graph_reducer';

// collect a US state abbriviation and send it to Visualization for rendering on submit
export default function PieChart() {
  const { Option } = Select;

  // redux hooks - save state abbreviation on the global prop
  const dispatch = useDispatch();

  // form options and functions
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  //helper functions
  function states_dropdown() {
    // Make an array of options base of the different states
    return states.map(function(a_state) {
      return (
        <Option value={a_state.value} key={a_state.value}>
          {a_state.label}
        </Option>
      );
    });
  }

  const onFinish = values => {
    dispatch({ type: SELECT_STATE, payload: values.select_state });
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
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
            {states_dropdown()}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
