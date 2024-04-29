import styled from "styled-components";

const H2 = styled.h2`
  font-size: 26px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 36px;
  }

  @media (max-width: 320px) {
    font-size: 23px;
  }
`

export default H2