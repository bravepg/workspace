import React, { Fragment } from "react";

class CustomTextInput extends React.Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
		this.focusTextInput = this.focusTextInput.bind(this);
	}

	focusTextInput() {
		console.log('domRef', this.textInput.current);
		this.textInput.current.focus();
	}

	render() {
		return (
			<Fragment>
				<input
					type="text"
					ref={this.textInput} // add a ref to a DOM Element
				/>

				<input
					type="button"
					value="Focus the text input"
					onClick={this.focusTextInput}
				/>
			</Fragment>
		);
	}
}

/**
 * 注意到代码中注释的部分
 * 回调函数也是可以使用的
 * 但是最好使用 createRef
 */
class AutoFocusTextInput extends React.Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
	}

	componentDidMount() {
		console.log(this.textInput.current)
		this.textInput.current.focusTextInput();
		// console.log(this.textInput)
		// this.textInput.focusTextInput();
	}

	render() {
		return (
			<CustomTextInput ref={this.textInput} /> // add a ref to a Class Component
			// <CustomTextInput ref={el => this.textInput = el} />
		);
	}
}

export default AutoFocusTextInput;