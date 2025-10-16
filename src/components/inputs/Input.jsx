import { forwardRef, useState } from "react";
import styled from "styled-components";

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
    /* Remove a cor de fundo forçado pelo navegador */
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme.white} inset !important;
    /* Garante que a cor do texto seja a correta */
    -webkit-text-fill-color: ${(props) => props.theme.black} !important;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: ${({ isFilled }) => (isFilled ? "-20px" : "25%")};
  left: 0;
  pointer-events: none;
  font-size: ${({ isFilled }) => (isFilled ? "8px" : "10px")};
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1.2;

  ${StyledInput}:-webkit-autofill + & {
    top: -20px;
    font-size: 10px;
  }
`;

const errorMessage = {
  "string.empty": "*Este campo é obrigatório!",
  "string.email": "*Informe um e-mail válido!",
  "duplicated": (label) => `*Este e-mail já está em uso!`
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
      />
    </StyledInputContainer>
  );
});

export default Input;
