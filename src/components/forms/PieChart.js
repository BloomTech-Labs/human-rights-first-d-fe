// libraries
import React from 'react';
import { Select, Form, Button } from 'antd';

// helpers
import states from '../../helpers/states';
import { SELECT_STATE } from '../../state/reducers/graph_reducers';
import { useDispatch } from 'react-redux';

// collects a US state abb and send it ot visualizaiton for rendering a submit
export default function PieChart() {
  const { Option } = Select;

  // react hooks
  const dispatch = useDispatch();

  // form options and functions
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  //state_dropdown options and functions
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  function states_dropdown() {
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
        {/* select a state */}
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
            onChange={onChange}
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
