import { StyledInput, StyledLabel } from "./styled";

interface InputProps {
  value: number | string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
}

const Input = ({
  value,
  onChange,
  label,
  type,
  id,
  name,
  placeholder,
  min,
  max,
  step,
  required = true,
}: InputProps) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        name={name}
        id={id}
        min={min}
        max={max}
        step={step}
      />
    </StyledLabel>
  );
};

export default Input;
