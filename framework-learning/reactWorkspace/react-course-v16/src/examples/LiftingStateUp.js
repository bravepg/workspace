/**
 * 场景:
 * 在某些时候，我们可能有这样的需求：需要数据的变化在多个组件上反映出来
 * 我们可以利用状态提升的概念
 */
import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    } 
    return <p>The water would not boil.</p>;
}

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { temperature: '' };
//     }

//     handleChange = (e) => {
//         this.setState({ temperature: e.target.value });
//     }

//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in Celsius:</legend>
//                 <input value={this.state.temperature} onChange={this.handleChange} />
//                 <BoilingVerdict
//                     celsius={parseFloat(temperature)} />
//             </fieldset>
//         );
//     }
// }

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

/**
 * 现在，出现了一个新的需求
 * 需要再增加一个输入框，而且跟上一个输入框的数据需要同步
 * 现在的想法是进行状态提升，在 vue 中更多出现的是双向绑定
 */
class TemperatureInput extends React.Component {

    handleChange = (e) => {
        // Before: this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // 之前是 this.state.temperature
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', scale: 'c' };
    }
    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature});
    }
    
    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
    }
    
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator;