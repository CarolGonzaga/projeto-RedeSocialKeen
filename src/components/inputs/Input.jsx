import { forwardRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const onAutoFillStart = keyframes`
  from {}
  to {}
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.white} inset !important;
    -webkit-text-fill-color: ${(props) => props.theme.black} !important;
    animation-name: ${onAutoFillStart};
    animation-fill-mode: both;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: ${({ isFilled }) => (isFilled ? "-20px" : "25%")};
  left: 0;
  pointer-events: none;
  font-size: ${({ isFilled }) => (isFilled ? "10px" : "12px")};
  transition: all 0.3s ease;
  display: flex;
  gap: 10px;
`;

const errorMessage = {
  "string.empty": "*Este campo é obrigatório!",
  "string.email": "*Informe um e-mail válido!",
  "duplicated": (label) => `*Já está em uso. Informe outro ${label}!`
};

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.error};
`;

const Input = forwardRef(({ label, error, ...props }, ref) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsFilled(true);
  };

  const handleBlur = (event) => {
    setIsFilled(!!event.target.value);
  };
  
  const handleAutoFill = (event) => {
    if (event.animationName === onAutoFillStart.getName()) {
      setIsFilled(true);
    }
  };

  return (
    <StyledInputContainer>
      <StyledLabel isFilled={isFilled}>
        {label}
        {error && 
        <ErrorMessage>
          {error.type === "duplicated" ? errorMessage.duplicated(label) : errorMessage[error.type] || error.message}
        </ErrorMessage>}
      </StyledLabel>
      <StyledInput
        {...props}
        error={error}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onAnimationStart={handleAutoFill}
      />
    </StyledInputContainer>
  );
});

export default Input;