import { StyledButton } from "./styled";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  color = "black",
  hoverColor,
  backgroundColor = "lightgblue",
  onClick,
  type = "button"
}: ButtonProps) => {

  return (
    <StyledButton
      $backgroundColor={backgroundColor} // transient prop which is consumed only by styled components
      color={color}
      $hoverColor={hoverColor} // transient prop which is consumed only by styled components
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
