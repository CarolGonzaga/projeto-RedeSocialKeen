import styled from "styled-components";

const H3 = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${(props) => props.theme.black};
  margin: 30px 0;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 50px;
  }

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) and 
  (min-width: 760px) {
    font-size: 40px;
  }
`;

export default H3;
