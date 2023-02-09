import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Button className="button" content="+" />
      <Loading />
    </>
  );
};

export default HomePage;
