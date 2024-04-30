import styled from "styled-components";

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
`

function Input ({ ...props }) {
  return (
    <StyledInput {...props} />
  )
}

export default Input