import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";

import H1 from "../typography/H1";
import Text from "../typography/Text";

import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

const StyledNavbar = styled.div`
  width: 100vw;
  max-width: 1000px;
  background-color: ${props => props.theme.secundary};
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

  @media (min-width: 650px) and  
  (max-width: ${(props) => props.theme.HEIGHT_XL}) {
    background-image: url("/fundo2.png");
    background-size: cover;
  }

  @media (min-width: 500px) and  
  (max-width: 650px) {
    background-image: url("/fundo3.png");
    background-size: cover;
  }

  @media (max-width: 320px) {
    height: 70px;
  }

`;

const StyledBarContainer = styled.div`
  background-color: ${props => props.theme.white};
  width: 100%;
  height: 50px;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    height: 73px;
  }
`;

const StyledBar = styled.div`
  width: 85vw;
  max-width: 520px;
  height: 100%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    padding: 0 10px;
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
`;

const StyledHash = styled.span`
  color: #fff;
`

const StyledText = styled(Text)`
  font-weight: bold;
`;

const StyledLogout = styled.a`
  cursor: pointer;
`

const StyledEndIcon = styled(ArrowRightEndOnRectangleIcon)`
  color: ${(props) => props.theme.black};
  width: 18px;
  height: 18px;
`;

function Navbar({ username }) {

  const router = useRouter()

  const handleLogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
    router.push('/')
  }

  return (
    <StyledNavbar>
      <StyledNav>
        <StyledH1><StyledHash>#</StyledHash>Social Keen</StyledH1>
      </StyledNav>
      <StyledBarContainer>
        <StyledBar>
          <StyledText>Olá, {username}!</StyledText>
          <StyledLogout onClick={handleLogout}>
            <StyledEndIcon />
          </StyledLogout>
        </StyledBar>
      </StyledBarContainer>
    </StyledNavbar>
  );
}

export default Navbar;