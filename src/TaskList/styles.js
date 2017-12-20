import styled from 'styled-components';

export const Container = styled.div`
	min-width: 400px;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const ContainerMargin = styled.div`
	margin-left: ${(props) => props.left ? props.left : '0'};
	margin-right: ${(props) => props.right ? props.right : '0'};
	margin-bottom: ${(props) => props.bottom ? props.bottom : '0'};
	margin-top: ${(props) => props.top ? props.top : '0'};
	display: inline-block;
`;
