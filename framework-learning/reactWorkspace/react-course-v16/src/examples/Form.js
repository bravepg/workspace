import React from 'react';
/**
 * 1. 如果 form 元素只需要最后一次获取所有值，那么即可利用 ControlledForm，也可利用 UnControlledForm
 * 2. file 元素只能使用 UnControlledForm
 * 3. 如果需要对输入的元素进行格式化(比如大小写)，使用 ControlledForm
 * 4. 获取元素值☝应该使用的属性
 *      input textarea select: e.target.value    =>  默认值 defaultValue
 *      radio checkbox:        e.target.checked  =>  默认值 defaultChecked
 */

// class ControlledForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         };
//     }

//     handleChange = (event) => {
//         this.setState({
//             // 对输入的元素进行格式化
//             value: event.target.value.toUpperCase()
//         });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange}  />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

class UnControlledForm extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }
    handleSubmit = (event) => {
        console.log(event.target.name);
        event.preventDefault();
        console.log(this.fileInput)
        console.log(this.fileInput.current.files[0].name)
    }

    render() {
        return (
            <form name="form" onSubmit={this.handleSubmit}>
                <label>
                Upload file:
                    <input type="file" ref={this.fileInput}  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default UnControlledForm;