import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { DatePicker, Space, Input, Select, Checkbox } from 'antd';
import moment from 'moment';
import axios from 'axios';

import states from '../../helpers/states';
import { ADD_BAR_GRAPH } from '../../state/reducers/graph_reducers';
import { useDispatch } from 'react-redux';

// import './globalstyle.css';
const DS_SERVER_API = 'https://labs27-d-hrf-api.herokuapp.com';

const { RangePicker } = DatePicker;

const defaultFilterState = {
  //   mapValue: 'Map',
  //   incidentValue: 'Most Incident',
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

export default function BarGraph() {
  //react hooks
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultFilterState);

  console.log(state);

  // FORM ACTIONS
  const handleChange = value => {
    setState({
      stateValue: value,
    });
    console.log(`selected ${value}`);
  };
  const onRadioChange = e => {
    console.log('radio checked', e.target.value);
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };
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

  const onSubmit = async values => {
    // get plotly data from the backedn server
    let bar_graph = await axios.post(
      'https://hrf-d-api.herokuapp.com/ds_server/us_map',
      { user_input: values.select_state }
    );

    dispatch({ type: ADD_BAR_GRAPH, payload: bar_graph });

    //   const { start_date, end_date } = state;
    //   const body = {
    //     start_date,
    //     end_date,
    //     sort_by: 'Demographic',
    //   };
    //   try {
    //     const { data } = await axios.post(
    //       `${DS_SERVER_API}/ds_server/us_bar`,
    //       body
    //     );
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  // const { value } = state;
  return (
    <div className="main">
      <Card title="" style={{ width: 500 }}>
        <div className="dates">
          <div>
            <Space direction="horizontal" size={12}>
              <RangePicker
                defaultValue={[
                  moment(state.start_date),
                  moment(state.end_date),
                ]}
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
              />
              <RangePicker
                defaultValue={[
                  moment(state.start_date),
                  moment(state.end_date),
                ]}
                picker="year"
                onChange={date => {
                  if (date.length === 2) {
                    const start_year = moment(date[0]).format('yyyy');
                    const end_year = moment(date[1]).format('yyyy');
                    setState({
                      start_year,
                      end_year,
                    });
                  }
                }}
              />
            </Space>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            aligItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
          }}
        >
          <Select
            style={{ width: '15%', alignSelf: 'flex-start' }}
            defaultValue={[`${state.stateValue}`]}
            value={state.stateValue}
            onChange={handleChange}
            optionLabelProp="label"
          >
            {states.map(state => (
              <Select.Option
                key={state.label}
                value={state.value}
                label={`${state.label}`}
              >
                <div className="demo-option-label-item">{state.value}</div>
              </Select.Option>
            ))}
          </Select>
          <Input
            style={{
              width: '25%',
              alignSelf: 'flex-start',
              margin: '0 10px',
            }}
            value={state.city}
            placeholder="City"
            onChange={event => {
              setState({
                city: event.target.value,
              });
            }}
          />
          <Input
            style={{ width: '25%', alignSelf: 'flex-start' }}
            placeholder="Zipcode"
            value={state.zipcode}
            onChange={event => {
              setState({
                zipcode: event.target.value,
              });
            }}
          />
        </div>
        {/* <Button type="primary" shape="round" size="large">
            Add More
          </Button> */}
        <Demographic
          showDemographic={state.showDemographic}
          setState={handleDemographic}
          demographic={state.demographic}
          addDemographic={addDemographic}
        />
        <div
          style={{
            textAlign: 'left',
            //   paddingLeft: 20,
            width: '45%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            onClick={onSubmit}
            style={{ margin: 0 }}
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
        </div>
      </Card>
    </div>
  );
}

const Demographic = ({
  showDemographic,
  setState,
  demographic,
  addDemographic,
}) => {
  return (
    <div style={{ paddingLeft: 0, marginBottom: 20, marginTop: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <Checkbox onChange={setState}>Demographic</Checkbox>
      </div>
      {showDemographic && (
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="select one"
          defaultValue={demographic}
          onChange={addDemographic}
          optionLabelProp="label"
        >
          <Select.Option value="black" label="Black">
            <div className="demo-option-label-item">Black</div>
          </Select.Option>
          <Select.Option value="white" label="White">
            <div className="demo-option-label-item">White</div>
          </Select.Option>
          <Select.Option value="asian" label="Asian">
            <div className="demo-option-label-item">Asian</div>
          </Select.Option>
          <Select.Option value="pacific islander" label="Pacific Islander">
            <div className="demo-option-label-item">Pacific Islander</div>
          </Select.Option>

          <Select.Option value="other" label="Other">
            <div className="demo-option-label-item">Other</div>
          </Select.Option>
        </Select>
      )}
    </div>
  );
};
