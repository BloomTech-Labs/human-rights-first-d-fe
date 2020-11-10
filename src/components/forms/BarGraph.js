import React from 'react';
import { Radio, Button, Card } from 'antd';
import { DatePicker, Space, Input, Select, Checkbox } from 'antd';
import moment from 'moment';
// import './globalstyle.css';

const options = [
  { label: 'Map', value: 'Map' },
  { label: 'Bar', value: 'Bar' },
  { label: 'Pie Chart ', value: 'Pie Chart' },
  { label: 'Other Chart', value: 'Other Chart' },
];
const incidents = ['Most Incident', 'Least Incident'];
const { RangePicker } = DatePicker;

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

class BarGraph extends React.Component {
  state = {
    ...defaultFilterState,
  };

  // FORM ACTIONS
  handleChange = value => {
    this.setState({
      stateValue: value,
    });
    console.log(`selected ${value}`);
  };
  onRadioChange = e => {
    console.log('radio checked', e.target.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleDemographic = () => {
    this.setState(prev => ({
      ...prev,
      showDemographic: !prev.showDemographic,
    }));
  };

  addDemographic = value => {
    this.setState(prev => ({
      ...prev,
      demographic: value,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="main">
        <Card title="" style={{ width: 500 }}>
          <div className="dates">
            <div>
              <Space direction="horizontal" size={12}>
                <RangePicker
                  defaultValue={[
                    moment(this.state.start_date),
                    moment(this.state.end_date),
                  ]}
                  onChange={date => {
                    if (date.length === 2) {
                      const start_date = moment(date[0]).format('yyyy-M-D');
                      const end_date = moment(date[1]).format('yyyy-M-D');
                      this.setState({
                        start_date,
                        end_date,
                      });
                    }
                  }}
                />
                <RangePicker
                  defaultValue={[
                    moment(this.state.start_date),
                    moment(this.state.end_date),
                  ]}
                  picker="year"
                  onChange={date => {
                    if (date.length === 2) {
                      const start_year = moment(date[0]).format('yyyy');
                      const end_year = moment(date[1]).format('yyyy');
                      this.setState({
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
              defaultValue={[`${this.state.stateValue}`]}
              value={this.state.stateValue}
              onChange={this.handleChange}
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
              value={this.state.city}
              placeholder="City"
              onChange={event => {
                this.setState({
                  city: event.target.value,
                });
              }}
            />
            <Input
              style={{ width: '25%', alignSelf: 'flex-start' }}
              placeholder="Zipcode"
              value={this.state.zipcode}
              onChange={event => {
                this.setState({
                  zipcode: event.target.value,
                });
              }}
            />
          </div>
          {/* <Button type="primary" shape="round" size="large">
            Add More
          </Button> */}
          <Demographic
            showDemographic={this.state.showDemographic}
            setState={this.handleDemographic}
            demographic={this.state.demographic}
            addDemographic={this.addDemographic}
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
              onClick={this.onSumbit}
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
              onClick={() => this.setState(defaultFilterState)}
            >
              Reset Filters
            </Button>
          </div>
        </Card>
      </div>
    );
  }
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

export default BarGraph;
