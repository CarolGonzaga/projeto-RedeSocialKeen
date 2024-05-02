import styled from "styled-components";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useSWRConfig } from "swr";
import axios from "axios";

import { createPostSchema } from "../../../modules/post/post.schema";

import H4 from "../typography/H4";
import ControlledTextArea from "../inputs/ControllerTextArea";
import Button from "../inputs/Button";
import Text from "../typography/Text";

const PostBox = styled.div`
  background-color: ${(props) => props.theme.backgroundPost};
  width: 85vw;
  max-width: 520px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px dashed ${(props) => props.theme.black};
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 20px;
`;

const TextContainer = styled.div`
  margin: 20px;

  @media (min-width: ${(props) => props.theme.HEIGHT_XL}) or 
  (min-height: ${(props) => props.theme.HEIGHT_XL}) {
    margin: 0 40px;
  }
`;

const TextFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
`;

const StyledUser = styled.span`
  color: ${(props) => props.theme.primary};
`;

function CreatePost({ username }) {
  const { mutate } = useSWRConfig();

  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
      data
    );
    if (response.status === 201) {
      reset();
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
    }
  };

  return (
    <PostBox>
      <H4>
        <Title>
          No que você está pensando, @<StyledUser>{username}</StyledUser>?
        </Title>
      </H4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextContainer>
          <ControlledTextArea
            placeholder="Digite sua mensagem"
            control={control}
            name="text"
            maxLength="256"
            id="inputText"
          />
          <TextFooter>
            <Text textAlign="left">A sua mensagem será pública</Text>
            <Button width="121px" height="32px" disabled={!isValid}>
              Postar
            </Button>
          </TextFooter>
        </TextContainer>
      </form>
    </PostBox>
  );
}

export default CreatePost;
