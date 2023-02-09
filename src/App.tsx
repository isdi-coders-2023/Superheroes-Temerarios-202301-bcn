import Header from "./components/Header/Header";
import Error404Page from "./pages/Error404Page/Error404Page";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div className="app">
      <Error404Page />
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
