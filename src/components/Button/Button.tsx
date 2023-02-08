import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  content: string;
}

const Button = ({ className, content }: ButtonProps): JSX.Element => {
  return <ButtonStyled className={className}>{content}</ButtonStyled>;
};

export default Button;
