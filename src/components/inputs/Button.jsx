import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  width: ${(props) => (props.width ? props.width : '200px')};
  height: ${(props) => (props.height ? props.height : '40px')};
  border-radius: 30px;
  border: none;
  color: ${props => props.theme.white};
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.primaryHover};
    font-size: 13px;
  }

  :disabled {
    background-color: ${props => props.theme.backgroundBody};
    cursor: default;
  }

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    width: ${(props) => (props.width ? props.width : '300px')};
  }
`

export default Button