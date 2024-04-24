import styled from "styled-components";

const WIDTH_XL = "1008px";
const WIDTH_SM = "560px";

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1008px;
  max-height: 700px;
  background-color: #ffffff;
  box-shadow: 7px 7px 4px -2px rgba(0, 0, 0, 0.09);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${WIDTH_XL}) {
    flex-direction: column;
  }
`;

const StyledImage = styled.div`
  background-image: url("/fundo.png");
  background-repeat: no-repeat;
  background-size: cover;

  width: 426px;
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${WIDTH_XL}) {
    background-image: url("/fundo1.png");
    background-position: center;

    width: 100%;
    height: 100%;
  }

  @media (max-width: ${WIDTH_SM}) {
    background-image: url("/fundo2.png");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;

    width: 100%;
    height: 100%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${WIDTH_XL}) {
    width: 584px;
  }

  @media (max-width: ${WIDTH_XL}) {
    width: 100%;
  }
`;

const StyledContainerTitle = styled.h1`
  font-family: "Alfa Slab One";
  font-weight: 400;
  font-size: 50px;
  line-height: 58px;
  text-align: center;
  color: #E85972;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-top: 112px;
  width: 100%;

  @media (max-width: ${WIDTH_XL}) {
    margin: 0 10px;
    margin-top: 50px;
    width: 100vw;
  }

  @media (max-width: ${WIDTH_SM}) {
    margin: 0 10px;
    margin-top: 20px;
  }
`;

const StyledContainerSubtitle = styled.h4`
  width: 348px;
  text-align: right;
  font-weight: 275;
  font-size: 16px;

  @media (max-width: ${WIDTH_XL}) {
    margin-bottom: 50px;
    width: 100vw;
    text-align: center;
  }

  @media (max-width: ${WIDTH_SM}) {
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

export default function ImageWithSpace({ children }) {
  return (
    <StyledFlex>
      <StyledImage>
        <StyledContainerTitle>#Social Keen</StyledContainerTitle>
        <StyledContainerSubtitle>
          Comunidade focada no público Queer
        </StyledContainerSubtitle>
      </StyledImage>
      <StyledContainer>{children}</StyledContainer>
    </StyledFlex>
  );
}
