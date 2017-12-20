import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerText = styled.p`
	color: rgba(0, 0, 0, 0.7);

`;

class Text extends React.Component {
	static propTypes = {
		'label': PropTypes.string.isRequired,
	}

	render() {
		return (
			<ContainerText> {this.props.label} </ContainerText>
		);
	}
}

export default Text;
