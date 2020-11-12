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

  //helper functions
  // use the form inputs to make a call to the backend
  //save resp into the global props
  const onFinish = async values => {
    // GET Plotly data from the backend server
    let pie_chart = await axios.post(
      'https://hrf-d-api.herokuapp.com/ds_server/us_map',
      {
        user_input: values.select_state,
      }
    );

    //onwrap pie_chart resp data and parse the json into js
    pie_chart = JSON.parse(pie_chart.data);

    // save data on global props
    dispatch({ type: ADD_PIE_CHART, payload: pie_chart });
  };

  return (
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
