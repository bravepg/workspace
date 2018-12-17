import React from 'react';
import FruitCard from './FruitCard';
import VegetablesList from './VegetablesList';

class App extends React.Component {
    state = {
        iptValue: '',
        vegetables: []
    };

    componentDidMount() {
        console.log('**App ComponentDidMount**');
        // 模拟请求
        window.setTimeout(() => {
            console.log('\n模拟请求 => vegetables');
            this.setState({
                vegetables: ['Potato', 'Tomato', 'Eggplant', 'Onion', 'Radish']
            });
        }, 2000);
    }

    handleFruitCardHover = () => {
        console.log('Hover =>');
    }

    handleIptChange = (e) => {
        this.setState({ iptValue: e.target.value });
    }

    renderVegetablesList1() {
        const { vegetables } = this.state;
        console.log(`渲染 => Vegetables List 1.`);
        return (
            <div>
                <p>Vegetables List 1:</p>
                {
                    vegetables.length
                    ? (<ul>{ vegetables.map((item) => { return (<li key={item}>{item}</li>); }) }</ul>)
                    : (<p>Loading Vegetables List 1...</p>)
                }
            </div>
        );
    }
    /**
     * 1.对于 Banana Card，由于使用匿名函数传递 onHover prop，每次 App 重新 render() 时都会创建一个新的函数，导致
     * PureComponent FruitCard 的 shouldComponentUpdate 优化失效。
     * 
     * 2.将整个页面的渲染适当地拆分成子 PureComponent 有助于提高渲染性能。比如，表单和复杂列表在同一个 render() 中，表单域的输入字段改变会
     * 频繁地触发 setState() 从而导致 App 重新 render()。而用于渲染复杂列表的数据其实并没有变化，但由于重新触发 render()，列表还是会重
     * 新渲染。这种情况下，将列表独立成为 App 的子 PureComponent，可以有效避免表单域变化时列表的重新渲染，大大提高了渲染性能。
     */
    render() {
        const { iptValue, vegetables } = this.state;
        console.log('**App Render**');
        return (
            <div>
                <FruitCard title="Apple Card" onHover={this.handleFruitCardHover} />
                <FruitCard title="Banana Card" onHover={() => { console.log('Hover =>') }} />
                <div className="mt20">
                    <input type="text" value={iptValue} onChange={this.handleIptChange} />
                </div>
                {this.renderVegetablesList1()}
                <VegetablesList vegetables={vegetables} />
            </div>
        );
    }
}

export default App;