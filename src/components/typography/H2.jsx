import styled from "styled-components";

const H2 = styled.h2`
  font-size: 30px;
  padding: 0 5px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 36px;
  }
`

export default H2