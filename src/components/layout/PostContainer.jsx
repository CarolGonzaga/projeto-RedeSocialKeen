import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledChildren = styled.div`
  margin: 20px 30px;

  @media (min-height: ${(props) => props.theme.HEIGHT_XL}) or
  (min-width: ${(props) => props.theme.HEIGHT_XL}) {
    width: 85vw;
    max-width: 560px;
    padding: 10px;
  }
`;

export default function PostContainer({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  );
}
