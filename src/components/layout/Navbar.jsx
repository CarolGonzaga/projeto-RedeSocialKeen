import styled from "styled-components";
import Link from "next/link";

import H1 from "../typography/H1";
import Text from "../typography/Text";

import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

const StyledNavbar = styled.div`
  width: 100vw;
  max-width: 1000px;
  height: 30vh;

  background-color: ${(props) => props.theme.backgroundBody};
`;

const StyledNav = styled.div`
  background-image: url('/fundo5.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  width: 100%;
  max-width: 100vw;
  height: 20vh;
  max-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) {
    max-height: 250px;
  }
  
  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    max-height: 250px;
  }
`;

const StyledBar = styled.div`
  width: 100vw;
  height: 10vh;
  max-height: 50px;

  display: flex;
  justify-content: space-between;
  padding: 16px 30px;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) {
    width: 60vw;
    margin: auto;
  }

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    width: 60%;
    margin: auto;
  }
`
const StyledEndIcon = styled(ArrowRightEndOnRectangleIcon)`
  color: ${(props) => props.theme.black};
  width: 18px;
  height: 18px;
`;


function Navbar() {
  return (
    <StyledNavbar>
      <StyledNav>
        <H1>#Social Keen</H1>
      </StyledNav>
      <StyledBar>
        <Text>Olá, @usuario!</Text>
        <Link href='/login'>
          <StyledEndIcon />
        </Link>
      </StyledBar>
    </StyledNavbar>
  );
}

export default Navbar;
