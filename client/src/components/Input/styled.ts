import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  font-size: 15px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;