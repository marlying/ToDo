import styled from 'styled-components';

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerMargin = styled.div`
  margin-left: ${(props) => props.left ? props.left : '0'};
  margin-right: ${(props) => props.right ? props.right : '0'};
  margin-bottom: ${(props) => props.bottom ? props.bottom : '0'};
  margin-top: ${(props) => props.top ? props.top : '0'};
  display: inline-block;
`;

export const Container = styled.div`
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #FFFFFF;
  padding: 1em;
  padding-top: 0.25em;
  display: inline-block;
  width: 400px;
  box-sizing: border-box;
`;
