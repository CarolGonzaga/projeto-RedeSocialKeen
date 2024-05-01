import styled from "styled-components"
import moment from "moment"

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

function Post({ text, user, date }) {
  return (
    <PostContainer>
      <StyledUsername>@{user}</StyledUsername>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <StyledTextContainer>
        {text}
      </StyledTextContainer>
    </PostContainer>
  )
}

export default Post