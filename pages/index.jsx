import styled from "styled-components";

import Post from "../src/components/cards/Post";
import Navbar from "../src/components/layout/Navbar";
import PostContainer from "../src/components/layout/PostContainer";
import CreatePost from "../src/components/cards/CreatePost";
import H3 from "../src/components/typography/H3";
import Link from "next/link";

const Body = styled.div`
  background-color: ${(props) => props.theme.white};
  overflow-y: auto;
`

const Content = styled.div`
  width: 100vw;
  max-width: 1000px;
  height: 100%;
  overflow-y: auto;

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    background-size: 25% 15%;
  }
`;

const RefreshPosts = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    margin-bottom: 30px;
  }
`

const StyledH3 = styled(H3)`
  margin: 30px 0;

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    margin: 40px 0;
  }
`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    gap: 25px;
  }
`

function HomePage() {
  return (
    <Body>
      <Navbar />
      <Content>
        <PostContainer>
          <CreatePost />
          <StyledH3>Últimas postagens:</StyledH3>
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
