import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  width: 250px;
  height: 45px;
  border-radius: 30px;
  border: none;
  color: ${props => props.theme.white};
  font-size: 18px;

  :hover {
    background-color: ${props => props.theme.primaryHover};
  }

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    width: 300px;
  }
`

export default Button