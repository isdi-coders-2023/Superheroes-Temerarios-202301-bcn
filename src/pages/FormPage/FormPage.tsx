import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import FormPageStyled from "./FormPageStyled";

const FormPage = () => {
  return (
    <FormPageStyled>
      <div>
        <h2>Create your recipe</h2>
        <span className="form-titles">Name</span>
        <SearchBar
          arialabel="search-input"
          type="text"
          className="searchbar"
          placeholder="What's the name of your recipe?"
        />
        <span className="form-titles">Cuisine Type</span>
        <SearchBar
          arialabel="search-input"
          type="text"
          className="searchbar"
          placeholder="What type is this recipe of?"
        />
        <span className="form-titles">Ingredients</span>
        <SearchBar
          arialabel="search-input"
          type="text"
          className="searchbar"
          placeholder="Add ingredient"
        />
        <span className="form-titles">Image</span>
        <SearchBar
          arialabel="search-input"
          type="text"
          className="searchbar"
          placeholder="Add URL to an image"
        />
        <Button
          aria-label="add-button"
          className="button-recipe"
          content={<i className="button-recipe-content">Create recipe</i>}
        />
      </div>
    </FormPageStyled>
  );
};

export default FormPage;
