import styled from "styled-components";
import H4 from "../typography/H4";
import TextArea from "../inputs/TextArea";
import Button from "../inputs/Button";
import Text from "../typography/Text";

const PostBox = styled.div`
  background-color: ${(props) => props.theme.backgroundPost};
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed ${(props) => props.theme.black};
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 20px;
`

const TextContainer = styled.div`
  margin: 20px;

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) or
  (min-height: ${(props) => props.theme.HEIGHT_XL}) {
    margin: 0 40px;
  }
`

const TextFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
`

function CreatePost({ username }) {
  return (
    <PostBox>
      <H4><Title>No que você está pensando, @{username}?</Title></H4>
      <TextContainer>
        <TextArea placeholder="Digite sua mensagem"/>
        <TextFooter>
          <Text textAlign="left">A sua mensagem será pública</Text>
          <Button width="121px" height="32px">Enviar</Button>
        </TextFooter>
      </TextContainer>

    </PostBox>
  );
}

export default CreatePost;
