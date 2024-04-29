import styled from "styled-components"

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
`

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 16px;
`

const StyledDate = styled.p`
  font-size: 11px;
`

const StyledTextContainer = styled.div`
  margin: 20px 0;
  overflow-y: auto;
  max-height: 65px;
  font-size: 12px;
`

function Post() {
  return (
    <PostContainer>
      <StyledUsername>@usuário</StyledUsername>
      <StyledDate>01 de Janeiro de 2024</StyledDate>
      <StyledTextContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales ut nunc non suscipit. Ut faucibus justo ac ligula feugiat faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales ut nunc non suscipit. Ut faucibus justo ac ligula feugiat faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales ut nunc non suscipit. Ut faucibus justo ac ligula feugiat faucibus.
      </StyledTextContainer>
    </PostContainer>
  )
}

export default Post