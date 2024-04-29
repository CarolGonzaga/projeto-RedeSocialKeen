import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Alfa Slab One";
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.primary};
  line-height: 58px;
  height: 50px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '60px')};

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 50px;
  }

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) and
  (min-width: 760px) {
    font-size: 40px;
  }
`

export default H1