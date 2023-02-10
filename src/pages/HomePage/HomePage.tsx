import Button from "../../components/Button/Button";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Button
        aria-label="add-button"
        className="button-add"
        content=<i className="fa-solid fa-plus"></i>
      />
    </>
  );
};

export default HomePage;
