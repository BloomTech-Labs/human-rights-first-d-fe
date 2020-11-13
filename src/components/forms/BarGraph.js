import React, { useState, useEffect } from 'react';
import { Radio, DatePicker, Button, Form, Input } from 'antd';
import moment from 'moment';

import Plot from 'react-plotly.js';
import { barSelection } from '../../state/reducers/barActions';

import { useSelector, useDispatch } from 'react-redux';

const { RangePicker } = DatePicker;

const defaultFilterState = {
  start_date: '2013-01-01',
  end_date: '2019-01-01',
  group_by: { National: true },
  asc: true,
};
const ascOptions = [
  {
    label: 'Most Reports',
    value: true,
  },
  {
    label: 'Least Reports',
    value: false,
  },
];
const focusOn = [
  {
    label: 'State',
    value: true,
  },
  {
    label: 'National',
    value: true,
  },
  {
    label: 'Zipcode',
    value: true,
  },
  {
    label: 'City',
    value: true,
  },
];

export default function BarGraph() {
  //react hooks
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultFilterState);

  const barData = useSelector(state => state.bar.data);

  const barLayout = useSelector(state => state.bar.layout);

  // helper functions
  useEffect(() => {
    dispatch(barSelection());
  }, []);

  // FORM ACTIONS

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(state);
  };
  // const onRadioChange = e => {
  //   console.log('radio checked', e.target.value);
  //   const { name, value } = e.target;
  //   setState({
  //     [name]: value,
  //   });
  // };
  const handleDemographic = () => {
    setState(prev => ({
      ...prev,
      showDemographic: !prev.showDemographic,
    }));
  };

  const addDemographic = value => {
    setState(prev => ({
      ...prev,
      demographic: value,
    }));
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Plot data={barData.data} layout={barLayout.layout} />

      {/* Start date and End Date */}
      <RangePicker
        defaultValue={[moment(state.start_date), moment(state.end_date)]}
        onChange={date => {
          if (date.length === 2) {
            const start_date = moment(date[0]).format('yyyy-M-D');
            const end_date = moment(date[1]).format('yyyy-M-D');
            setState({
              start_date,
              end_date,
            });
          }
        }}
        name="date"
      />

      {/*  Ascending true or false */}
      {/*  Title: Order By */}
      {/*  Most reports and Least reports  */}

      <Radio.Group
        options={ascOptions}
        onChange={onChange}
        name="asc"
        optionType="button"
        buttonStyle="solid"
      />

      {/* Group By
        - state
        - national
        - zipcode
        - city
      */}
      <Radio.Group
        options={focusOn}
        onChange={onChange}
        name="group_by"
        optionType="button"
        buttonStyle="solid"
      />
      {/* Title: Focus on   */}

      <Input placeholder=" Select State" />
      <Input placeholder="City" />
      <Input placeholder="Zipcode" />

      {/*  Submit and the reset buttons */}
      <Button
        // onClick={onFinish}
        style={{ marginTop: '20px' }}
        type="primary"
        shape="round"
        size="small"
      >
        Submit
      </Button>
      <Button
        type="primary"
        shape="round"
        size="small"
        style={{ margin: 0 }}
        onClick={() => setState(defaultFilterState)}
      >
        Reset Filters
      </Button>
    </Form>
  );
}

// const Demographic = ({
//   showDemographic,
//   setState,
//   demographic,
//   addDemographic,
// }) => {
//   return (
//     <div style={{ paddingLeft: 0, marginBottom: 20, marginTop: 20 }}>
//       <div style={{ marginBottom: 10 }}>
//         <Checkbox onChange={setState}>Demographic</Checkbox>
//       </div>
//       {showDemographic && (
//         <Select
//           mode="multiple"
//           style={{ width: '100%' }}
//           placeholder="select one"
//           defaultValue={demographic}
//           onChange={addDemographic}
//           optionLabelProp="label"
//         >
//           <Select.Option value="black" label="Black">
//             <div className="demo-option-label-item">Black</div>
//           </Select.Option>
//           <Select.Option value="white" label="White">
//             <div className="demo-option-label-item">White</div>
//           </Select.Option>
//           <Select.Option value="asian" label="Asian">
//             <div className="demo-option-label-item">Asian</div>
//           </Select.Option>
//           <Select.Option value="pacific islander" label="Pacific Islander">
//             <div className="demo-option-label-item">Pacific Islander</div>
//           </Select.Option>

//           <Select.Option value="other" label="Other">
//             <div className="demo-option-label-item">Other</div>
//           </Select.Option>
//         </Select>
//       )}
//     </div>
//   );
// }
