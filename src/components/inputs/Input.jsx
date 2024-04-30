import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
`

const Input = forwardRef(({ ...props }, ref) => {
  return (
    <StyledInput {...props} ref={ref} />
  )
})

export default Input