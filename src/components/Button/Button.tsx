import { ButtonProps } from "../../data/types";
import ButtonStyled from "./ButtonStyled";

const Button = ({ className, content }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled aria-label="add" className={className}>
      {content}
    </ButtonStyled>
  );
};

export default Button;
