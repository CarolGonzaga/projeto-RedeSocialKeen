import styled from "styled-components"

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPost};
  width: 100%;
  min-height: 154px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px dashed ${(props) => props.theme.black};
  padding: 10px;
`

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.primary};
`

const StyledDate = styled.p`
  font-size: 11px;
`

const StyledTextContainer = styled.div`
  margin: 20px 0;
  font-size: 14px;
`

function Post() {
  return (
    <PostContainer>
      <StyledUsername>@Dev.CarolGonzaga</StyledUsername>
      <StyledDate>01 de Maio de 2024</StyledDate>
      <StyledTextContainer>
        Espero que gostem desse espaço que eu criei!
        <br />Sintam-se em casa e usem sem moderação 😊
      </StyledTextContainer>
    </PostContainer>
  )
}

export default Post