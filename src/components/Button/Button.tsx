import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: string;
  content: string;
}

const Button = (
  { type }: ButtonProps,
  { content }: ButtonProps
): JSX.Element => {
  return (
    <ButtonStyled>
      <button className={type}>{content}</button>
    </ButtonStyled>
  );
};

export default Button;
