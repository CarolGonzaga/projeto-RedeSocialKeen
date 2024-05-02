import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { useSWRConfig } from "swr";

import MenuButton from "../nav/MenuButton";
import EditPost from "./EditPost"

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPost};
  box-sizing: border-box;
  
  width: 85vw;
  max-width: 520px;
  min-height: 154px;
  max-height: 550px;
  
  padding: 10px;
  margin: 10px;
  
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    max-height: 400px;
  }
`

const ContainerMenu = styled.div`
  float: right;
  cursor: pointer;
`;

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.primary};
`

const StyledHash = styled.span`
  color: ${(props) => props.theme.black};
  font-size: 14px;
`

const StyledDate = styled.p`
  font-size: 11px;
`

const StyledTextContainer = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 20px 0 40px 0;
  max-height: 300px;
  overflow-y: auto;
`

function Post({ text, user, date, isOwner, id }) {

  const { mutate } = useSWRConfig()
  const [ editPost, setEditPost ] = useState(false)
  
  const handleEdit = async () => {
    setEditPost(true)
  };

  const handleSaveEdit = () => {
    setEditPost(false)
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        data: { id }
      })
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
      
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <PostContainer>
      {isOwner &&  
        <ContainerMenu>
          <MenuButton 
            options={[
                {
                  text: "Editar",
                  icon: "StyledPencilIcon",
                  onClick: handleEdit,
                },
                {
                  text: "Deletar",
                  icon: "StyledTrashIcon",
                  onClick: handleDelete,
                },
              ]}
          />
        </ContainerMenu>
      }
      <StyledUsername><StyledHash>@</StyledHash>{user}</StyledUsername>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <StyledTextContainer>
        {!editPost && text}
        {editPost && <EditPost id={id} text={text} onSave={handleSaveEdit} />}
      </StyledTextContainer>
    </PostContainer>
  )
}

export default Post