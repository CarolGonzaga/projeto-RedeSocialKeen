import styled from "styled-components";
import H1 from "../typography/H1";
import H4 from "../typography/H4";

const StyledFlex = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    max-width: 1000px;
    max-height: 700px;
    flex-direction: row;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 330px) {
    overflow: auto;
  }
`;

const StyledHead = styled.div`
  background-image: url("./fundo1.png");
  background-repeat: no-repeat;
  background-size: contain;

  width: 100vw;
  height: 20vh;
  max-height: calc(33vh - 50px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    background-image: url("./fundo.png");
    height: 100%;
    max-height: 100vh;
    max-width: 426px;
  }
`;

const StyledBody = styled.div`
  width: 100vw;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: ${(props) => props.theme.WIDTH_XL}) {
    height: 100%;
    max-height: 100vh;
    max-width: 574px;
  }
`;

export default function ImageWithSpace({ children }) {
  return (
    <StyledFlex>
      <StyledHead>
        <H1>#Social Keen</H1>
        <H4>Comunidade focada no público Queer</H4>
      </StyledHead>

      <StyledBody>{children}</StyledBody>
    </StyledFlex>
  );
}
