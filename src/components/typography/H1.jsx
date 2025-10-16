import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 38px;
  font-weight: 500;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.primary};
  line-height: 58px;
  height: 50px;
  margin-top: 50px;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 70px;
    height: 60px;
    line-height: 40px;
    margin-top: 0;
  }

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) and
  (min-width: 760px) {
    font-size: 60px;
    height: 60px;
  }
`

export default H1