import styled from "styled-components";
import Link from "next/link";

import H1 from "../typography/H1";
import Text from "../typography/Text";

import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

const StyledNavbar = styled.div`
  width: 100vw;
  max-width: 1000px;
  height: 150px;

  background-color: ${(props) => props.theme.backgroundIndex};

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) {
    height: 223px;
  }

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    height: 223px;
  }
`;

const StyledNav = styled.div`
  background-image: url("/fundo5.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: 100%;
  max-width: 100vw;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    background-image: url("/fundo4.png");
    height: 150px;
  }
`;

const StyledBar = styled.div`
  width: 100vw;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

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
        <H1 marginTop="0">#Social Keen</H1>
      </StyledNav>
      <StyledBar>
        <Text>Olá, @usuario!</Text>
        <Link href="/login">
          <StyledEndIcon />
        </Link>
      </StyledBar>
    </StyledNavbar>
  );
}

export default Navbar;
