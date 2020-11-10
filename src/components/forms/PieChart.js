// libraries
import React from 'react';
import { Select, Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';

// helpers
import states from '../../helpers/states';

export default function PieChart() {
  const { Option } = Select;

  //state_dropdown options and functions
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  function states_dropdown() {
    return states.map(function(state) {
      return <Option value={state.value}>{state.label}</Option>;
    });
  }

  // form options and functions
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = values => {
    console.log('Success:', values);
    // values.select_state;
    // axios.get();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {states_dropdown()}
          </Select>
        </Form.Item>
        {/* submit form*/}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {/* button not resetting when lick*/}
          {/* <Button htmlType="button" onClick={onReset}>
            Reset
          </Button> */}
        </Form.Item>
      </Form>
    </div>
  );
}
