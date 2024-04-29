import styled from "styled-components";

import Box from "../src/components/cards/Box";
import Navbar from "../src/components/layout/Navbar";
import PostContainer from "../src/components/layout/PostContainer";
import CreatePost from "../src/components/cards/CreatePost";

const Body = styled.div`
  background-color: ${(props) => props.theme.backgroundIndex};
`

const Content = styled.div`
  background-image: url("/fundo3.png");
  background-repeat: repeat;
  background-size: contain;

  width: 100vw;
  max-width: 1000px;
  height: 100%;
`;

function HomePage() {
  return (
    <Body>
      <Navbar />
      <Content>
        <PostContainer>
          <CreatePost />
        </PostContainer>
      </Content>
    </Body>
  );
}

export default HomePage;
