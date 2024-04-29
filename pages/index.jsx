import styled from "styled-components";

import Post from "../src/components/cards/Post";
import Navbar from "../src/components/layout/Navbar";
import PostContainer from "../src/components/layout/PostContainer";
import CreatePost from "../src/components/cards/CreatePost";
import H3 from "../src/components/typography/H3";
import Link from "next/link";

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
  overflow-y: auto;
`;

const RefreshPosts = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

function HomePage() {
  return (
    <Body>
      <Navbar />
      <Content>
        <PostContainer>
          <CreatePost />
          <H3>Últimas postagens</H3>
          <RefreshPosts>
            <Link href="#">Carregar novas postagens</Link>
          </RefreshPosts>
          <Posts>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Posts>
        </PostContainer>
      </Content>
    </Body>
  );
}

export default HomePage;
