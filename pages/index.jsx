import styled from "styled-components";
import { withIronSessionSsr } from "iron-session/next";
import axios from "axios";
import useSWR from "swr";

import { ironConfig } from "../lib/middlewares/ironSession";

import Post from "../src/components/cards/Post";
import Navbar from "../src/components/layout/Navbar";
import PostContainer from "../src/components/layout/PostContainer";
import CreatePost from "../src/components/cards/CreatePost";
import H3 from "../src/components/typography/H3";

const Body = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  width: 100vw;
  max-width: 1000px;
  min-height: 83vh;
  max-height: 100%;
  flex-grow: 1;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    min-height: 78vh;
  }
`

const StyledH3 = styled(H3)`
  margin: 60px 10px;
`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const fetcher = url => axios.get(url).then(res => res.data)

function HomePage({ user }) {
  
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, fetcher)
  
  return (
    <Body>
      <Navbar username={user.user} />
      <Content>
        <PostContainer>
          <CreatePost username={user.user} />
          <StyledH3>Últimas postagens:</StyledH3>
          <Posts>
            <Post 
              user={'Dev.CarolGonzaga'} 
              date={'2024-05-01T03:00:00Z'}
              text={'Espero que gostem desse espaço que eu criei! Sintam-se em casa e usem sem moderação 😊'}
            />

            {
              data?.map(post => 
                <Post 
                  key={post._id}
                  text={post.text}
                  user={post.createdBy.username}
                  date={post.createdDate}
                  isOwner={post.createdBy._id === user.id}
                  id={post._id}
                />
              )  
            }
          </Posts>
        </PostContainer>
      </Content>
    </Body>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user
    
    if (!user) {
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      }
    }

    return {
      props: {
        user
      }
    }
  }, ironConfig
)

export default HomePage;
