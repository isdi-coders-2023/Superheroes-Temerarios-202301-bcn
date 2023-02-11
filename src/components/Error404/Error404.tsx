import Error404Styled from "./Error404Styled";

const Error404 = (): JSX.Element => {
  return (
    <Error404Styled className="error404">
      <span className="error404__title">Page not found</span>
      <span className="error404__number">404</span>
      <img
        className="error404__image"
        alt="Error. Page not found."
        src="/img/error404Icon.png"
      />
    </Error404Styled>
  );
};

export default Error404;
