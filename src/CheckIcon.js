import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerCheckIcon = styled.svg`
	width: ${(props) => props.width};
	fill: ${(props) => props.fill};
`;

class CheckIcon extends React.Component {
	
	static propTypes = {
		'width': PropTypes.string.isRequired,
		'fill': PropTypes.string.isRequired,
	}

	render() {
		return (
    	<ContainerCheckIcon width={this.props.width} fill={this.props.fill} viewBox="0 0 48 48">
      	<path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/>
    	</ContainerCheckIcon>
		);
	}

}

export default CheckIcon;