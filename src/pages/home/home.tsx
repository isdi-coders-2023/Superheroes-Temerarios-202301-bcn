import { useState, useEffect } from "react";
import { HitStructure } from "../../data/data";
import { useApiRequest } from "../../hooks/useGetRecipes";

const Home = (): JSX.Element => {
  const [recipeList, setRecipeList] = useState<HitStructure[]>([]);
  const recipe = useApiRequest();

  useEffect(() => {
    const fetchRecipes = async () => {
      const result = await recipe();
      setRecipeList(result.hits);
    };

    fetchRecipes();
  }, [recipe]);

  console.log(recipeList);

  return <p></p>;
};

export default Home;
