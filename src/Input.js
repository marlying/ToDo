import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerInput = styled.input`
	border: 0;
	border-bottom: 1px solid black;
	border-color: #b2757d;
	border-width: 2px;
	height: 35px;
	font-size: 1em;
	outline: 0;
	box-sizing: border-box;
	background-color: transparent;
	color: #b2757d;
`;

class Input extends React.Component {

	static propTypes = {
		'mudou': PropTypes.func,
		'value': PropTypes.string,
		'placeholder': PropTypes.string,
	}

	constructor(){
		super();
		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(event) {
		this.props.mudou(event.target.value);
	}

	render(){
		return(<ContainerInput placeholder={this.props.placeholder} value={this.props.value} type="text" onChange={this._handleChange}/>);
	}
}

export default Input;