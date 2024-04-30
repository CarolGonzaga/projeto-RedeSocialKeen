import styled from "styled-components";

const H3 = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.black};

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 26px;
  }

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) and 
  (min-width: 760px) {
    font-size: 26px;
  }
`;

export default H3;
