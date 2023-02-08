import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled
      aria-label="the page is loading"
      className="loader"
    ></LoadingStyled>
  );
};

export default Loading;
