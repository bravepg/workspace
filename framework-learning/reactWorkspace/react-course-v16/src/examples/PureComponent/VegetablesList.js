import React from 'react';

// 这里当然推荐使用无状态组件，仅为了演示 PureComponent
export default class VegetablesList extends React.PureComponent {
    render() {
        const { vegetables } = this.props;
        console.log(`渲染 => Vegetables List 2.`);
        return (
        <div>
            <p>Vegetables List 2:</p>
            {
            vegetables.length
                ? (<ul>{ vegetables.map((item) => { return (<li key={item}>{item}</li>); }) }</ul>)
                : (<p>Loading Vegetables List 2...</p>)
            }
        </div>
        );
    }
}