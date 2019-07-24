import React from 'react';
// import { Steps, Icon, DatePicker } from 'antd';
import { DatePicker } from 'antd';

// const Step = Steps.Step;
const { RangePicker } = DatePicker;

// class Demo extends React.Component {
//   render() {
//     return (
//       <Steps size="small" labelPlacement="vertical" current={0}>
//         <Step title="Finished" icon={<Icon type="edit" />} />
//         <Step title="Waiting" status="error" />
//       </Steps>
//     )
//   }
// }

class ControlledRangePicker extends React.Component {
  state = {
    mode: ['month', 'month'],
    value: [],
  };
  handlePanelChange = (value, mode) => {
    this.setState({
      value,
      mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]],
    });
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, mode } = this.state;
    return (
      <RangePicker
        placeholder={['Start month', 'End month']}
        format="YYYY-MM"
        value={value}
        mode={mode}
        // onChange={this.handleChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}

export default ControlledRangePicker;