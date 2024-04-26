import styled from "styled-components";

const Text = styled.p`
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.black};

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    font-size: 14px;
  }
`

export default Text