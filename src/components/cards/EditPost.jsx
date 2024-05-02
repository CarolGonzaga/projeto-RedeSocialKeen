import { useForm } from "react-hook-form";
import styled from "styled-components";
import { joiResolver } from "@hookform/resolvers/joi";

import { createPostSchema } from "../../../modules/post/post.schema";

import ControlledTextArea from "../inputs/ControllerTextArea";
import Button from "../inputs/Button";
import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 10px;
`

const EditPost = ({ id, text, onSave }) => {
  
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: "all",
  });

  const handleSaveEdit = async (data) => {
    try {
      
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        id,
        text: data.text
      })

      if (response.status === 200) {
        onSave()
      }

    } catch (err) {
      console.error(err);
    }

  }
  
  return (
    <StyledForm onSubmit={handleSubmit(handleSaveEdit)}>
      <ControlledTextArea 
        placeholder="Digite sua mensagem" 
        control={control} 
        name="text"
        maxLength="256"
        defaultValue={text}
      />
      <Button width="121px" height="32px" disabled={!isValid}>Salvar</Button>
    </StyledForm>
  )
}

export default EditPost