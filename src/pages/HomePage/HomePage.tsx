import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Button
        aria-label="add-button"
        className="button"
        content=<i className="fa-solid fa-plus"></i>
      />
      <Loading />
    </>
  );
};

export default HomePage;
