import styled from "styled-components";
import Link from "next/link";

import H1 from "../typography/H1";
import Text from "../typography/Text";

import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import H4 from "../typography/H4";

const StyledNavbar = styled.div`
  width: 100vw;
  max-width: 1000px;
`;

const StyledNav = styled.div`
  background-image: url("/fundo3.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: 100%;
  max-width: 100vw;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    background-image: url("/fundo2.png");
    height: 150px;
  }

  @media (max-width: 320px) {
    height: 70px;
  }

`;

const StyledH1 = styled(H1)`
  font-size: 36px;
  margin-top: 0px;
  line-height: 50px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 320px) {
    font-size: 30px;
  }

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    font-size: 50px;
  }

`

const StyledText = styled(Text)`
  font-weight: bold;
`

const StyledBar = styled.div`
  width: 100vw;
  height: 50px;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    width: 60%;
    max-width: 520px;
    margin: 0 auto;
    padding: 0;
    height: 73px;
  }
`;
const StyledEndIcon = styled(ArrowRightEndOnRectangleIcon)`
  color: ${(props) => props.theme.black};
  width: 18px;
  height: 18px;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledNav>
        <StyledH1>#Social Keen</StyledH1>
      </StyledNav>
      <StyledBar>
        <StyledText>Olá, @usuario!</StyledText>
        <Link href="/login">
          <StyledEndIcon />
        </Link>
      </StyledBar>
    </StyledNavbar>
  );
}

export default Navbar;
