import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledChildren = styled.div`
  margin: 20px 30px;
  overflow-y: auto;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    width: 60%;
    max-width: 520px;
    padding: 0;
    margin: 30px auto;
  }
`;

export default function PostContainer({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  );
}
