import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1>Hack'n'Eat</h1>
      <Button className="button" content="+" />
      <Loading />
    </>
  );
};

export default HomePage;
