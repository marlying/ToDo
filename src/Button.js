import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerButton = styled.div`
	background-color: ${(props) => props.backgroundColor};
	border-radius: 4px;
	padding: 0.5em;
	color: white;
	font-size: 16px;
	display: inline-block;
	cursor: pointer;
	&:hover {
		box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.3);
	}
`;

class Button extends React.Component {

	static propTypes = {
		'label': PropTypes.string.isRequired,
		'onClick': PropTypes.func,
		'bgColor': PropTypes.string,
	};

	static defaultProps = {
		'onClick': () => {},
		'bgColor': 'black',
	}

	render() {

		return (
			<ContainerButton backgroundColor={this.props.bgColor} onClick={this.props.onClick}> {this.props.label} </ContainerButton>
		);
	}
}


export default Button;