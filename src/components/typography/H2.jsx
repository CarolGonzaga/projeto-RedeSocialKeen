import styled from "styled-components";

const H2 = styled.h2`
  font-size: 24px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) or
  (min-height: ${(props) => props.theme.HEIGHT_XL}) {
    font-size: 36px;
  }

  @media (max-width: 320px) {
    font-size: 22px;
  }
`

export default H2