import styled from "styled-components";

interface StyledButtonProps {
  $backgroundColor: string;
  color: string;
  $hoverColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({$backgroundColor}) => $backgroundColor};
  color: ${({color}) => color};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${({$hoverColor}) => $hoverColor || ""};
  }
`;
