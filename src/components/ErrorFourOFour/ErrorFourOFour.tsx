import ErrorFourOFourStyled from "./ErrorFourOFourStyled";

const ErrorFourOFour = (): JSX.Element => {
  return (
    <ErrorFourOFourStyled className="error404">
      <span className="error404__title">Page not found</span>
      <span className="error404__number">404</span>
      <img
        className="error404__image"
        alt="Error. Page not found."
        src="/img/error404Icon.png"
      />
    </ErrorFourOFourStyled>
  );
};

export default ErrorFourOFour;
