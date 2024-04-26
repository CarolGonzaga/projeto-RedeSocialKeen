import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Alfa Slab One";
  font-weight: 400;
  font-size: 38px;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.primary};
  line-height: 58px;
  height: 50px;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 50px;
  }

  @media (max-width: 330px) {
    font-size: 30px;
  }
`

export default H1