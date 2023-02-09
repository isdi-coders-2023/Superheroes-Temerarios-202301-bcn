import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled
      aria-label="the page is loading"
      className="loader"
      role="dialog"
    ></LoadingStyled>
  );
};

export default Loading;
