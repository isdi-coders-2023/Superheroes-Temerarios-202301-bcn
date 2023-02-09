import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  content: JSX.Element;
  "aria-label": string;
}

const Button = ({ className, content }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled aria-label="add" className={className}>
      {content}
    </ButtonStyled>
  );
};

export default Button;
