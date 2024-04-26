import styled from "styled-components";

const H4 = styled.h4`
  text-align: center;
  font-weight: 275;
  font-size: 14px;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 18px;
    font-weight: 400;
  }

  @media (max-width: 330px) {
    font-size: 12px;
    font-weight: 400;
  }
`

export default H4